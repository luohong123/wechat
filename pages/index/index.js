//index.js
//获取应用实例
const app = getApp()
const API = require('../../utils/api');
Page({
  data: {
    motto: '我爱查工资条',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    login: '/images/login.jpg',
    disabled: true,
    siginError: 'N'
  },

  onLoad: function () {
    var that = this;
    // 使用 Mock
    API.ajax('', function (res) {
      //这里既可以获取模拟的res
      console.log(res)
      that.setData({
        list: res.data
      })
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /**
   * 用户名 键盘输入时触发
   * @param {*} e 
   */
  bindKeyEmployeeId: function (e) {
    this.setData({
      employeeId: e.detail.value
    })
    if (this.data.employeeId !== undefined && this.data.employeeId !== null && this.data !== '' &&
      this.data.password !== undefined && this.data.password !== null && this.password !== '') {
      this.setData({
        disabled: true,
        siginError: 'N'
      });
    }
  },
  /**
   * 密码 键盘输入时触发
   * @param {*} e 
   */
  bindKeyPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
    if (this.data.employeeId !== undefined && this.data.employeeId !== null && this.data !== '' &&
      this.data.password !== undefined && this.data.password !== null && this.password !== '') {
      this.setData({
        disabled: false,
        siginError: 'N'
      })
    }
  },
  /**
   * 获取用户信息
   * @param {*} e 
   */
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 员工号和密码验证通过跳转到首页
   * @param {*} e 
   */
  goLoginPageHome: function (e) {
    var that = this;
    API.ajax('', function (res) {
      var userInfoArr = res.user;
      userInfoArr.forEach(function (item) {
        if (item.employeeId === that.data.employeeId && item.password === that.data.password) {
          that.setData({
            siginError: 'N'
          });
          app.globalData.employeeObj = item;
          app.globalData.employeeId = that.data.employeeId;
          wx.switchTab({
            url: "../home/home"
          })
        } else {
          that.setData({
            siginError: 'Y'
          });
        }
      })
    })
  },
  formReset: function () {

  },


})