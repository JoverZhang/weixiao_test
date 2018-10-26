//app.js
App({
  globalData: {
    classItemList:[]
  },

  getDataClassItemList(e){
    this.globalData.classItemList = e
    // console.log(this.globalData.classItemList)
  },
  
  
  onLaunch: function () {
    var that=this
  wx.login({
    // 获取用户的openid
    success:function(res){
      wx.request({
        url: 'https://www.xs.314reader.cn/openid',
        method:'GET',
        data:{code:res.code},
        header:{
          'content-type':'application/json'
        },
        success:function(data){
          that.globalData.openid = data.data.openid;
          var openid = that.globalData.openid;
          if(data){
            wx.request({
              url: 'https://www.xs.314reader.cn/register',
              method: 'POST',
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              data: {
                openid: openid
              },
            })
          }
        }
      })
    }
  })
  


    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
