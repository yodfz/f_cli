// (function () {
//
// }(program.add, program.args[0]));
var page_template = require('./page_template');
var fs = require('fs');

module.exports = (nowPath, key, name)=> {
    var template = page_template[key];
    if (template) {
        template.files.map(data=> {
            var templateData = fs.readFileSync(__dirname + data.path, 'utf-8');
            var fileName = data.name.replace('[name]', name);
            fs.writeFileSync(nowPath + '/' + fileName, templateData);
            console.log("创建" + fileName);
        });
        console.log('[SUCCESS]');
    } else {
        throw '不支持此类型文件模版。';
    }
}