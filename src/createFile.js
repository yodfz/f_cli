// (function () {
//
// }(program.add, program.args[0]));
var page_template = require('./page_template');

module.exports = (key, name)=> {
    var template = page_template[key];
    if (template) {
        template.files.map(data=> {
            fs.readFile(__dirname + data.path, 'utf-8', (err, data)=> {
                fs.writeFile(nowPath + '/' + data.name.replace('[name]', name), data, w_err=> {
                    if (w_err) throw w_err;
                    console.log("创建" + program.add);
                });
            });
        });
        console.log('[END]');
    } else {
        throw '不支持此类型文件模版。';
    }
}