// pages/myInfo/myName.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
  },

  formSubmit() {
    wx.navigateBack({
      delta: 1
    });
  },

  formSubmit(e) {
    var that = this;
    //获取修改后的名字
    var name = e.detail.value.name;
    //获取用户id
    var id = app.globalData.userId;
    if (name == that.data._username) {
      // 如果没进行修改,返回上一个页面
      wx.navigateBack({
        delta: 1
      });
    } else {
      // 访问nameChange接口进行修改名字
      wx.request({
        url: app.globalData.httpsUrl + '/namechange',
        method: "POST",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          name: name,
          id: id
        },
        success: function (res) {
          if (res.data != 0) {
            app.globalData.username = res.data
            wx.navigateBack({
              delta: 2
            })
            //返回上一页
            wx.showToast({
              title: '修改成功',
              icon: 'success',
            })//后期变成弹窗提醒
          } else {
            console.log('失败请重试');//后期变成弹窗提醒
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this

    self.setData({
      username: app.globalData.username
    })
    // if (this.data._username == '') {
    //   wx.getUserInfo({
    //     lang: 'zh_CN',
    //     timeout: 10000,
    //     success: (e) => {
    //       var name = e.userInfo.nickName
    //       // console.log(name)
    //       self.setData({
    //         _username: name
    //       })
    //     },
    //     fail: () => { },
    //     complete: () => { }
    //   });
    // }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})