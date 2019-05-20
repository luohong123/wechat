//个人信息
//获取应用实例
const app = getApp()

Page({
    data: {
        avatar: "./images/daikuan.png"
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
        console.log(e.detail.userInfo)
    },
    signOut: function () {
        wx.navigateTo({
            url: "../index/index"
        })
    },
    onLoad: function () {
        var that = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        }
        if (app.globalData.employeeObj) {
            this.setData({
                userName: app.globalData.employeeObj.username,
                desc: app.globalData.employeeObj.employeeId
            })  
        }
    }

})