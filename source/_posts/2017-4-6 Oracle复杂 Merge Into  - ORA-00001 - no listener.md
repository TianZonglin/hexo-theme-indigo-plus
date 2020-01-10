date: 2017-4-6
categories: Java/数据库
tags: [Oracle,Merge,Error]
comments: true
title: Oracle复杂 Merge Into  | no listener | ORA-00001
---

### 使用 Merge Into 进行数据表的增量更新
特点：如果数据存在则更新，如果不存在则插入
示例：北斗渔船位置的实时数据表

```
MERGE INTO A_DATA T1
USING (
	SELECT 		  '21212958881122' AS MSG_ID ,
							'北斗星通1' AS COMM_TYPE ,
							'20261' AS USER_ID ,
							'2818101'AS TERMINAL_CODE,
							'201704051' AS MSG_DATE ,
							'定时回传位置1' AS POS_TYPE ,
							'2017-04-05 20:56:311' AS UTC ,
							'126°33′431″' AS LONGITUDE ,
							'30°11′01″' AS LATITUDE ,
							'6801' AS COURSE ,
							'01' AS TRUEHEADING ,
							'8.91' AS SPEED ,
							'正常1' AS STATUS ,
							'01' AS VDESC ,
							'北斗星通1' AS TERMINAL_TYPE ,
							'2017-04-05 21:21:401' AS SYSTEM_TIME
	FROM dual
) T2
ON ( T1.TERMINAL_CODE = T2.TERMINAL_CODE)
WHEN MATCHED THEN
    UPDATE SET T1.MSG_ID = T2.MSG_ID ,
						 T1.COMM_TYPE = T2.COMM_TYPE ,
						 T1.USER_ID = T2.USER_ID ,
						 T1.MSG_DATE = T2.MSG_DATE ,
						 T1.POS_TYPE = T2.POS_TYPE ,
						 T1.UTC = T2.UTC ,
						 T1.LONGITUDE = T2.LONGITUDE ,
						 T1.LATITUDE = T2.LATITUDE ,
						 T1.COURSE = T2.COURSE ,
						 T1.TRUEHEADING = T2.TRUEHEADING ,
						 T1.SPEED = T2.SPEED ,
						 T1.STATUS = T2.STATUS ,
						 T1.VDESC = T2.VDESC ,
						 T1.TERMINAL_TYPE = T2.TERMINAL_TYPE ,
						 T1.SYSTEM_TIME = T2.SYSTEM_TIME 			
WHEN NOT MATCHED THEN 
    INSERT (MSG_ID ,COMM_TYPE ,USER_ID ,TERMINAL_CODE ,MSG_DATE ,POS_TYPE ,UTC ,LONGITUDE ,LATITUDE ,COURSE ,TRUEHEADING ,SPEED ,STATUS ,VDESC ,TERMINAL_TYPE ,SYSTEM_TIME ) 
	VALUES(T2.MSG_ID ,T2.COMM_TYPE ,T2.USER_ID ,T2.TERMINAL_CODE ,T2.MSG_DATE ,T2.POS_TYPE ,T2.UTC ,T2.LONGITUDE ,T2.LATITUDE ,T2.COURSE ,T2.TRUEHEADING ,T2.SPEED ,T2.STATUS ,T2.VDESC ,T2.TERMINAL_TYPE ,T2.SYSTEM_TIME);
```

### **SQL 错误: ORA-00001: 违反唯一约束条件 (SYSTEM.SYS_C0010160)**
00001. 00000 -  "unique constraint (%s.%s) violated"

原因：在select语句中的AS部分全部是取值于已存在记录的值，在id相同并执行update时，相当于更新一条完全相同的语句，即便是各个值没有违反唯一性约束，此时也会报: ORA-00001错误，不要全都一样就可以了；


在Java中使用Oracle的MERGE INTO语句时，老师报错：sql语句未正常结束，但在Navcat中完全正常
解决：Navcat中执行时语句的最后有个分号；但在Java中prepareStatement构造时，要去掉这个分号！！！！


### **连接错误:no listener、The Network Adapter could not establish the connection**

1.打开SQL Developer查看本地SYSTEM(例子)是否能连接（密码：ttzzlll）
如不行（报adapter错误等等）：
查看Oracle服务启动正常否：	
![截图.png-22.8kB][1]
如果未启动，则右键属性，转登录栏，使用账号密码重新登录，之后即可启动
上述完成，看是否可以本地连接，如果仍不行：
执行 lsnrctl start + lsnrctl status  看信息正常否
正常，则打开oracle安装目录下：oracle\product\12.1.0\dbhome_1\network\admin\listener.ora
打开listener.ora，找到最下方LINSTENER=(...)
修改HOST = 主机名（主机名可我的电脑右键属性查看）
保存，之后cmd下：
lsnrctl  stop
lsnrctl  start
lsnrctl  status
有一定的延迟，在客户机上连接，此时OK！！！！


  [1]: http://static.zybuluo.com/EVA001/3ch6i8je8ns3485eqegmybng/%E6%88%AA%E5%9B%BE.png