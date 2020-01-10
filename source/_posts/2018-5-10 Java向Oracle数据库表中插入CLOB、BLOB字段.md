date: 2018-5-10
categories: Java/数据库
tags: [Oracle,CLOB,BLOB,SQL插入]
comments: true
title: Java向Oracle数据库表中插入CLOB、BLOB字段

---


在需要存储较长字符串到数据库中时往往需要使用一些特殊类型的字段，在Oracle中即blob和clob字段，一般而言：Clob字段存储字符信息，比如较长的文字、评论，Blob字段存储字节信息，比如图像的base64编码。

注意，上述字段的使用均可以用其他方式替代，比如用MongoDB或者图片直接存储为文件等等，这里不纠结场景的合适与否，只是针对Blob和Clob类型的使用来举例。

### 操作场景

主要有三种场景：

- 仅对已知表中的某一字段写入Blob和Clob字段的值
- 更新已知表中全部字段的值（均为Blob和Clob字段）
- 插入数据中带有部分需要插入Blob和Clob字段的数据

总结来看，后两种均以第一种场景为基础，即我们必须明确如何向Blob和Clob字段写入数据。第二种场景实际上是第一种的重复操作，那么对于第三种，需要十分注意，这里意味着需要向表中插入一行记录，操作有部分差异，在此我们就用第三种场景为例来给出示例。

### 插入时带Blob和Clob字段

情景再现：

从数据源接收数据，解析完成后产生SQL语句并批量插入数据表，注意，原记录中含有若干个Blob字段（图片编码）和若干个Clob字段（记录信息），其余字段均为一般类型（String，Integer）

在给出代码前，注意几点：

1. Blob和Clob需要单独处理，即一个SQL语句无法完成上述需求
2. 整个过程分为三部分：组装SQL语句、第一遍插入、第二次插入Blob和Clob类型
3. 组装SQL语句时：Blob需要人为empty_blob()，置空为Clob需要人为置空为empty_clob()
4. 每次插入都需要对特殊字段进行处理，故无法使用batch操作
5. 特殊字段处理（第二次插入），必须在第一遍插入之后进行，此时已初始化为empty_blob()或empty_clob()

下面就以带特定场景需求的代码来展示写入示例。

### 代码背景

数据源每次发送一个XML字符串非常长，代码端每次解析这个串，解析后会成为 N 条记录，其中每条记录要解析为 M 个字段，其中含有 m 个Blob字段和 n 个Clob字段，现在需要把这 N 条记录插入到数据表中。

上述的 N，M，n，m 大小均不定且动态变化（已知某些字段是，但这些字段不一定出现），即大小未知。

### 大致代码流程

