// pages/assignments/assignments.js
const { $Message } = require('../../components/iview/dist/base/index');
const { $Toast } = require('../../components/iview/dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSubmit: false,
    warn: "",
    content: "",
  },

  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let { content } = e.detail.value;
    if (!content) {
      this.setData({
        warn: "作业内容不能为空！",
        // isSubmit: true
      })
      // console.log('empty'),
      this.handleError()
      return;
    }
    this.setData({
      isSubmit: true,
      warn: "",
      content: content
    })

    //提示上传成功
    this.handleSuccess()
    setTimeout(() => {
      wx.navigateBack({
        delta: 1
      });
    }, 3000);
    // console.log('one', this.data.isSubmit, 'two', this.data.warn, 'three', this.data.content);
  },

  handleSuccess() {
    $Toast({
      content: '作业发布成功',
      type: 'success',
      selector: '#pop_toast'
    });
  },

  handleError: function () {
    var self = this;
    var warning = self.data.warn;
    // console.log(self.data.warn);
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