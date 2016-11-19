
【伙玉】
https://www.imtechcenter.com/json_api/get_article_list.php?limit=15
https://www.imtechcenter.com/json_api/get_article_by_id.php?id=1

1、discovery ：（只放发布的文章或者问题，不展示评论）  
接口名：getDiscoveryData
"article_id": 3,   # 文章或者问题的id
"user_id": 23,   #作者id 
"user_name": "Rebecca1",  #作者名称
"avatar_file": "../../images/icon1.jpeg",  #作者头像图片
"title": "选择 Kindle 而不是纸质书的原因是什么？", #文章标题
"content": "难道不明白纸...",    #文章内容（取固定长度的就ok）
"category_id":"2"   #topic id
"category_name":"数据挖掘"   #topic名称  
"vote_num": "112",   #点赞数
"view_num": "112",   #浏览数
"comment_num": "18"  #评论数
"time":""   #时间

来源表：aws_article 文章表、aws_question 问题表（主要的两张表）

2、文章详情页
"article_id": 3,   # 文章或者问题的id
"user_id": 23,   #作者id 
"user_name": "Rebecca1",  #作者名称
"avatar_file": "../../images/icon1.jpeg",  #作者头像图片
"title": "选择 Kindle 而不是纸质书的原因是什么？", #文章标题
"content": "难道不明白纸...",    #文章内容（全文）
"category_id":"2"   #topic id
"category_name":"数据挖掘"   #topic名称  
"vote_num": "112",   #点赞数
"view_num": "112",   #浏览数
"comment_num": "18"  #评论数
"time":""   #时间
"comments":[
              "user_id_2":,
              "user_name_2":,
              "avatar_file_2":,
              "content_2":,
              "vote_num_2": "112",   #点赞数
              "comment_num_2": "18"  #评论数
              "time_2":""   #时间
              "comments_2":[
                       "user_id_3":,
                       "user_name_3":,
                       "avatar_file_3":,
                       "content_3":,
                       "time_3":""   #时间
              ]
            ]
说明：一个文章会有多个评论，每个评论下可能会有多条回复。

2、index 页面 ：（即网站上的动态页面，包括展示用户的发表、点赞、评论行为）  
注意：此处的作者指的是做出某种行为的行为者，不是指这篇文章的作者。
接口名：getIndexData
"article_id": 3,   # 文章或者问题的id
"feed_source_id": 23,   #作者id 
"feed_source_name": "Rebecca1",  #作者名称
"feed_source_img": "../../images/icon1.jpeg",  #作者头像图片
"feed_source_txt": "赞",  #行为类型（赞、发表、评论。赞/评论了该文章；发表了文章）
"article_title": "选择 Kindle 而不是纸质书的原因是什么？", #文章标题
"article_content": "难道不明白纸...",    #文章内容（取固定长度的就ok）
"topic_id":"2"   #topic id
"topic_name":"数据挖掘"   #topic名称  
"good_num": "112",   #点赞数
"view_num": "112",   #浏览数
"comment_num": "18"  #评论数
"time":""   #时间

来源表：看看原来网站的逻辑。


3、app.json 中删除的代码：
, {
      "pagePath": "pages/chat/chat",
      "text": "",
      "iconPath": "images/chat.png",
      "selectedIconPath": "images/chat_focus.png"
    }



url:app.globalData.api.listBaseUrl+type,


gotoTypeEdit:function(e){
    //页面跳转
    wx.navigateTo({
      url: '../types/types',
    })
  },
  gotoAlbum:function(e){
    let param = e.currentTarget.dataset, title = param.title, id=param.id
    wx.navigateTo({url:"../album/album?title="+title+"&id="+id})
  }


  app.js 中的代码：
  globalData:{
    api:{
      listBaseUrl:"https://route.showapi.com/959-1?showapi_appid=25744&showapi_sign=f3807528bd5d4a4ea6b2027e8286e0dc&type=",
      albumBaseurl:"https://route.showapi.com/959-2?id=%id%&showapi_appid=25744&showapi_sign=f3807528bd5d4a4ea6b2027e8286e0dc",
    },
    currentType:'',
    types:[
      {
        title:"比基尼",
        value:"bijini",
        is_show:true
      },





      