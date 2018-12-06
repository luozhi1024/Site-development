<template>
  <div content="bg">
    <img class="img-bg" src="../../assets/img/FlimMusic-bg.jpg">
    <div class="text" align="center">
      <p>
        电影呢
        可以说是非常喜欢了
        喜欢到什么程度呢
        近两年评分比较高的电影都看过了
        要说最喜欢哪部吧
        我最爱的电影还蛮多的诶</p>
    </div>
      <img style="width: 30%;float: left;transform: rotate(33deg)" src="../../assets/img/fm-1.jpg">
      <img style="width: 30%;float: left;transform: rotate(-20deg)" src="../../assets/img/fm-2.jpg">
      <img style="width: 25%;float: left;transform: rotate(-20deg)" src="../../assets/img/fm-3.jpg">
      <img style="width: 35%;float: left;transform: rotate(25deg)" src="../../assets/img/fm-4.jpg">
      <img style="width: 25%;float: left;transform: rotate(-10deg)" src="../../assets/img/fm-5.jpg">
      <img style="width: 30%;float: left;transform: rotate(30deg)" src="../../assets/img/fm-6.jpg">
      <img style="width: 35%;float: left;transform: rotate(-20deg)" src="../../assets/img/fm-7.jpg">
      <img style="width: 30%;float: left;transform: rotate(26deg)" src="../../assets/img/fm-8.jpg">
      <img style="width: 25%;float: left;transform: rotate(15deg)" src="../../assets/img/fm-9.jpg">
      <img style="width: 25%;float: left;transform: rotate(-30deg)" src="../../assets/img/fm-10.jpg">
      <div class="text-1">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;音乐呢
          对我口味的我都很ok
          所以啊我听歌很杂
          要说推荐啊什么的我是没办法啊
          但是分享一下我的私人小收藏还是可以的
            全都给你<br>
          既然都到这里了
          我的故事 是这首歌吧</p>


    </div>
    <audio autoplay="autoplay" loop="loop" preload="auto"
           src="http://other.web.rc01.sycdn.kuwo.cn/resource/n2/25/41/356414210.mp3">
      你的浏览器版本太低，不支持audio标签
    </audio>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .bg{
    background-color: #0086b3;
    height: 840px;

  }

  .img-bg{
    background-size: 100% auto;
    position: fixed;
    z-index: -1;
    width: 100%;

  }
  .text{
    background-color:rgba(128,128,128,0.7);;
    color: #87CEFA;
    width: 50%;
    height: 40%;
    padding: 50px 40px 50px 40px;
    border-radius:40px;
    font-size: 30px;
    font-weight:400;
    margin-left: 10%;
  }
  .text-1{
    background-color:rgba(128,128,128 ,0.7);
    color: #87CEFA;
    bottom: 0;
    padding: 50px 40px 50px 40px;
    width: 40%;
    border-radius:40px;
    font-size: 30px;
    font-weight:400;
    margin: 75% auto;
    margin-bottom: 0%;
  }

</style>
