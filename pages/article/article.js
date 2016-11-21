//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    motto: 'ImTech--微信小程序版',
    userInfo: {},
//     feed:[{
//     "article_id": 3,   // 文章或者问题的id
// "user_id": 23,   // 作者id 
// "user_name": "Rebecca1",  // 作者名称
// "avatar_file": "../../images/icon1.jpeg",  // 作者头像图片
// "title": "选择 Kindle 而不是纸质书的原因是什么？", // 文章标题
// "content": "难道不明白纸...",    // 文章内容（全文）
// "category_id":"2",   // topic id
// "category_name":"数据挖掘",   // topic名称  
// "vote_num": "112",   // 点赞数
// "view_num": "112",   // 浏览数
// "comment_num": "18",  // 评论数
// "time":"2016-09-08 09:09:00",   // 时间
// "comments":[{
//               "user_id_2":"3",
//               "user_name_2":"木林",
//               "avatar_file_2":"../../images/icon1.jpeg",
//               "content_2":"我们是中国人",
//               "vote_num_2": "112",   // 点赞数
//               "comment_num_2": "18",  // 评论数
//               "time_2":"2016-09-08 09:09:00",   //时间
//               "comments_2":[{
//                        "user_id_3":"123",
//                        "user_name_3":"继瑞",
//                        "avatar_file_3":"../../images/icon1.jpeg",
//                        "content_3":"不是",
//                        "time_3":"2016-09-08 09:09:00"   //时间
//                        },{
//                          "user_id_3":"124",
//                        "user_name_3":"木木",
//                        "avatar_file_3":"../../images/icon1.jpeg",
//                        "content_3":"真的不是吗？",
//                        "time_3":"2016-09-08 09:09:00"
//                        }]
//              },{
//               "user_id_2":"4",
//               "user_name_2":"刘木林",
//               "avatar_file_2":"../../images/icon1.jpeg",
//               "content_2":"我们是中国人",
//               "vote_num_2": "112",   // 点赞数
//               "comment_num_2": "18",  // 评论数
//               "time_2":"2016-09-08 09:09:00",   //时间
//               "comments_2":[{
//                        "user_id_3":"123",
//                        "user_name_3":"继瑞",
//                        "avatar_file_3":"../../images/icon1.jpeg",
//                        "content_3":"不是",
//                        "time_3":"2016-09-08 09:09:00"   //时间
//                        },{
//                          "user_id_3":"124",
//                        "user_name_3":"木木",
//                        "avatar_file_3":"../../images/icon1.jpeg",
//                        "content_3":"真的不是吗？",
//                        "time_3":"2016-09-08 09:09:00"
//                        }]
//              }]
//     }]
       feed:[{"article_id":"10","user_id":"8","user_name":"王开新","avatar_file":"http:\/\/www.imtechcenter.com\/uploads\/avatar\/000\/00\/00\/08_avatar_min.jpg","title":"终于搭好了博客","content":"这里和csdn博客都不太方便用markdown，于是就自己搭了一个博客，感兴趣的同学也可以自己试试。\n以后的文章会像本文一样直接给一个链接：[url]http:\/\/keson96.github.io\/2016\/04\/17\/2016-04-17-终于搭好了博客\/[\/url]​\n ","category_id":"3","category_name":"编程与开发","vote_num":"0","view_num":"80","comment_num":"3","time":"2016-04-17 17:10:05","comments":[{"user_id":"3","user_name":"刘伙玉","avatar_file":"http:\/\/www.imtechcenter.com\/uploads\/avatar\/000\/00\/00\/03_avatar_min.jpg","content":"不错！大家可以学习一下这种利用github以及开源项目来建立自己的博客的方式！","vote_num":"0","comment_num":1,"time":"2016-04-18 12:55:22","comment_replys":[{"user_id":"3","user_name":"刘伙玉","avatar_file":"http:\/\/www.imtechcenter.com\/uploads\/avatar\/000\/00\/00\/03_avatar_min.jpg","content":"测试！","time":"2016-11-20 21:08:52"}]},{"user_id":"11","user_name":"孟凡赛","avatar_file":"http:\/\/www.imtechcenter.com\/uploads\/avatar\/","content":"666","vote_num":"0","comment_num":0,"time":"2016-04-18 20:16:07","comment_replys":null}]}]
  },
  //事件处理函数
  // bindItemTap: function() {
  //   wx.navigateTo({
  //     url: '../answer/answer'
  //   })
  // },
  onLoad: function (option) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    wx.request({
      url: "https://www.imtechcenter.com/json_api/get_article_by_id.php?id="+option.id,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        console.log(res.data)
        that.setData({
          feed:res.data,
        })
      },
      fail: function (res) {
        console.log("failed")
      }
    })

  },
  
  tapName: function(event){
    console.log(event)
  }
})
