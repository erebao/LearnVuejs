配置文件分离：
```
1）npm install webpack-merge@4.1.5 --save-dev
2）prod.config.js和dev.config.js中加：
    const webpackMerge = require('webpack-merge')
    const baseConfig = require('./base.config')
    module.exports = webpackMerge(baseConfig, {
        ......
    })
3）package.json中加：
    "scripts": {
        "build": "webpack --config ./build/prod.config.js",
        "dev": "webpack-dev-server --open --config ./build/dev.config.js"
    },
4）重新运行：npm run build 或 npm run dev
```