// pages/helloworld.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //window
    imageWidth: 0,
    //swiper
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 300,
    swiperCurrent: 0,
    //message
    closeMessageComment: '',
    showMessageComment: -1,
    //footer
    current: 'homepage',
    hideHome: '',
    hideMyInfo: '',
    //首页
    _this: 2,
    _plane_miss: 1,
    //我的
    visible: false,
    popNum: 0,
    classItemList: [
      {
        classItemName: '三年级二班',
      },
      {
        classItemName: '三年级三班',
      },
    ],
    //plane
    inPlane: false,
    // planBindTouch: 'plane_miss_begin',
    animationData0: {},
    animationData1: {},
    animationData2: {},
    animationData3: {},
  },



  //主页面切换
  listenSwiper(e) {
    var self = this
    if (e.detail.current == 0)
      self.setData({
        current: 'homepage',
      })
    else if (e.detail.current == 1)
      self.setData({
        current: 'mine',
      })
  },

  toHome() {
    this.setData({
      swiperCurrent: 0
    })
  },

  toMyInfo() {
    this.setData({
      swiperCurrent: 1
    })
  },


  //首页主页面切换
  changepages: function (e) {
    this.setData({
      _this: e.target.dataset.num
    })
  },

  //message
  openComment(e){
    var self = this
    var num = e.target.dataset.num
    this.setData({
      showMessageComment: num,
      closeMessageComment: 'closeComment'
    })
    console.log(self.data.showMessageComment)
  },

  closeComment(){
    var self = this
    self.setData({
      showMessageComment: -1,
      closeMessageComment: ''
    })
    console.log(self.data.showMessageComment)
  },

  messageCommentSubmit(e){
    var self = this

    //结束
    self.closeComment()
  },

  //myInfo
  toModifyMyInfo() {
    wx.navigateTo({
      url: "../myInfo/myInfo"
    });
  },

  deleteClassItem(e) {
    var self = this
    var num = e
    var oldClassItemList = self.data.classItemList
    var newClassItemList = []
    // console.log(num)
    for (var i = 0; i < oldClassItemList.length; i++) {
      if (num == i) continue;
      newClassItemList[newClassItemList.length] = oldClassItemList[i]
    }
    self.setData({
      classItemList: newClassItemList
    })
    self.handleClose()
  },

  handleOpen(e) {
    var self = this
    this.setData({
      popNum: e.target.dataset.num,
      visible: true
    });
    // console.log(self.data.popNum)
  },

  handleOk() {
    this.deleteClassItem(this.data.popNum)
  },

  handleClose() {
    this.setData({
      visible: false
    });
  },

  //footer
  handleChange({ detail }) {
    var self = this
    if (self.data.inPlane){
      self.plane()
    }
    if (detail.key == 'homepage')
      self.toHome()
    else
      self.toMyInfo()
    self.setData({
      current: detail.key
    })
  },

  plane_miss_begin: function (e) {
    this.setData({
      _plane_miss: 2
    });
  },
  plane_miss_end: function (e) {
    this.setData({
      _plane_miss: 1
    });
  },

  to_assignments: function (e) {
    var self = this
    self.plane()
    wx.navigateTo({
      url: "../assignments/assignments"
    });
  },

  to_messages: function (e) {
    var self = this
    self.plane()
    wx.navigateTo({
      url: "../assignments/messages"
    });
  },

  to_notices: function (e) {
    var self = this
    self.plane()
    wx.navigateTo({
      url: "../assignments/notices"
    });
  },

  toWorkDetail() {
    wx.navigateTo({
      url: "workDetail"
    });
  },

  toNoticeDetail() {
    var self = this
    var app = getApp()
    // console.log(app)
    app.getDataClassItemList(self.data.classItemList[0].classItemName)
    wx.navigateTo({
      url: "noticeDetail"
    });
    // console.log(app.globalData.classItemList)
  },

  plane(e) {
    var self = this
    if(!self.data.inPlane){
      self.plane_miss_begin()
      var x = self.data.imageWidth / 750 * 220
      // var y = self.data.imageWidth / 750 * 15
      self.animation0.scale(1.1).rotate(396).step()
      self.animation1.bottom(220/1.5 + 'rpx').scale(1).opacity(1).rotate(0).translateX(-x/1.5).step()
      self.animation2.bottom(220 + 'rpx').scale(1).opacity(1).rotate(0).step()
      self.animation3.bottom(220/1.5 + 'rpx').scale(1).opacity(1).rotate(0).translateX(x/1.5).step()
      self.setData({
        //输出动画
        animationData0: this.animation0.export(),
        animationData1: this.animation1.export(),
        animationData2: this.animation2.export(),
        animationData3: this.animation3.export(),
        inPlane: true
      })
    }
    else{
      self.initAnimation()
      self.setData({
        inPlane: false
      })
      self.plane_miss_end()
    }
    // console.log(self.data._plane_miss)
  },

  initAnimation() {
    //0
    var animation0 = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0,
    });
    this.animation0 = animation0
    animation0.scale(1).rotate(0).step()
    this.setData({
      animationData0: animation0.export()
    })
    //1
    var animation1 = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0,
    });
    this.animation1 = animation1
    animation1.bottom(30 + 'rpx').scale(0.1).opacity(0).rotate(180).step()
    this.setData({
      animationData1: animation1.export()
    })
    //2
    var animation2 = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0,
    });
    this.animation2 = animation2
    animation2.bottom(30 + 'rpx').scale(0.1).opacity(0).rotate(-270).step()
    this.setData({
      animationData2: animation2.export()
    })
    //3
    var animation3 = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0,
    });
    this.animation3 = animation3
    animation3.bottom(30 + 'rpx').scale(0.1).opacity(0).rotate(-180).step()
    this.setData({
      animationData3: animation3.export()
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    })
    self.initAnimation()
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

  },





})