```java
// ... ... 整个过程围绕xml节点的迭代来完成

while(iter1.hasNext()){  

  Element e = iter1.next();  
  Iterator<Element> iter2 = e.elementIterator(); 
    
  // 每一条SQL
  while(iter2.hasNext()){   
    	
    boolean flag1 = false; // 标志是否含有Clob字段
    boolean flag2 = false; // 标志是否含有Blob字段
    
    String blobId = "";	// 储存所在SQL语句的主键值
    
    // ... ...

    // 开始组装每一条SQL语句
    Iterator<Element> iter3 = f.elementIterator();  
    while(iter3.hasNext()){  
 
      // ... ...

      switch(colname){
	  
	    case "CLOB字段名1" :
	    case "CLOB字段名2" :	
	    // ... 	
	    case "CLOB字段名N" : { //暂存CLOB数据 
	      cList.add(colname);
	      cList.add(h.getStringValue());
	      flag1 = true;
	      break; // break switch
	    }
	    case "BLOB字段名1" :
	    case "BLOB字段名2" :
	    // ...
	    case "BLOB字段名N" :{ //暂存BLOB数据 
	      bList.add(colname);
	      bList.add(h.getStringValue());
	      flag2 = true;
	      break;
	    }
	    default:{
	      if( this value is the primary key ){
	        blobId = this value
	      }    
	
	      strVALUE.append( this valu , ); // 字段值
	      strNAMES.append( his value , ); // 字段名   
        }
      }
    }
    // 去掉最后一个多余的逗号
    strVALUE.deleteCharAt( strVALUE.length() - 1);
    strNAMES.deleteCharAt( strNAMES.length() - 1);
    	
    // 然后追加处理 empty_clob()和empty_blob()
    	
    for(int i = 0;i < cList.size(); i=i+2){
      strNAMES.append(",\""+cList.get(i)+"\"");
      strVALUE.append(",empty_clob()");
    }
    for(int i = 0;i < bList.size(); i=i+2){
      strNAMES.append(",\""+bList.get(i)+"\"");
      strVALUE.append(",empty_blob()");
    }
    	
    // 最终形态（第一次插入的语句）
    sqlStr.append("INSERT INTO 表名 ( "+strNAMES+" ) VALUES ( "+strVALUE+" )");
        	
    pstmt = con.prepareStatement(sqlStr.toString());

    pstmt.executeUpdate(); // first insert done
        
    if(pstmt != null){
      pstmt.close();
    }
        	
    // 上述第一次插入完成后，开始单独处理特殊类型（第二次插入）
        
    // 根据 flag1 判断是否有Clob类型的数据
    if(flag1){
      for(int i = 0;i < cList.size(); i=i+2){
        pstmt = con.prepareStatement(
          "SELECT "+cList.get(i)+" FROM 表名 WHERE 表主键 = "+blobId+" for update");
        ResultSet rs = pstmt.executeQuery();
        Writer outStream = null;
        if (rs.next()) {  
          //得到java.sql.Clob对象后强制转换为oracle.sql.CLOB  
          oracle.sql.CLOB clob = (oracle.sql.CLOB) rs.getClob(cList.get(i));  
          outStream = clob.getCharacterOutputStream();  
          //传入字符串
          char[] c = cList.get(i+1).toCharArray();  
          outStream.write(c, 0, c.length);  
        }  
        outStream.flush();  
        outStream.close();  
        con.commit(); 
        if(pstmt != null){
          pstmt.close();
        }
      }
    }
        
    // 根据 flag1 判断是否有Blob类型的数据
    if(flag2){
      for(int i = 0;i < bList.size(); i=i+2){
        pstmt = con.prepareStatement(
          "SELECT "+bList.get(i)+" FROM 表名 WHERE 表主键 = "+blobId+" for update" );
        ResultSet rs = pstmt.executeQuery();
        OutputStream os = null;
        if (rs.next()) {  
          // 得到java.sql.Blob对象后强制转换为oracle.sql.BLOB  
          oracle.sql.BLOB blob = (oracle.sql.BLOB) rs.getBlob(bList.get(i));  
          // 通过getBinaryOutputStream()方法获得向数据库中插入图片的流
          os = blob.getBinaryOutputStream();  
          // 读取想要存储的图片文件（或串值） 
          InputStream is = new ByteArrayInputStream(bList.get(i+1).getBytes());
          // 依次读取流字节,并输出到已定义好的数据库字段中.  
          int b = 0;  
          while ((b = is.read()) != -1) {  
            os.write(b);  
          }  
        }  
        os.flush();  
        os.close();  
        con.commit(); 
        if(pstmt != null){
          pstmt.close();
        }
      }
    }
  } // end while 
} // end while 
```

上述代码段的环境非常特殊，前面已经说了，是一个比较复杂的处理逻辑，代码中有些变量定义没写出来，有些地方也去掉了特定变量换成了文字叙述，所以，上述代码仅仅是为了提供思路，并且包含了一些处理技巧：

- 如何结合XML对象解析构造SQL
- 如何拼接SQL字符串
- 如何暂存特殊类型字段
- 如何在第一次插入时设置empty_blob()
- 如何通过主键值来进行第二次插入
- 如何插入Blob和Clob字段

如果你有更好的方法或者是对该文章有任何的疑问或想法，请在下方留言，我会第一时间回复的！
