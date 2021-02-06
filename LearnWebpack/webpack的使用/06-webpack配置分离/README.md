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

安装Vue脚手架：
> npm install -g @vue/cli

如果想使用2.x版本的Vue脚手架：
> npm install -g @vue/cli-init

Vue CLI2初始化项目：
> vue init webpack my-project

Vue CLI3初始化项目：
> vue create my-project