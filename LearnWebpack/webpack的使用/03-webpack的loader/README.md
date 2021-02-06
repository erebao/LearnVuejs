初始化项目的npm环境命令：
> npm init

安转项目的依赖包命令：
> npm install

将webpack ./src/main.js ./dist/bundle.js命令合并到npm run build，只需要在package.json中scripts下增加"build": "webpack"

npm安转开发依赖的webpack命令(在当前项目文件夹下执行)：
> npm install webpack@3.6.0 --save-dev

npm安转开发依赖的css-loader命令：
> npm install --save-dev css-loader@2.0.2

npm安转开发依赖的style-loader命令：
> npm install style-loader@0.23.1 --save-dev

npm安转开发依赖的less-loader less命令：
> npm install --save-dev less-loader@4.1.0 less@3.9.0

npm安转开发依赖的url-loader命令：
> npm install --save-dev url-loader@1.1.2

npm安转开发依赖的file-loader命令：
> npm install --save-dev file-loader@3.0.1

npm安转开发依赖的ES6语法处理转成ES5的babel-loader命令：
> npm install --save-dev babel-loader@7.1.5 babel-core@6.26.3 babel-preset-es2015@6.24.1