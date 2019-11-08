#! /usr/bin/env node

const path = require('path')
const fs = require('fs')

// let firstNew = process.argv[2]
// let lastNew = process.argv[3]

// console.log(firstNew)
// console.log(lastNew)

// if (fs.existsSync(path.join(process.cwd(), firstNew))) {
//     fs.renameSync(firstNew, lastNew)
// }


var i = 0 ;
//保存一下  读取下来的总文件
let list = fs.readdirSync(process.cwd())
list.forEach(item=>{
    if(/.js$/.test(item)){
        i++
        fs.renameSync(item,`index(${i}).js`)
    }
})