//discovery.js
var util = require('../../utils/util.js')
var lowerNum=1
Page({
  data: {
    navTab: ["全部", "活动", "数据挖掘", "求职经验","产品经理", "校招内推"],
    currentNavtab: "0",
    imgUrls: [
      '../../images/1444983318907-_DSC1826.jpg',
      '../../images/222112.jpg',
      '../../images/222113.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0
  },
  imageLoadError:function(e){
    console.log(e.detail);
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  bindItemTap: function(e) {
    let param = e.currentTarget.dataset, id = param.id
    wx.navigateTo({
      url: '../article/article?id='+id
    })
  },
  bindQueTap: function(e) {
    let param = e.currentTarget.dataset, id = param.id
    wx.navigateTo({
      url: '../article/article?id='+id
    })
  },
  upper: function () {
    lowerNum=1
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
  },
  lower: function (e) {
    lowerNum=lowerNum+1;
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //实现刷新效果
  refresh: function(){
    console.log("onLoad")
    var that=this
    wx.request({
      url: "https://www.imtechcenter.com/json_api/get_article_list.php?limit=15&page=1",
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        console.log(res.data)
        that.setData({
          feed:res.data,
          feed_length: res.data.length
        })
      },
      fail: function (res) {
        console.log("failed")
      }
    })
},

  //实现继续加载效果
  nextLoad: function(){
    console.log("NextonLoad")
    var that=this
    wx.request({
      url: "https://www.imtechcenter.com/json_api/get_article_list.php?limit=15&page="+lowerNum,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        console.log(res.data)
        if(res.data){
            that.setData({
            feed: that.data.feed.concat(res.data),
            feed_length: that.data.feed_length + res.data.length
            })
        }
        //如果返回的为空，则不set
      },
      fail: function (res) {
        console.log("failed")
      }
    })
  }



});
