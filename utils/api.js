let API_HOST = "http://pcorp.cn";
let DEBUG = true;//切换数据入口
var Mock = require('mock.js')
function ajax(data = '', fn, method = "get", header = {}) {
    if (!DEBUG) {
        wx.request({
            url: config.API_HOST + data,
            method: method ? method : 'get',
            data: {},
            header: header ? header : { "Content-Type": "application/json" },
            success: function (res) {
                fn(res);
            }
        });
    } else {
        // 模拟数据
        var res = Mock.mock({
            'error_code': '',
            'error_msg': '',
            'data|10': [{
                'id|+1': 1,
                'img': "@image('200x100', '#4A7BF7','#fff','pic')",
                'title': '@ctitle(3,8)',
                'city': "@county(true)",
                'stock_num': '@integer(0,100)',//库存数量  
                'marketing_start': '@datetime()',
                'marketing_stop': '@now()',
                'price': '@integer(100,2000)',//现价，单位：分  
                'original_price': '@integer(100,3000)'
            }],
            'user':[
                {id:'01',employeeId:'001',username:'城城',userCode:'chengcheng',password:'123456'},
                {id:'01',employeeId:'201703186366',username:'城城',userCode:'chengcheng',password:'123456'},
                {id:'02',employeeId:'201703186367',username:'小檀',userCode:'xiaotan',password:'123456'},
                {id:'03',employeeId:'201703186368',username:'镜心',userCode:'jingxin',password:'123456'},
            ],
            'wage':[
                {employeeId:'001',departement:'开发实施部',bankcard:'xxxxxxxxxx',date:'201810',payableWage:'40001',payWage:'32001'},
                {employeeId:'001',departement:'开发实施部',bankcard:'xxxxxxxxxx',date:'201811',payableWage:'40002',payWage:'32002'},
                {employeeId:'001',departement:'开发实施部',bankcard:'xxxxxxxxxx',date:'201812',payableWage:'40003',payWage:'32003'},
                {employeeId:'201703186366',departement:'开发实施部',bankcard:'xxxxxxxxxx',date:'201811',payableWage:'40000',payWage:'32000'},
                {employeeId:'201703186367',departement:'开发实施部',bankcard:'xxxxxxxxxx',date:'201811',payableWage:'40000',payWage:'32000'},
                {employeeId:'201703186368',departement:'开发实施部',bankcard:'xxxxxxxxxx',date:'201811',payableWage:'40000',payWage:'32000'},
                {employeeId:'201703186366',departement:'开发实施部',bankcard:'xxxxxxxxxx',date:'201810',payableWage:'100',payWage:'80'}
            ]
        })
        // 输出结果
       // console.log(JSON.stringify(res, null, 2))
        fn(res);
    }
}
module.exports = {
    ajax: ajax
}