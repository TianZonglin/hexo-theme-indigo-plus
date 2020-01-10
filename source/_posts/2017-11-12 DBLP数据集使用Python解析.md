date: 2017-11-12
categories: 研究方向
tags: [Python,数据集]
comments: true
title: DBLP数据集使用Python解析
---

#### dblp的使用
>总的来说，DBLP集成元素不多，只有最基本的论文题目，时间，作者，发表类型及期刊或会议名称等等。可能很多人想要的标签、关键词都没有。但是，基于DBLP数据集这些基本的元素，可以挖掘、利用的也是很多。例如官网给出的统计信息，就能引申出很多东西。
涉及到DBLP，我能一下想到的关键词：经典的复杂网络，小世界，无标度，合作关系网，关系推荐，聚类，连接预测，随机游走，中心作者分析，作者影响力分析，研究热点发展等等，非常多。因此，DBLP是个很丰富宝贵的资源。
引述自：
http://blog.csdn.net/frontend922/article/details/18552077


#### dblp下载
    dblp.dtd	    2017-08-29 16:23	13K	 
    dblp.xml.gz	    2017-11-10 20:26	393M
    XML下载链接     http://dblp.uni-trier.de/xml/
 
	 

#### dblp原始数据集示例
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE dblp SYSTEM "dblp.dtd">
<dblp>
    <article mdate="2017-05-28" key="journals/acta/Saxena96">
        <author>Sanjeev Saxena</author>
        <title>Parallel IntegerSimulation Amongst CRCW Models.</title>
        <pages>607-619</pages>
        <year>1996</year>
        <volume>33</volume>
        <journal>Acta Inf.</journal>
        <number>7</number>
        <url>db/journals/acta/acta33.html#Saxena96</url>
        <ee>https://doi.org/10.1007/BF03036466</ee>
    </article>
    <article mdate="2017-05-28" key="journals/acta/Simon83">
        <author>Hans Ulrich Simon</author>
        <title>Pattern Matching in Trees and Nets.</title>
        <pages>227-248</pages>
        <year>1983</year>
        <volume>20</volume>
        <journal>Acta Inf.</journal>
        <url>db/journals/acta/acta20.html#Simon83</url>
        <ee>https://doi.org/10.1007/BF01257084</ee>
    </article>
