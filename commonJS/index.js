// 文件形式的模块化

// require("./Ma.js")
// console.log(prop)   //defined 模块化变量命名不污染

// require('./Mb')

// let Ma = require("./Ma")
// console.log(Ma)
// console.log(Ma.state)
// let cai = new Ma.Person("caixukun")
// console.log(cai.name)
// cai.hobby()

// 目录形式的模块化
// require("./home")

// nodemodules里的模块
// let {a,b} = require("mytest")
// console.log(a)
// b()

// node_modules中的package.json 是配置文件，功能性文件
// require("mytest")

// 内置模块
const http = require("http")