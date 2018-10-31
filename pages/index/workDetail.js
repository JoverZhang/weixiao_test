// pages/index/workDetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workSummaryList: app.globalData.workSummaryList,
    workSummary: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    //get workId
    let num = JSON.parse(options.current)
    //get workSummaryList[workId]
    var workSummaryList = this.data.workSummaryList
    let i = 0
    for (; i < workSummaryList.length; i++)
      if (workSummaryList[i].workId == num)
        break;
    //set title
    self.setData({
      workSummary: workSummaryList[i]
    })
    let teacherName = self.data.workSummary.teacherName + '老师'
    wx.setNavigationBarTitle({
      title: teacherName
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