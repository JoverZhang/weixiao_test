// pages/myInfo/joinClass.js
const { $Message } = require('../../components/iview/dist/base/index');
const { $Toast } = require('../../components/iview/dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    warn: "班级名称不能为空",
    searched: false,
    searchSuccess: false,
    //搜索信息
    classDetail: {
      'name': '三年级二班',
      'master': '欧阳老师',
      'count': 50,
      'joined': 0,
    },
    //已申请列表
    applied: ['三年一班', '三年三班'],
  },

  join(e){
    let self = this
    self.handleSuccess();
  },

  formSubmit(e) {
    let self = this
    let groupname = e.detail.value.groupname

    if (!groupname) {
      self.handleError()
      return
    }
    //已搜索
    self.setData({ searched: true })
    // console.log(groupname)

    //测试代码 Name为123存在
    if(groupname == 123){
      //存在
      self.setData({ searchSuccess: true })
    }
    else{
      //不存在
      self.setData({searchSuccess: false})
    }
  },
  
  // 提示成功
  handleSuccess() {
    $Toast({
      content: '申请成功',
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