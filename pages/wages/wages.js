//工资
//获取应用实例
const app = getApp()
const API = require('../../utils/api');
Page({
    data: {
        startDate: '2018-11-22',
        endDate: '2018-11-22',
    },
    onLoad: function (options) {
        var that = this;
        API.ajax('', function (res) {
            if (app.globalData.employeeId) {
                var _pageList = res.wage.filter(function (item) {
                    return item.employeeId === app.globalData.employeeId
                })
                that.setData({
                    pageList: _pageList 
                })
                console.log(that.data.pageList)
            }
        })
    },
    /**
     * 开始日期
     * @param {*} e 
     */
    startDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value,typeof e.detail.value)
        //2018-09-01 string
        this.setData({
            startDate: e.detail.value
        })
    },
    /**
     * 截止日期
     * @param {*} e 
     */
    endDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            endDate: e.detail.value
        })
    },
    /**
     * 查询
     * @param {*} e 
     */
    search: function (e) {
        var that = this;
        API.ajax('',function(res) {
            
        })
    }
})