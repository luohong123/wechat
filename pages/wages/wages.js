//工资
//获取应用实例
const app = getApp()

Page({
    data: {
        startDate: '2016-09-01',
        endDate: '2018-11-20'
    },
    startDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            startDate: e.detail.value
        })
    },
    endDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            endDate: e.detail.value
        })
    },
})