let prop = "props"
console.log("index " + prop)

const state = "the state"

// 模块之间相互引用
require("./Mb")

// 定义一个类
class Person{
    constructor(zs) {
        this.name = zs
    }
    hobby(){
        console.log("like basktebal")
    }
}

// 导出变量
// module.exports = {
//     state,
//     Person
// }

exports.a = state
exports.Person = Person
// exports 是 module.exports 的一个引用
// moudle.exports = exports

// exports = {}  //这个不是导出原有值，而是给exports重新赋值