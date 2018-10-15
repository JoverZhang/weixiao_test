// pages/helloworld.js




Page({

  /**
   * 页面的初始数据
   */
  data: {
    _this: 3,
    _wthis: 1,
    _mthis: 1,
    _nthis: 1,
    current: 'homepage',
    _plane_miss: 1,
  },

/**
 * 自定义BEGIN
 */
  //主页面切换
  changepages: function(e){
    this.setData({
      _this: e.target.dataset.num
    })
  },
  //子页面切换
  changewms: function(e){
    if(this.data._this == 1){
      this.setData({
        _wthis: e.target.dataset.num
      });
    }else if (this.data._this == 2) {
      this.setData({
        _mthis: e.target.dataset.num
      });
    }else {
      this.setData({
        _nthis: e.target.dataset.num
      });
    }
  },
  //footer
  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
  },

  plane_miss_begin: function(e){
    this.setData({
      _plane_miss: 2
    });
  },
  plane_miss_end: function(e){
    this.setData({
      _plane_miss: 1
    });
  },

  to_assignments: function(e){
    wx.navigateTo({
      url: "../assignments/assignments"
    });
  },


/**
 * 自定义END
 */ 


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

  },




})

