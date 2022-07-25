# MOCK
# mock的使用场景

当前端工程师需要独立于后端并行开发时,后端接口还没有完成,那么前端怎么获取数据？

这时可以考虑前端搭建web server自己模拟假数据,这里我们选第三方库`mockjs`用来生成随机数据,拦截 Ajax 请求。

下面是mock原理图：

![image-20200608211547162](assets/image-20200608211547162.png)

官网：[Mock.js](http://mockjs.com/)  。下面是`mockjs`具有的特点

* 前后端分离：让前端攻城师独立于后端进行开发。
* 增加单元测试的真实性：通过随机数据，模拟各种场景。
* 开发无侵入不需要修改既有代码，就可以拦截 Ajax 请求，返回模拟的响应数据。
* 用法简单符合直觉的接口。
* 数据类型丰富支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等。
* 方便扩展：支持支持扩展更多数据类型，支持自定义函数和正则。

不仅在Vue-cli、小程序、JQuery等都可以使用。

# 场景1.在vue项目中使用mock.js

## 步骤1. 搭建测试项目

### 步骤1.1 创建项目

命令:

```cmd
vue create mock-demo
```

截图:

![](assets\1_2.png)

![](assets\1_3.png)

### 步骤1.2 安装依赖

命令:

```cmd
# 使用axios发送ajax
npm install axios --save  
# 使用mockjs产生随机数据
npm install mockjs --save-dev
# 使用json5解决  json文件无法添加注释问题
npm install json5 --save-dev
```

截图:

![](assets\1_4.png)

## 步骤2.学习mockjs

新建mock文件夹，新建testMockjs.js   [mockjs语法定义](http://mockjs.com/examples.html)

```javascript
const Mock = require('mockjs')  //mockjs 导入依赖模块
var id = Mock.mock('@id')       //得到随机的id,字符串
console.log(Mock.mock('@id'), typeof id)

var obj = Mock.mock({ 		//返回一个对象
    id: "@id()",          //得到随机的id,对象
    username: "@cname()",//随机生成中文名字
    date: "@date()",     //随机生成日期
    avatar: "@image('200x200','red','#fff','avatar')",//生成图片,参数:size, background, foreground, text
    description: "@paragraph()",//描述
    ip: "@ip()",//IP地址
    email: "@email()"//email
})
console.log(obj)


//  疑惑：需不需要加括号
let obj = Mock.mock({
  id: '@id',
  username: '@cname'
})
```

然后在控制台里运行

```
node testMockjs.js
```

## 步骤3.学习json5
