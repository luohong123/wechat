//首页
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
          '/images/swiper1.jpg',
          '/images/swiper2.png',
          '/images/swiper3.jpg'
        ],
        indicatorDots: true,
        autoplay: false,
        interval: 3000,
        duration: 1000
      },
})
