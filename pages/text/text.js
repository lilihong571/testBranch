var initData = "This is first line";
var extraArr = [];
Page({
  
  data:{
      text:initData,
  },
  add:function(){
      extraArr.push("other line");
      this.setData({
        text:initData + '\n' + extraArr.join("\n")
      })
  },
  remove:function(){
    if(extraArr.length > 0){
      extraArr.pop();
    }
    this.setData({
      text:initData + "\n" + extraArr.join("\n")
    })
  }
})