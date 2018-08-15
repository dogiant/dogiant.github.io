---
title: webpack学习笔记
date: "2018-07-13"
---


官网：  
https://webpack.js.org/guides/getting-started/ 
##Guides学习  
###安装

```  
mkdir webpack-demo && cd webpack-demo  
npm init -y   
npm install webpack webpack-cli --save-dev    
```

###起步

配置 webpack.config.js

```
npx webpack --config webpack.config.js

```

配置 package.json  

```
    "scripts": {   
    "build": "webpack"

```
**通过 npm run build 来执行构建**

###管理资源  

```
npm install --save-dev style-loader css-loader
npm install --save-dev file-loader
npm install --save-dev csv-loader xml-loader

```
注意：使用goog-webfont-dl工具下载字体.
 
```
npm install -g goog-webfont-dl
goog-webfont-dl -a -f 'Source Sans Pro' -y '300,400,600,900'
goog-webfont-dl -a -f 'Lato' -y '100' 
```

###管理输出

```
npm install --save-dev html-webpack-plugin
```
```
  const path = require('path');

  module.exports = {
-   entry: './src/index.js',
+   entry: {
+     app: './src/index.js',
+     print: './src/print.js'
+   },
    output: {
-     filename: 'bundle.js',
+     filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```

清理dist文件夹

```
npm install clean-webpack-plugin --save-dev
```
webpack.config.js

```
+ const CleanWebpackPlugin = require('clean-webpack-plugin');
...
    plugins: [
+     new CleanWebpackPlugin(['dist']),
```

##开发
###观察模式

package.json

```

{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
+   "watch": "webpack --watch",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^1.0.0",
    "csv-loader": "^3.0.2",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "papaparse": "^4.5.0",
    "style-loader": "^0.21.0",
    "webpack": "^4.16.0",
    "webpack-cli": "^3.0.8",
    "xml-loader": "^1.2.1"
  },
  "dependencies": {
    "lodash": "^4.17.10"
  }
}

```


###使用 webpack-dev-server

webpack.config.js

```
+   devServer: {. 
+     contentBase: './dist'
+   },  

```

###第一个问题来了：

```
ZBMAC-C02VQ200H:webpack-demo dubiaoqi$ npm start

> webpack-demo@1.0.0 start /data/javascript-lab/webpack-demo
> webpack-dev-server --open

events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: getaddrinfo ENOTFOUND localhost
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:50:26)
Emitted 'error' event at:
    at GetAddrInfoReqWrap.doListen [as callback] (net.js:1499:12)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:50:17)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! webpack-demo@1.0.0 start: `webpack-dev-server --open`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the webpack-demo@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/dubiaoqi/.npm/_logs/2018-07-13T08_32_20_049Z-debug.log
ZBMAC-C02VQ200H:webpack-demo dubiaoqi$ 

```
提示问题： 没有拿到地址信息localhost.  
  
https://segmentfault.com/a/1190000015274463   
配置host  
  
```
# My hosts
127.0.0.1	localhost
```
处理完毕，启动成功。

###使用 webpack-dev-middleware

```
npm install --save-dev express webpack-dev-middleware
```
webpack.config.js

```
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
+     publicPath: '/'
    }
```
增加server.js

```
  webpack-demo
  |- package.json
  |- webpack.config.js
+ |- server.js
  |- /dist
  |- /src
    |- index.js
    |- print.js
  |- /node_modules
```

server.js

```
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```

添加一个 npm script
package.json

```
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "watch": "webpack --watch",
      "start": "webpack-dev-server --open",
+     "server": "node server.js",
      "build": "webpack"
    },
```
执行成功
http://localhost:3000




