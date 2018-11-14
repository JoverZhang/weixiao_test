// pages/myInfo/chat/chatList.js
var app = getApp()

var cities = [
  { "name": "啊啊啊", "pinyin": "Aaa" },

];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: app.globalData.chatClassList,
    parentList: app.globalData.chatParentList,
    cities: [],
    className: '',
    classId: 0,
  },

  onChange(event) {
    // console.log(event.detail, 'click right menu callback data')
  },

  toChatWindow(event) {
    let self = this
    // console.log('test')
    let className = self.data.className
    let classId = self.data.classId
    let parentList = self.data.parentList
    let parentName = event.target.dataset.name
    let transfer = {
      'className': className,
      'classId': classId,
      'parentName': parentName,
      'parentId': parentList[classId][parentName]
    }
    console.log(transfer)
    wx.navigateTo({
      url: "chatWindow?current=" + JSON.stringify(transfer)
    });
  },

  uniq(array) {
    var temp = []; //一个新的临时数组
    for (var i = 0; i < array.length; i++) {
      if (temp.indexOf(array[i]) == -1) {
        temp.push(array[i]);
      }
    }
    return temp;
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cities = []
    let self = this
    //get classId
    let num = JSON.parse(options.current)
    let classList = self.data.classList
    let title = ''
    for (let i = 0, len = classList.length; i < len; i++)
      if (classList[i]['classId'] == num) {
        title = classList[i]['className']
        break
      }
    let parentPinyin = app.globalData.chatParentPinyin[num]

    for (var key in parentPinyin) {
      cities.push({ 'name': key, 'pinyin': parentPinyin[key] })
    }
    self.setData({
      className: title,
      classId: num
    })
    wx.setNavigationBarTitle({
      title: title
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let self = this
    let storeCity = new Array(26);
    let words = []
    for (let i = 0, len = cities.length; i < len; i++)
      words.push(cities[i]['pinyin'][0])
    words = self.uniq(words)
    words = words.sort()
    // const words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    words.forEach((item, index) => {
      storeCity[index] = {
        key: item,
        list: []
      }
    })
    cities.forEach((item) => {
      let firstName = item.pinyin.substring(0, 1);
      let index = words.indexOf(firstName);
      storeCity[index].list.push({
        name: item.name,
        key: firstName
      });
    })
    this.data.cities = storeCity;
    this.setData({
      cities: this.data.cities
    })
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