// pages/myInfo/createClass.js
const { $Message } = require('../../components/iview/dist/base/index');
const { $Toast } = require('../../components/iview/dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    warn: "班级名称不能为空",
    content: "",
  },

  formSubmit(e) {
    let self = this
    let groupname = e.detail.value.groupname

    if (!e.detail.value.groupname) {
      self.handleError()
      return
    }

    console.log(groupname)
    console.log(self.createTimeStamp())

    // 提示成功
    self.handleSuccess()
  },

  createTimeStamp: function () {
    return parseInt(new Date().getTime() / 1000) + ''
  },

  // 提示成功
  handleSuccess() {
    $Toast({
      content: '班级创建成功',
      type: 'success',
      selector: '#pop_toast'
    });
    setTimeout(() => {
      wx.navigateBack({
        delta: 1
      });
    }, 3000);
  },

  handleError: function () {
    var self = this;
    var warning = self.data.warn;
    $Message({
      content: warning,
      type: 'error',
      selector: '#pop_message',
      duration: 3
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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