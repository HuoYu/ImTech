//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    motto: 'ImTech--微信小程序版',
    userInfo: {},
    feed:[{
    "article_id": 3,   // 文章或者问题的id
"user_id": 23,   // 作者id 
"user_name": "Rebecca1",  // 作者名称
"avatar_file": "../../images/icon1.jpeg",  // 作者头像图片
"title": "选择 Kindle 而不是纸质书的原因是什么？", // 文章标题
"content": "难道不明白纸...",    // 文章内容（全文）
"category_id":"2",   // topic id
"category_name":"数据挖掘",   // topic名称  
"vote_num": "112",   // 点赞数
"view_num": "112",   // 浏览数
"comment_num": "18",  // 评论数
"time":"2016-09-08 09:09:00",   // 时间
"comments":[{
              "user_id_2":"3",
              "user_name_2":"木林",
              "avatar_file_2":"../../images/icon1.jpeg",
              "content_2":"我们是中国人",
              "vote_num_2": "112",   // 点赞数
              "comment_num_2": "18",  // 评论数
              "time_2":"2016-09-08 09:09:00",   //时间
              "comments_2":[{
                       "user_id_3":"123",
                       "user_name_3":"继瑞",
                       "avatar_file_3":"../../images/icon1.jpeg",
                       "content_3":"不是",
                       "time_3":"2016-09-08 09:09:00"   //时间
                       },{
                         "user_id_3":"124",
                       "user_name_3":"木木",
                       "avatar_file_3":"../../images/icon1.jpeg",
                       "content_3":"真的不是吗？",
                       "time_3":"2016-09-08 09:09:00"
                       }]
             },{
              "user_id_2":"4",
              "user_name_2":"刘木林",
              "avatar_file_2":"../../images/icon1.jpeg",
              "content_2":"我们是中国人",
              "vote_num_2": "112",   // 点赞数
              "comment_num_2": "18",  // 评论数
              "time_2":"2016-09-08 09:09:00",   //时间
              "comments_2":[{
                       "user_id_3":"123",
                       "user_name_3":"继瑞",
                       "avatar_file_3":"../../images/icon1.jpeg",
                       "content_3":"不是",
                       "time_3":"2016-09-08 09:09:00"   //时间
                       },{
                         "user_id_3":"124",
                       "user_name_3":"木木",
                       "avatar_file_3":"../../images/icon1.jpeg",
                       "content_3":"真的不是吗？",
                       "time_3":"2016-09-08 09:09:00"
                       }]
             }]
    }]
  },
  //事件处理函数
  // bindItemTap: function() {
  //   wx.navigateTo({
  //     url: '../answer/answer'
  //   })
  // },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tapName: function(event){
    console.log(event)
  }
})
