#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const params = process.argv[2] && process.argv[2].slice(1)

let url = path.join(process.pwd(), params)

//判断是文件还是文件夹
if (fs.existsSync(url)) {
    //文件夹
    if (fs.statSync(url).isDirectory()) {
        let a = fs.readFileSync(url)
        let b = a.map(item => {
            let exname = fs.exname(item)
            let size = fs.statSync(path.join(params, item)).size
            return `${item}-${exname && exname.slice(1)}-${size ? size : ''}`
        })
    } else {
        console.log(params)
    }
} else {
    console.log('目录不存在')
}
