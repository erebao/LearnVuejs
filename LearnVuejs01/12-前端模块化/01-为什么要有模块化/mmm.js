// 小明
;(function () {
    // 1.想使用flag
    if (modelA.flag) {
        console.log('小明，hhhhhhhhhhhhh')
    }
    // 2.想使用sum函数
    console.log(modelA.sum(40, 50))
})()

// CommonJS模块化导入
//var {flag, sum} = require('./aaa.js')
// sum(20, 30)