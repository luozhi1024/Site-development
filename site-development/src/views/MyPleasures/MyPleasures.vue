<template>
  <div content="bg">
    <img class="img-bg" src="../../assets/img/security-bg.jpg">
    <div class="text" >
      <img style="width: 30%;float: right" src="../../assets/img/laugh.jpg">
      <p style="width: 30%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我觉得吧，
        当然只是我觉得，
        每个人都是独立的个体吧，
        就是说每个人的生活总是会有不一样，
        我希望能分享你的乐趣，
        也希望我的乐趣呢，
        会带给你不一样的惊喜。</p>

    </div>
    <div class="text-1" align="center">
      <p>无忧无虑是三年<br>
        懵懵懂懂又三年<br>
        胡思乱想仍三年<br>
        命里无时终三年</p>
    </div>
    <div class="text-2" align="center">
      <p>我呢<br>
        做不到一蓑烟雨任平生<br>
        心中又羡慕的紧<br>
        所以啊<br>
        人生如逆旅 我亦是行客<br></p>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .bg{
    background-color: #0086b3;
    height: 840px;

  }

  .img-bg{
    background-image:url(../../assets/img/security-bg.jpg);
    background-size: 100% auto;
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;

  }
  .text{
    background-color:rgba(128,128,128,0.7);;
    color: #87CEFA;
    width: 60%;
    height: 40%;
    padding: 50px 40px 50px 40px;
    border-radius:40px;
    font-size: 30px;
    font-weight:400;
    margin-left: 10%;
  }
  .text-1{
    background-color:rgba(128,128,128,0.7);;
    color: #87CEFA;
    width: 15%;
    padding: 50px 40px 50px 40px;
    border-radius:40px;
    font-size: 30px;
    font-weight:400;
    margin-top: 5%;
    margin-left: 75%;
  }
  .text-2{
    background-color:rgba(128,128,128 ,0.7);
    color: #87CEFA;
    bottom: 0;
    padding: 50px 40px 50px 40px;
    width: 25%;
    border-radius:40px;
    font-size: 30px;
    font-weight:400;
    margin: 5% auto;
  }


</style>
