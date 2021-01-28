// 小明
var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
    return num1 + num2
}

if(flag){
    console.log(sum(20, 30))
}

// 1.导出方式一
export{
    flag, sum
}

// 1.导出方式二
export var num1 = 1000
export var height = 1.00

// 3 导出函数/类
export function mu1(num1, num2){
    return num1 * num2
}

export class Person {
    run(){
        console.log('在奔跑')
    }
}