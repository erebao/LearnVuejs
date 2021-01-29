初始化项目的npm环境命令：
> npm init

安转项目的依赖包命令：
> npm install

将webpack ./src/main.js ./dist/bundle.js命令合并到npm run build，只需要在package.json中scripts下增加"build": "webpack"

本地安转开发依赖的webpack命令(在当前项目文件夹下执行)：
> npm install webpack@3.6.0 --save-dev