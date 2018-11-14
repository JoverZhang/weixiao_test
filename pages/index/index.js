// pages/helloworld.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: app.globalData.username,
    //window
    imageWidth: 0,
    //swiper
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 300,
    swiperCurrent: 2,//home子页号
    //message
    closeMessageComment: '',
    showMessageComment: -1,
    //footer
    // current: 'homepage',
    current: 'mine',
    //首页
    _this: 2,//home导航号
    _plane_miss: 1,
    //我的
    visible: false,
    popNum: 0,
    //index summary
    workSummaryList: app.globalData.workSummaryList.reverse(),
    messageSummaryList: app.globalData.messageSummaryList.reverse(),
    noticeSummaryList: app.globalData.noticeSummaryList.reverse(),

    classItemList: app.globalData.chatClassList,
    //plane
    inPlane: false,
    // planBindTouch: 'plane_miss_begin',
    animationData0: {},
    animationData1: {},
    animationData2: {},
    animationData3: {},
  },

  //home页面切换
  listenSwiper(e) {
    var self = this
    self.setData({
      _this: e.detail.current
    })
  },

  changepages: function (e) {
    this.setData({
      _this: e.target.dataset.num,
      swiperCurrent: e.target.dataset.num
    })
  },

  //message
  openComment(e) {
    var self = this
    var num = e.target.dataset.num
    this.setData({
      showMessageComment: num,
      closeMessageComment: 'closeComment'
    })
    console.log(self.data.showMessageComment)
  },

  closeComment() {
    var self = this
    self.setData({
      showMessageComment: -1,
      closeMessageComment: ''
    })
    console.log(self.data.showMessageComment)
  },

  messageCommentSubmit(e) {
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

  deleteClassItem(num) {
    let self = this

    //后端代码实现 -- 删除 chatClassList
    let id = num
    let classList = self.data.classItemList
    let newClassList = []
    for (let i = 0, len = classList.length; i < len; i++) {
      if (classList[i]['classId'] != id)
        newClassList.push(classList[i])
    }
    //////////////////////////////////

    self.setData({
      classItemList: newClassList
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

  joinClass: function () {
    console.log('joinClass')
  },

  //footer
  handleChange({ detail }) {
    var self = this
    //plane
    if (self.data.inPlane) {
      self.plane()
    }
    //main
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

  //assignments
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

  //Detail
  toWorkDetail(e) {
    wx.navigateTo({
      url: "workDetail?current=" + JSON.stringify(e.target.dataset.num)
    });
  },

  toNoticeDetail(e) {
    wx.navigateTo({
      url: "noticeDetail?current=" + JSON.stringify(e.target.dataset.num)
    });
  },

  toChatList(e) {
    wx.navigateTo({
      url: "../myInfo/chat/chatList?current=" + JSON.stringify(e.target.dataset.num)
    })
  },

  plane(e) {
    var self = this
    if (!self.data.inPlane) {
      self.plane_miss_begin()
      var x = self.data.imageWidth / 750 * 220
      // var y = self.data.imageWidth / 750 * 15
      self.animation0.scale(1.1).rotate(396).step()
      self.animation1.bottom(220 / 1.5 + 'rpx').scale(1).opacity(1).rotate(0).translateX(-x / 1.5).step()
      self.animation2.bottom(220 + 'rpx').scale(1).opacity(1).rotate(0).step()
      self.animation3.bottom(220 / 1.5 + 'rpx').scale(1).opacity(1).rotate(0).translateX(x / 1.5).step()
      self.setData({
        //输出动画
        animationData0: this.animation0.export(),
        animationData1: this.animation1.export(),
        animationData2: this.animation2.export(),
        animationData3: this.animation3.export(),
        inPlane: true
      })
    }
    else {
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

    //获取已加入班级的值
    // var that = this;
    // var id = app.globalData.userId;
    // wx.request({
    //   url: app.globalData.httpsUrl + '/group',
    //   header: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data: { user_id: id, 'type': 'assignments' },
    //   method: 'POST',
    //   success: function (res) {
    //     that.setData({
    //       classItemList: res.data
    //     })
    //   }
    // })
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
    var that = this;
    // 留言板
    wx.request({
      url: that.data.https + '/message/show',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {},
      success: function (res) {
        that.setData({
          messageList: res.data
        })
      }
    })
    //作业
    setTimeout(function () {
      var userId = app.globalData.userId;
      var power = app.globalData.power;
      wx.request({
        url: that.data.https + '/assignment/show',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          user_id: userId,
          power: power
        },
        success: function (res) {
          that.setData({
            assignmentList: res.data
          })
        }
      })
      that.setData({
        username: app.globalData.username
      })
    }, 2500)
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