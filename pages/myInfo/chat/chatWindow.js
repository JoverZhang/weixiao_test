// pages/myInfo/chat/chatWindow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    optionnal: {},
    chatHistory: [{
      'time': '17:00',
      'own': 1,
      'content': '周家长你好：\n你的孩子，思想不太健康，我已经多次向您强调，您看要不办理下退学手续。'
    },{
      'time': '',
      'own': 0,
      'content': '欧阳老师啊，是我孩子做得不好，但孩子毕竟是孩子，还请您多多包涵啊。'
    },{
      'time': '',
      'own': 1,
      'content': '诶。'
    },{
      'time': '17:05',
      'own': 1,
      'content': '但周家长，这实在是太...'
    },{
      'time': '17:08',
      'own': 0,
      'content': '欧阳老师不好意思，我有点事'
    },{
      'time': '',
      'own': 0,
      'content': '那二十万待会就给你打过去'
    },{
      'time': '',
      'own': 1,
      'content': '这样不好吧周家长'
    },{
      'time': '',
      'own': 1,
      'content': '教育学生本就是我们老师的职责'
    },{
      'time': '17:15',
      'own': 1,
      'content': '孩子交给我您就放心吧'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this    
    let optionnal = JSON.parse(options.current)
    self.setData({
      optionnal: optionnal
    })
    // console.log(self.data.optionnal)
    let title = optionnal['parentName'] + '(' + optionnal['className'] + ')'
    wx.setNavigationBarTitle({
      title: title,
    });
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
    let self = this
    self.setData({
      scrollTop: 1000000000,
    })
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