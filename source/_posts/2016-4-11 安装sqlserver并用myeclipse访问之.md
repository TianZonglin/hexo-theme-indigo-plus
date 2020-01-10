date: 2016-4-11 
categories: Java/数据库
tags: [Java,Sqlserver]
comments: true
title: 安装sqlserver并用myeclipse访问之
---


之前都是用mysql现在项目要求用sqlserver，现把安装配置连接步骤总结如下：

### 安装sqlserver数据库

网上安装资源很多，我从这里下载的安装版：http://free.zolsky.com/activation/soft/21.htm

下好后按照教程装好，教程可参见：

在安装时应该要输入一个秘钥，秘钥在此：http://zhidao.baidu.com/question/873260145955726092.html?fr=iks&word=sqlserver2008r2++empress%C3%D8%D4%BF&ie=gbk

上面链接中的秘钥分标准版企业版等好几个版本，我安装时的版本选项是英文，这里对应尝试一下只要秘钥有效就能继续进行安装工工作了。

### 使用management studio登录

下载安装完成后，在相应安装目录下会发现有sqlserver management studio这歌工具，图标是圆筒和锤子加扳手；

打开之后会填写登录账号密码，一般在安装时你已经设置了密码，这时身份验证选择“sqlserver身份验证”，输入完毕后即可进入；

**登录失败的解决方法：**

详见链接：http://wenku.baidu.com/link?url=00tLSKLmDSma0-BZLUdteUx2Ij4GOmnAIPpEhgDn_RZdQUn8Gx0luK74dnp_MFcT8R2nfDQvlAys0VsTRhlTeiD9IjdSWDxWqs4HVWxPRKq

sqlserver身份验证有时会出现错误（比如忘记密码），这时可以使用windows验证，windows验证一般可以直接进入，无需密码；

进入之后找到左侧“安全性”一栏，点开之后再最低部有个sa项，双击打开之后可以更改密码，之后重新登录，会发现用sqlserver验证也可以成功登录了

**注意：**

使用sqlserver验证登录是必要的，因为在项目中链接数据库操作是就是使用的此验证，故要确保sqlserver验证可以登陆成功，之后在工程的链接代码中还要提供相应的用户名和密码。



### 使用myeclipse连接sqlserver·

首先下载连接sqlserver的jar包，名为sqljdbc4.jar，下载地址：http://download.csdn.net/download/hgg923/6542847

然后myeclipse中新建一个java工程，把下好的包导入到工程中；

之后在java文件中书写如下，代码转自：http://blog.163.com/jackie_howe/blog/static/19949134720125173539380/

```java
import java.sql.*;

public class Main {
    public static void main(String [] args) {
        String driverName="com.microsoft.sqlserver.jdbc.SQLServerDriver";
        String dbURL="jdbc:sqlserver://localhost:1433;DatabaseName=填写你的数据库名";
        String userName="填写你的用户名，我的是sa";
        String userPwd="填写你的密码";
        try  {
            Class.forName(driverName);
            System.out.println("加载驱动成功！");
        }catch(Exception e){
            e.printStackTrace();
            System.out.println("加载驱动失败！");
        }
        try{
            Connection dbConn=DriverManager.getConnection(dbURL,userName,userPwd);
            System.out.println("连接数据库成功！");
        }catch(Exception e) {
            e.printStackTrace();
            System.out.print("SQL Server连接失败！");
        }		
    }

}
```

将上述代码中的用户名密码该为自己的信息，然后运行，一般会输出：

    加载驱动成功！
    连接数据库成功！

如果见到以上内容就代表大功告成！代码访问数据库工作就告一段落了。

