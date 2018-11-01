//app.js
App({
  globalData: {
    //global
    https: 'www.baidu.com',
    //index
    workSummaryList: [{
      'workId': 1,
      'teacherName': '欧阳',
      'ClassName': '语文',
      'content': '三年级二班语文作业:\n就测试随便发发，其实也没什么特别重要的东西西西西。',
      'time': '00:00'
    }, {
      'workId': 2,
      'teacherName': '陈',
      'ClassName': '数学',
      'content': '三年级三班数学作业:\n就测试随便发发，依然还是没什么特别重要的东西西西西。',
      'time': '00:01'
    }, {
      'workId': 3,
      'teacherName': '秦',
      'ClassName': '英语',
      'content': '三年级四班英语作业:\n就测试随便发发，依然还是没什么特别重要的东西西西西。',
      'time': '00:02'
    }],
    messageSummaryList: [{
      'messageId': 1,
      'teacherName': '欧阳',
      'content': '就测试留言随便发发，其实也没什么特别重要的东西西西西。',
      'time': '00:00'
    }, {
      'messageId': 2,
      'teacherName': '陈',
      'content': '就测试留言随便发发，依然还是没什么特别重要的东西西西西。',
      'time': '00:01'
    }],
    noticeSummaryList: [{
      'noticeId': 1,
      'noticeClass': '三年级二班',
      'noticeType': '任务',
      'noticeContents': [{
        'noticeContent': '三年级二班发布新作业',
        'time': '09-01 00:00'
      }, {
        'noticeContent': '三年级二班发布新作业',
        'time': '09-02 00:00'
      }, {
        'noticeContent': '三年级二班发布新作业',
        'time': '09-03 00:00'
      }, {
        'noticeContent': '三年级二班发布新作业',
        'time': '09-04 00:00'
      }, {
        'noticeContent': '三年级二班发布新作业',
        'time': '09-05 00:00'
      }, {
        'noticeContent': '三年级二班发布新作业',
        'time': '00:00S'
      }]
    }, {
      'noticeId': 2,
      'noticeClass': '三年级三班',
      'noticeType': '任务',
      'noticeContents': [{
        'noticeContent': '三年级三班发布新作业',
        'time': '00:01'
      }]
    }, {
      'noticeId': 3,
      'noticeClass': '三年级四班',
      'noticeType': '任务',
      'noticeContents': [{
        'noticeContent': '三年级四班发布新作业',
        'time': '00:01'
      }]
    }, {
      'noticeId': 4,
      'noticeClass': '三年级二班',
      'noticeType': '通知',
      'noticeContents': [{
        'noticeContent': '放假通知,十月份国庆放假7天，10月1日到10月7日，10月8日8点准时回校报到。',
        'time': '00:05'
      }]
    }, {
      'noticeId': 5,
      'noticeClass': '三年级三班',
      'noticeType': '通知',
      'noticeContents': [{
        'noticeContent': '放假通知',
        'time': '00:05'
      }]
    }],
    // //assignments
    // classItemList: [],
  },


  // getDataClassItemList(e) {
  //   this.globalData.classItemList = e
  //   // console.log(this.globalData.classItemList)
  // },


  onLaunch: function () {
    var that = this
    wx.login({
      // 获取用户的openid
      success: function (res) {
        wx.request({
          url: 'https://www.xs.314reader.cn/openid',
          method: 'GET',
          data: { code: res.code },
          header: {
            'content-type': 'application/json'
          },
          success: function (data) {
            that.globalData.openid = data.data.openid;
            var openid = that.globalData.openid;
            if (data) {
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


  }
})
