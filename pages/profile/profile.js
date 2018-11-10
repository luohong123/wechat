//个人信息
//获取应用实例
const app = getApp()

Page({
    data:{
        avatar:"./images/daikuan.png"
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
    signOut:function(){
        wx.navigateTo({
            url:"../index/index"
        })
    }  
})
