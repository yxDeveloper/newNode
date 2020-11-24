# 模块化

## 前端实现模块化：AMD sea.js   CMD require.js
## 后端实现模块化：common.js

+ require("./Ma.js") 文件夹相对路径".js"可以不写，"./"必须写
+ 模块化，模块之间变量命名不污染
+ 模块之间可以相互引用
+ moudle.exports = exports
+ exports = {}  //这个不是导出原有值，而是给exports重新赋值


### 模块化形式
+ 文件形式的模块化
+ 目录形式的模块化 放自己写的模块
+ nodemodules里的模块 放第三方模块
+ node_modules中的package.json 是配置文件，功能性文件

### 内置模块
+ http是node的内置模块
- http fs os...

### npm
+ npm :包管理器、模块管理器
- 查看版本：npm -v / npm version
- 下载模块： npm install ${name}
- 初始化：npm init
- 删除模块: npm uninstall ${name}

+ npm常用指令

