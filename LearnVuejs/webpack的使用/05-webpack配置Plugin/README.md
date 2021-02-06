添加版权信息在webpack.config.js中加入：
```
const webpack = require('webpack')
和
plugins: [
    new webpack.BannerPlugin('最终版权归aaa所有')
]
```

打包html的plugin：
```
1）npm install html-webpack-plugin@3.2.0 --save-dev
2）删掉webpack.config.js中的：publicPath: 'dist/'
3）删掉html中的：<script src="./dist/bundle.js"></script>
4）webpack.config.js中加：
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
```

js压缩的plugin：
```
1）npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
2）webpack.config.js中加：
    const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
```

搭建本地服务器
```
1）npm install webpack-dev-server@2.9.3 --save-dev
2）package.json中加：
    "scripts": {
        "dev": "webpack-dev-server --open"
    },
3）控制台启动使用：npm run dev
```