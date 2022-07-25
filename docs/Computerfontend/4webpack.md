# Webpack


> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 https://segmentfault.com/a/1190000021395777

### 前言

2020 年即将到来，在众多前端的招聘要求里，`webpack`、`工程化`这些字眼频率越来越高。日常开发者中，我们常常在用诸如 `vue-cli`、`create-react-app` 的脚手架来构建我们的项目。但是如果你想在团队脱颖而出 (鹤立鸡群)、拿到更好的 offer (还房贷)，那么你必须去深刻的认识下我们经常打交道的 `webpack`

> #### 本文共分为三个部分带你领略 webpack 的魅力。如有不足之处，恳请斧正

# 入门 (一起来用这些小例子让你熟悉 webpack 的配置)

---

#### 1.1 初始化项目

新建一个目录，初始化 npm

```
npm init
```

webpack 是运行在 node 环境中的，我们需要安装以下两个 npm 包

```
npm i -D webpack webpack-cli
```

* npm i -D 为 npm install --save-dev 的缩写
* npm i -S 为 npm install --save 的缩写

新建一个文件夹 `src` , 然后新建一个文件 `main.js`, 写一点代码测试一下

```
console.log('call me 老yuan')
```

配置 package.json 命令
[![](assets/138142910-7f6726e6b998d057_articlex.png)](https://postimg.cc/BtwWLsDS)
执行

```
npm run build
```

此时如果生成了一个 dist 文件夹，并且内部含有 main.js 说明已经打包成功了

### 1.2 开始我们自己的配置

上面一个简单的例子只是 webpack 自己默认的配置，下面我们要实现更加丰富的自定义配置

新建一个 `build` 文件夹，里面新建一个 `webpack.config.js`

```
const path = require('path');
module.exports = {
    mode:'development', 
    entry: path.resolve(__dirname,'../src/main.js'),  
    output: {
        filename: 'output.js',    
        path: path.resolve(__dirname,'../dist')  
    }
}
```

更改我们的打包命令
[![](assets/2508638692-30e80cf6856aa6c7_articlex.png)](https://postimg.cc/xX1bsv8y)
执行 `npm run build`
会发现生成了以下目录（图片）

其中 `dist` 文件夹中的 `main.js` 就是我们需要在浏览器中实际运行的文件

当然实际运用中不会仅仅如此，下面让我们通过实际案例带你快速入手 webpack

### 1.3 配置 html 模板

js 文件打包好了，但是我们不可能每次在 `html` 文件中手动引入打包好的 `js`

> 这里可能有的朋友会认为我们打包 js 文件名称不是一直是固定的嘛 (`output.js`)？这样每次就不用改动引入文件名称了呀？实际上我们日常开发中往往会这样配置:

```
module.exports = {
  
    output: {
      filename: '[name].[hash:8].js',    
      path: path.resolve(__dirname,'../dist')  
    }
}
```

这时候生成的 `dist` 目录文件如下
[![](assets/2792967335-a24cea981a42e529_articlex.png)](https://postimg.cc/8sv9ZY0D)
为了缓存，你会发现打包好的 js 文件的名称每次都不一样。webpack 打包出来的 js 文件我们需要引入到 html 中，但是每次我们都手动修改 js 文件名显得很麻烦，因此我们需要一个插件来帮我们完成这件事情

```
npm i -D html-webpack-plugin
```

新建一个 `build` 同级的文件夹 `public`, 里面新建一个 index.html

具体配置文件如下

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development', 
    entry: path.resolve(__dirname,'../src/main.js'),  
    output: {
      filename: '[name].[hash:8].js',    
      path: path.resolve(__dirname,'../dist')  
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'../public/index.html')
      })
    ]
}
```

生成目录如下 (图片)
[![](assets/2729064086-aba7ccb2c011381e_articlex.png)](https://postimg.cc/6yYkZvPG)
可以发现打包生成的 js 文件已经被自动引入 html 文件中

#### 1.3.1. 多入口文件如何开发
