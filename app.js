//app.js
App({
  globalData: {
    //global
    httpsUrl: 'http://www.teacher.com',
    username: 'null',
    // isTeacher: true,
    isTeacher: true,
    https: 'www.baidu.com',
    //index
    workSummaryList: [{
      'workId': 1,
      'teacherName': '欧阳',
      'ClassName': '语文',
      'content': '三年级二班语文作业:\n就测试随便发发，其实也没什么特别重要的东西西西西。',
      'time': '00:00',
      'submited': true
    }, {
      'workId': 2,
      'teacherName': '陈',
      'ClassName': '数学',
      'content': '三年级三班数学作业:\n就测试随便发发，依然还是没什么特别重要的东西西西西。',
      'time': '00:01',
      'submited': false
    }, {
      'workId': 3,
      'teacherName': '秦',
      'ClassName': '英语',
      'content': '三年级四班英语作业:\n就测试随便发发，依然还是没什么特别重要的东西西西西。',
      'time': '00:02',
      'submited': true
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
    //Chat
    chatClassList: [{
      'className': '三年级二班',
      //指向 chatParentList key
      'classId': 1,
    }, {
      'className': '三年级三班',
      'classId': 2,
    }, {
      'className': '三年级四班',
      'classId': 3,
    }],

    chatParentList: {
      1: {
        // parentId : 'parentName'
        '黄一峰家长': 1,
        '欧阳强哥家长': 2,
        '家长3': 3,
        '家长4': 4,
        '家长5': 5,
        '家长6': 6,
        '家长7': 7,
        '家长8': 8,
        '家长9': 9,
        '家长10': 10,
        '家长11': 11,
      },
      2: {
        '何家长': 1,
        '周家长': 2,
      },
      3: {
        '文家长': 1,
      }
    },

    chatParentPinyin: {
      1: {
        // 'parentName' : 'parentNamePinyin'
        '黄一峰家长': 'Huangyifengjiazhang',
        '欧阳强哥家长': 'Ouyangqianggejiazhang',
        '家长3': 'Jiazhang3',
        '家长4': 'Jiazhang4',
        '家长5': 'Jiazhang5',
        '家长6': 'Jiazhang6',
        '家长7': 'Jiazhang7',
        '家长8': 'Jiazhang8',
        '家长9': 'Jiazhang9',
        '家长10': 'Jiazhang10',
        '家长11': 'Jiazhang11'
      },
      2: {
        '何家长': 'Hejiazhang',
        '周家长': 'Zhoujiazhang'
      },
      3: {
        '文家长': 'Wenjiazhang'
      }
    }
  },


  onLaunch: function () {
    var that = this;
    var https = that.globalData.httpsUrl;
    
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已获取授权，可以直接调用getUserInfo
          wx.getUserInfo({
            success(e) {
              // 获取用户微信姓名
              lang: 'zh_CN',
              that.globalData.name = e.userInfo.nickname;
              var name = that.globalData.name;
              wx.login({
                // 获取用户的code发送给后台
                success: function (res) {
                  // 访问openid接口
                  wx.request({
                    url: https + '/openid',
                    method: 'GET',
                    data: { code: res.code },
                    header: {
                      'content-type': 'application/json'
                    },
                    success: function (data) {
                      // 接受返回来的openid
                      that.globalData.openid = data.data.openid;
                      var openid = that.globalData.openid;
                      if (data) {
                        // 获得openid访问register接口进行用户注册
                        wx.request({
                          url: https + '/register',
                          method: 'POST',
                          header: { 'content-type': 'application/x-www-form-urlencoded' },
                          data: {
                            name: name,
                            openid: openid
                          },
                          success: function (res) {
                            // 把添加成功后的userId加入全局变量
                            that.globalData.userId = res.data.user_id;
                            // 把添加成功后的用户权限加入全局变量
                            that.globalData.power = res.data.power;
                            // 把添加成功后的用户名称加入全局变量
                            that.globalData.username = res.data.name;
                          }
                        })
                      }
                    }
                  })
                }
              })
            }
          })
        }
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
