// 小明
// 1.导入{}中定义的变量
import {flag, sum} from "./aaa.js"
if(flag){
    console.log('小明，hhhhhhhhhhhhh')
    console.log(sum(20, 30))
}

// 2.直接导入export
import {num1, height} from "./aaa.js";

console.log(num1)
console.log(height)

// 3.导入 export的function
import {mu1, Person} from './aaa.js'

console.log(mu1(30, 50));

const p = new Person();
p.run();

// 4.导入 export default中的内容
import addr from './aaa.js'
//console.log(addr)
addr('你好阿')

// 5.统一全部导入
import * as aaa from './aaa.js'

console.log(aaa.flag)
console.log(aaa.height)