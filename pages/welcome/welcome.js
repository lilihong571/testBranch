var arrExtra = [];
var initData = "don't remove this text!";

Page({
  data:{
    text:initData,
    i:0
  },
  add:function(){
    arrExtra.push("other line!");
    this.setData({
      text:initData + "\n" + arrExtra.join("\n") 
    });
  },
  remove:function(){
    arrExtra.pop();
    this.setData({
      text:initData + "\n" + arrExtra.join("\n")
    })
  }


})