</dblp>
```

#### dblp数据集建表语句
```sql
/*
Navicat MySQL Data Transfer

Source Server         : localmysql
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : visual_dataset

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2017-11-11 17:44:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dblp
-- ----------------------------
DROP TABLE IF EXISTS `dblp`;
CREATE TABLE `dblp` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `article_mdate` varchar(255) DEFAULT NULL,
  `article_key` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pages` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `volume` varchar(255) DEFAULT NULL,
  `journal` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `ee` varchar(255) DEFAULT NULL,
  `x2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;
```

#### 将dblp.xml解析到文件中的代码
```python
# -*- coding: utf-8 -*-
"""
原代码只将数据解析到文本，且对重复字段没有进行处理
<article>
    <author>Mr.A</author>
    <author>Mr.B</author>
</article>
此代码修正了上述不足，然后将解析后字段导入数据库
读取数据：dblp.xml 2.01G
导入Mysql：170万+
导入表：visual_dataset.dblp
生成备份文件：insert.sql
@author: Administrator
"""
#!/usr/bin/python
# -*- coding: UTF-8 -*-
from __future__ import print_function
import xml.sax
import sys  
import io
import re
import logging
import traceback 
import pymysql.cursors
sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8') #改变标准输出的默认编码  
logging.basicConfig(level=logging.DEBUG,
                format='%(message)s',
                datefmt='%a, %d %b %Y %H:%M:%S',
                filename='I:\\ABC000000000000\\Dblp\\simple\\app.log',
                filemode='w') 


class MovieHandler( xml.sax.ContentHandler ):
    '''
    res  类变量，记录解析后的字段值
    '''
    athr = []
    ee = []
    res=''
    sqlval=''
    def __init__(self):
        self.CurrentData = ""
        self.author = ""
        self.title = ""
        self.pages = ""
        self.year = ""
        self.volume = ""
        self.journal = ""
        self.number = ""
        self.url = ""
        self.ee = ""
    # 元素开始事件处理,对每个顶级标签内数据的解析都会重复的调用此方法
    def startElement(self, tag, attributes):

        self.CurrentData = tag
        if tag == "article":  
            try:

                if len(self.__class__.sqlval) :
                #print(re.sub(",$","",self.__class__.sqlval))
                    
                    lt = re.sub(",$","",self.__class__.sqlval).split(",")
                    lt2= sorted(set(lt),key=lt.index)

                    
                    insert_mysql(
                        ','.join(lt2),self.__class__.res,
                        ','.join(self.__class__.athr),
                        ','.join(self.__class__.ee)
                    )
            except:
                traceback.print_exc()
            #清空res变量，由于跨方法拼字符串，所以使用了类变量
            self.__class__.res=''
            self.__class__.sqlval=''
            self.__class__.athr=[]
            self.__class__.ee=[]
            #因为处在if判断后，所以只解析第一个标签内的属性值
            mdate = attributes["mdate"]
            key = attributes["key"]
            #拼接字符串
            self.__class__.res += mdate + SYMBOL + key + SYMBOL
            self.__class__.sqlval += "article_mdate,article_key,"

   # 经过开始事件->内容事件的方法之后，调用此结束事件处理，
   # 对先前内容事件方法中对实例变量的值进行统一过滤处理
    def endElement(self, tag):
        if self.CurrentData == "author":
            self.__class__.sqlval += "author,"
            if '$_author_$' not in self.__class__.res:
                self.__class__.res += "$_author_$" + SYMBOL
            self.__class__.athr.append(self.author)
        elif self.CurrentData == "title":
            self.__class__.sqlval += "title,"
            self.__class__.res += self.title + SYMBOL
        elif self.CurrentData == "pages":
            self.__class__.sqlval += "pages,"
            self.__class__.res += self.pages + SYMBOL
        elif self.CurrentData == "year":
            self.__class__.sqlval += "year,"
            self.__class__.res += self.year + SYMBOL
        elif self.CurrentData == "volume":
            self.__class__.sqlval += "volume,"
            self.__class__.res += self.volume + SYMBOL
        elif self.CurrentData == "journal":
            self.__class__.sqlval += "journal,"
            self.__class__.res += self.journal + SYMBOL
        elif self.CurrentData == "number":
            self.__class__.sqlval += "number,"
            self.__class__.res += self.number + SYMBOL
        elif self.CurrentData == "url":
            self.__class__.sqlval += "url,"
            self.__class__.res += self.url + SYMBOL
        elif self.CurrentData == "ee":
            self.__class__.sqlval += "ee,"
            if '$_ee_$' not in self.__class__.res:
                self.__class__.res += "$_ee_$" + SYMBOL
            self.__class__.ee.append(self.ee)
     
        self.CurrentData = ""


   # 内容事件处理，对每个子元素都执行此方法，并且重置实例变量的值
    def characters(self, content):
        if self.CurrentData == "author":
            self.author = content.replace("'","`")
        elif self.CurrentData == "title":
            self.title = content.replace("'","`")
        elif self.CurrentData == "pages":
            self.pages = content.replace("'","`")
        elif self.CurrentData == "year":
            self.year = content.replace("'","`")
        elif self.CurrentData == "volume":
            self.volume = content.replace("'","`")
        elif self.CurrentData == "journal":
            self.journal = content.replace("'","`")
        elif self.CurrentData == "number":
            self.number = content.replace("'","`")
        elif self.CurrentData == "url":
            self.url = content.replace("'","`")
        elif self.CurrentData == "ee":
            self.ee = content.replace("'","`")

#class结束

'''
独立方法：将解析出的字段导入Mysql
'''
def insert_mysql(names,values,authors,ees):
    global count
    if count==100:
        sys.exit
    val = re.sub(",'$","",values)
    val = re.sub("#","&",val)
    val = val.replace("$_ee_$",re.sub(",",",",ees))
    val = val.replace("$_author_$",re.sub(",",",",authors))
    sql = ''
    if len(names) & len(names):
        try:
            #存入Mysql via：github.com/PyMySQL/PyMySQL
            with connection.cursor() as cursor:
                
                sql = "INSERT INTO `dblp` ("
                sql +=names
                sql +=" )VALUES ('"
                sql +=val 
                sql +=" )"
                count += 1
                print('parse items and inserted :'+str(count))
                if sql is not None and sql != 'None':
                    logging.info(sql+';')
                    cursor.execute(sql)
            #创建的connection是非自动提交，需要手动commit 
            connection.commit()
            a = 1
        except:
                    
            logging.error(traceback.print_exc())


#这里直接运行，则本身__name__就是__main__ 
if ( __name__ == "__main__"):
    count = 0
    
    #定义全局分隔符
    SYMBOL = "','"

    XMLFPATH = "I:\\ABC000000000000\\Dblp\\dblp.xml"
    parser = xml.sax.make_parser()
    parser.setFeature(xml.sax.handler.feature_namespaces, 0)
    Handler = MovieHandler()
    parser.setContentHandler( Handler )

    connection = pymysql.connect(
        host='localhost',
        user='root',
        password='123',
        db='visual_dataset',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor)
    parser.parse(XMLFPATH)
    connection.close()  
  

```

#### 原代码来源于网络
```python
# -*- coding: utf-8 -*-
"""
解析dblp.xml，将结果存入dblp_result.txt内
@author: Administrator
"""
#!/usr/bin/python
# -*- coding: UTF-8 -*-
from __future__ import print_function
import xml.sax
import sys  
import io
import traceback 
sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8') 

class MovieHandler( xml.sax.ContentHandler ):
   '''
   res  类变量，记录解析后的字段值
   '''
   res=''
   def __init__(self):
      self.CurrentData = ""
      self.author = ""
      self.title = ""
      self.pages = ""
      self.year = ""
      self.volume = ""
      self.journal = ""
      self.number = ""
      self.url = ""
      self.ee = ""
   # 元素开始事件处理
   def startElement(self, tag, attributes):
      self.CurrentData = tag
      if tag == "article":
         print("self.__class__.res=",self.__class__.res)
         try:
           ww.write(self.__class__.res + '\n')
         except:
             traceback.print_exc()
        #清空res变量，由于跨方法拼字符串，所以使用了类变量
         self.__class__.res=''
        #因为处在if判断后，所以只解析第一个标签内的属性值
         mdate = attributes["mdate"]
         key = attributes["key"]
        #拼接字符串
         self.__class__.res=self.__class__.res + mdate + ';,;' + key + ';,;'

   # 元素结束事件处理
   def endElement(self, tag):
      if self.CurrentData == "author":
         #print ("author:", self.author)
         self.__class__.res=self.__class__.res + self.author + ';,;'
      elif self.CurrentData == "title":
         #print ("title:", self.title)
         self.__class__.res=self.__class__.res + self.title + ';,;'
      elif self.CurrentData == "pages":
         #print ("pages:", self.pages)
         self.__class__.res=self.__class__.res + self.pages + ';,;'
      elif self.CurrentData == "year":
         #print ("year:", self.year)
         self.__class__.res=self.__class__.res + self.year + ';,;'
      elif self.CurrentData == "volume":
         #print ("volume:", self.volume)
         self.__class__.res=self.__class__.res + self.volume + ';,;'
      elif self.CurrentData == "journal":
         #print ("journal:", self.journal)
         self.__class__.res=self.__class__.res + self.journal + ';,;'
      elif self.CurrentData == "number":
         #print ("number:", self.number)
         self.__class__.res=self.__class__.res + self.number + ';,;'
      elif self.CurrentData == "url":
         #print ("url:", self.url)
         self.__class__.res=self.__class__.res + self.url + ';,;'
      elif self.CurrentData == "ee":
         #print ("ee:", self.ee)
         self.__class__.res=self.__class__.res + self.ee + ';,;'
      self.CurrentData = ""


   # 内容事件处理
   def characters(self, content):
      if self.CurrentData == "author":
         self.author = content
      elif self.CurrentData == "title":
         self.title = content
      elif self.CurrentData == "pages":
         self.pages = content
      elif self.CurrentData == "year":
         self.year = content
      elif self.CurrentData == "volume":
         self.volume = content
      elif self.CurrentData == "journal":
         self.journal = content
      elif self.CurrentData == "number":
         self.number = content
      elif self.CurrentData == "url":
         self.url = content
      elif self.CurrentData == "ee":
         self.ee = content
        
#class结束

#这里直接运行，则本身__name__就是__main__ 
if ( __name__ == "__main__"):

   parser = xml.sax.make_parser()
   parser.setFeature(xml.sax.handler.feature_namespaces, 0)
   Handler = MovieHandler()
   parser.setContentHandler( Handler )
   ww=open('I:\\ABC000000000000\\Dblp\\simple\\dblp_result.txt','w+')
   parser.parse("I:\\ABC000000000000\\Dblp\\simple\\dblp.xml")
   ww.close()
```

#### 对于dblp数据的使用
(待续)



