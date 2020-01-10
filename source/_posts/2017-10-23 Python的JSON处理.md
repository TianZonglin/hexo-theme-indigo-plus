date: 2017-10-23
categories: Python学习笔记
tags: [Python]
comments: true
title: Python的JSON处理
---

	注：此为慕课网Python（不打广告）视频的观看笔记，只做记录之用，并未勘误。


#### **什么是JSON：**
    是一种轻量级的（比较于XML格式）数据交换格式

#### **表现形式：**
    字符串
    不同语言可以将其转换为不同类型：Python(dict),JavaScript(Object)

#### **优势：**
    易于阅读，易于解析，网络传输开销小效率高，适合跨语言交换数据
	
#### **应用场景：**
    前后台交互、多语言服务的交互
	
#### **几种定义：**
    JSON字符串：符合JSON格式的字符串。{"name":"Tom"}

#### **操作JSON字符串:**
	处理方式：
		Python内置模块json，转换为字典dict类型
	示例：
		import json
		Json_str = '{"name":"Tom", "aga":20, "sex":"female"}'
		注意上述字符串要加引号：双引号，数字不用加，布尔值不用加
		整个字符串可以用单引号包装；
		
		student = json.loads(Json_str)
		print(type(student))
		#输出 <class 'dict'>
		print(student)
		#输出 {'name': 'Tom', 'sex': 'female', 'aga': 20}

		访问JSON的成员
		print(student['name'])

#### **包含多个对象的Array形式**
	处理方式：
		Python中"反序列化"为List<dict>

	示例：
		import json
		Json_str = '[{"name":"Tom", "aga":20},{"name":"Jack", "aga":16}]'
		student = json.loads(Json_str)

		print(type(student))
		#<class 'list'>
		print(student)
		#[{'aga': 20, 'name': 'Tom'}, {'aga': 16, 'name': 'Jack'}]

#### **反序列化：**
	上述JSON格式转化为Python类型，即为反序列化
	反序列化对应的数据类型：
		object          dict
		array           list
		string          str 
		number          int/float
		true/false      True/False
		null            None
		
#### **序列化**
	即将现有数据类型转化为JSON格式
	处理方式：
		使用json模块的json.dumps()
	示例：
		import json
		Json_str = [
				{"name":"Tom", "aga":20},
				{"name":"Jack", "aga":16}
			]
		student =json.dumps(Json_str)
		 
		print(type(student))
		#<class 'str'>
		上述list已经序列化为JSON字符串

		print(student)
		#[{"name": "Tom", "aga": 20}, {"name": "Jack", "aga": 16}]

#### **JSON相关概念：**   
    JSON
    JSON对象
    JSON字符串
	误区一：JSON和JavaScript没有太大关系
		遵循ECMASCRIPT的语言：ActionScript，TypeScript，JavaScript，JSON
	误区二：JSON就是字符串
		JSON具有自己的数据类型，与JavaScript相似




