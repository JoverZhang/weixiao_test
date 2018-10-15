//app.js
App({
  onLaunch: function () {
    

    // console.log('onLaunch')
    // wx.getUserInfo({
    //   success: function (res) {
    //    that.setData({
    //        nickName: res.userInfo.nickName,
    //       avatarUrl: res.userInfo.avatarUrl,
    //    })
    //    },
    // })



    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
