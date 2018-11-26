// pages/myInfo/manageClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appliedList: [{
      'id': 1,
      'groupName': '三年二班',
      'list': [{
        'id': 1,
        'name': '周家长'
      }, {
        'id': 2,
        'name': '欧阳家长'
      }, {
        'id': 3,
        'name': '李家长'
      }]
    },
    {
      'id': 2,
      'groupName': '三年三班',
      'list': []
    }, {
      'id': 3,
      'groupName': '三年四班',
      'list': [{
        'id': 1,
        'name': '司徒家长'
      }, {
        'id': 2,
        'name': '慕容家长'
      }, {
        'id': 3,
        'name': '黄家长'
      }]
    }]
  },

  //同意
  agree(e) {
    let self = this
    let classId = e.target.dataset.class
    let parentId = e.target.dataset.parent
    console.log(classId)
    console.log(parentId)
  },

  //拒绝
  refuse(e) {
    let self = this
    let classId = e.target.dataset.class
    let parentId = e.target.dataset.parent
    console.log(classId)
    console.log(parentId)
  },

  to_createClass() {
    wx.navigateTo({
      url: "../myInfo/createClass"
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