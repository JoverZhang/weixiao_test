// pages/index/noticeDetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    noticeSummaryList: app.globalData.noticeSummaryList,
    noticeSummary: {},
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    //get noticeId
    let num = JSON.parse(options.current)
    //get noticeSummaryList[noticeId]
    var noticeSummaryList = this.data.noticeSummaryList
    let i = 0
    for (; i < noticeSummaryList.length; i++)
      if (noticeSummaryList[i].noticeId == num)
        break;
    //set title
    self.setData({
      noticeSummary: noticeSummaryList[i],
      scrollTop: 1000000000,
    })
    wx.setNavigationBarTitle({
      title: self.data.noticeSummary.noticeClass
    })
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