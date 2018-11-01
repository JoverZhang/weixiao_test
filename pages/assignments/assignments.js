// pages/assignments/assignments.js
const { $Message } = require('../../components/iview/dist/base/index');
const { $Toast } = require('../../components/iview/dist/base/index');
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //global
    https: app.globalData.https,
    //input
    disableInput: false,
    //drawer
    showRight1: false,
    //uploader
    isSubmit: false,
    warn: "",
    content: "",
    _picture_label_list: [],
    _picture_count: 0,
    _picture_height: 30,
    //choice subject
    subjectList: [{
      id: 1,
      name: '语文',
    }, {
      id: 2,
      name: '数学'
    }, {
      id: 3,
      name: '英语'
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
        warn: "作业内容不能为空！",
      })
      this.handleError()
      return;
    } else {
      var openid = getApp().globalData.openid;
      wx.request({
        url: 'https://www.xs.314reader.cn//workstore',
        method: 'POST',
        data: {
          text: content,
          openid: openid
        },
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          let workinfoId = res.data;
          let image = that.data._picture_label_list;
          let imageLength = that.data._picture_label_list.length
          if (workinfoId != 0 && image['0']) {
            for (let i = 0; i < imageLength; i++) {
              wx.uploadFile({
                url: 'https://www.xs.314reader.cn/upload',
                filePath: image[i],
                name: 'image',
                formData: {
                  workinfo_id: workinfoId
                }
              })
            }
            //提示上传成功
            self.handleSuccess()
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              });
            }, 3000);
          }
        }
      })
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
      content: '作业发布成功',
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

  addpicture() {
    var self = this
    wx.chooseImage({
      count: 9 - self.data._picture_count,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        for (var i = 0; i < tempFilePaths.length; i++) {
          var path = tempFilePaths[i]
          var index = self.data._picture_label_list.length
          var url = '_picture_label_list[' + index + ']'
          var count = self.data._picture_count
          var height = self.data._picture_count == 8 ? 90 : (Math.floor((count + 1) / 3) + 1) * 30
          count++
          self.setData({
            [url]: path,
            _picture_count: count,
            _picture_height: height,
          })
        }

      }
    })
  },

  PreviewImage(e) {
    var self = this
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: self.data._picture_label_list // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.https)
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