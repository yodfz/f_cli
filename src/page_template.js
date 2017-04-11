/**
 * 页面级模版生成配置表
 */
var $Data = {
    // vue
    'vue': {
        files: [
            {
                path:'/template/vue/template.vue',
                name:'[name].vue'
            }
        ]
    },
    // 微信小程序
    'wxml': {
        files:[
            {
                path:'/template/weixin/mic_template.js',
                name:'[name].js'
            },
            {
                path:'/template/weixin/mic_template.wxml',
                name:'[name].wxml'
            },
            {
                path:'/template/weixin/mic_template.wxss',
                name:'[name].wxss'
            }
        ]
    }
};
module.exports = $Data;
// export default $Data;