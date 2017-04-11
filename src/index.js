#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var createFile = require('./createFile');
var aText = '创建一个模版页,会根据后缀名来确定文件类型' +
    '\n\t\t    支持 vue react 微信小程序模版:' +
    '\n\t\t    vue:f_cli add vue [name]' +
    '\n\t\t    react:f_cli add react [name]' +
    '\n\t\t    微信小程序:f_cli add wxml [name]';
var nowPath = process.cwd();

program
    .version('0.0.1')
    .option('a, add [name]', aText)
    .option('i, init [name] [name]', '创建与之相关的模版项目，当前可选参数有:vue react')
    .parse(process.argv);

if (program.add) {
    // 读取vue模版
    if (program.args.length <= 0) {
        console.log('请输入需要创建的文件名');
        return;
    }
    createFile(program.add, program.args[0]);
    // console.log('你选择创建' + program.add + '项目,正在下载中...');
    return;
}

if (program.init) {
    console.log('你选择创建' + program.init + '项目,正在下载中...');
    return;
}

