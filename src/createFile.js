// (function () {
//
// }(program.add, program.args[0]));
var page_template = require('./page_template');
var fs = require('fs');

module.exports = (nowPath, key, name)=> {
    var template = page_template[key];
    if (template) {
        template.files.map(data=> {
            var fileName = data.name.replace('[name]', name);
            // 判断文件是否存在
            if (fs.existsSync(nowPath + '/' + fileName)) {
                console.log('已存在同名文件[' + fileName + '],无法创建!');
            }else{
                var templateData = fs.readFileSync(__dirname + data.path, 'utf-8');
                // 是否考虑替换参数?
                fs.writeFileSync(nowPath + '/' + fileName, templateData);
                console.log("创建" + fileName);
            }

        });
        console.log('[SUCCESS]');
    } else {
        throw '不支持此类型文件模版。';
    }
};