#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var aText = '创建一个模版页,会根据后缀名来确定文件类型' +
    '\n\t\t    支持 vue react 微信小程序模版:' +
    '\n\t\t    vue:a.vue -> a.vue ' +
    '\n\t\t    react:a.js.react -> a.js ' +
    '\n\t\t    微信小程序:a.wxml -> a.wxml';
var nowPath = process.cwd();
program
    .version('0.0.1')
    .option('a, add [name]', aText)
    .option('i, init [name]', '创建与之相关的模版项目，当前可选参数有:vue react')
    .parse(process.argv);

if (program.init) {
    console.log('你选择创建' + program.init + '项目,正在下载中...');
}
if (program.add) {
    console.log(program.add);
    // 读取vue模版
    fs.readFile(__dirname + '/template/template.vue', 'utf-8', (err, data)=> {
        fs.writeFile(nowPath + '/' + program.add, data, w_err=> {
            if (err) throw err;
            console.log("创建" + program.add + "完成!");
        });
    });

    // console.log('你选择创建' + program.add + '项目,正在下载中...');
}
