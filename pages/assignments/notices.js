// pages/assignments/notices.js
const { $Message } = require('../../components/iview/dist/base/index');
const { $Toast } = require('../../components/iview/dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //input
    disableInput: false,
    //drawer
    showRight1: false,
    //uploader
    isSubmit: false,
    warn: "",
    content: "",
    //choice subject
    subjectList: [{
      id: 1,
      name: '通知',
    }, {
      id: 2,
      name: '任务'
    }, {
      id: 3,
      name: '调查'
    }],
    subjectCurrent: '',
    //choice class
    classList: [{
      id: 1,
      name: '三年级二班',
    }, {
      id: 2,
      name: '三年级三班'
    }, {
      id: 3,
      name: '三年级四班'
    }, {
      id: 4,
      name: '三年级五班',
    }],
    classCurrent: [],
    //
  },

  //选项
  handleSubjectChange({ detail = {} }) {
    this.setData({
      subjectCurrent: detail.value
    });
    this.toggleRight1()
  },
  handleClassChange({ detail = {} }) {
    const index = this.data.classCurrent.indexOf(detail.value);
    index === -1 ? this.data.classCurrent.push(detail.value) : this.data.classCurrent.splice(index, 1);
    this.setData({
      classCurrent: this.data.classCurrent
    });
  },
  toggleRight1() {
    this.setData({
      disableInput: !this.data.disableInput,
      showRight1: !this.data.showRight1
    });
  },

  //上传
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var self = this
    let { content } = e.detail.value;
    var that = this;
    if (!content) {
      this.setData({
        warn: "通知内容不能为空！",
      })
      this.handleError()
      return;
    } else {
      //提示上传成功
      self.handleSuccess()
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        });
      }, 3000);
    }
    this.setData({
      isSubmit: true,
      warn: "",
      content: content
    })
  },

  // 提示成功
  handleSuccess() {
    $Toast({
      content: '通知发布成功',
      type: 'success',
      selector: '#pop_toast'
    });
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