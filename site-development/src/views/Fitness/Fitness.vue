<template>
  <div content="bg">
    <img class="img-bg" src="../../assets/img/Fitness-bg.jpg">
    <div class="text" >
      <img style="width: 30%;float: right;" src="../../assets/img/fi-1.jpg">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说起健身我就有些头疼
        我一直都想，我就这样认为的，我本来就是一个瘦瘦的男生
        不管是小时候的漫画
        还是大了之后的各种番剧
        男生就该是那种
        上了高中，对就是高中，作息紊乱，久坐伏案，一日四食
        我最后还是成为了自带三层游泳圈的胖子啊<br>
        夸张一点就是右边这种
      </p>
    </div>
    <div class="text-1" align="center">
      <p>80kg的我如何变成朋友眼中的60kg呢
        然后呢，你肯定就会想到健身啊</p>
      <p>但是呢，大一的时候也没想到健身，就节食吧。后来发现瘦是瘦了，不过身体也好差呀
        正式开始健身是大二吧，大二其实也很迷茫。有些想法，但是方向也不是很清晰。
        正好又遇见了一些人，理解了一些事。我呢，终归是我自己。
        于是开始健身，刚开始啊，就只是瞎玩啊。瞎玩的结果就是什么也没练成，还残害身体。那么就沉下心了，认认真真想要一个结果。呃，我突然发现这和我开始敲代码一样，不过这是后话，后话了。
      </p>
    </div>
    <div class="post-format-content">
      <div class="post-thumbnail"> <img   style="margin: 0% auto" src="../../assets/img/fi-2.png" class="attachment-thumbnail wp-post-image" alt="105694702"> </div>
      <div class="content-wrap">
        <h1 class="entry-title"><a href="https://detail.tmall.com/item.htm?spm=a230r.1.14.8.2d73369cZqO0AP&id=20508084915&cm_id=140105335569ed55e27b&abbucket=19" class="featured-image" rel="bookmark">好好健身必不可少的宝典，墙裂推荐！</a></h1>
      </div>
    </div>

    <div class="text-2" align="center">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有了一起健身的小伙伴，有了每天去健身就有免费的台球可以玩。健身计划就很容易完成了。<br>
        一个懒惰的猪头，不对，猪头已经被我打死了，一个热爱运动的冰冷的健身机器，啊，也要热爱学习啊。最后说一句我70kg</p>
      <p>然后我是这样子的，小小的玩笑不过也差不多好的吧（手动滑稽）</p>
      <p>👇👇👇👇👇👇👇👇👇👇👇👇👇👇</p>

    </div>
    <div class="me-img"><img src="../../assets/img/fi-3.jpg"></div>

  </div>
</template>

<style lang="scss" scoped>
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
  .me-img{
    width: 30%;
    margin: 0% auto;
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
    background-color:rgba(128,128,128,0.7);;
    color: #87CEFA;
    width: 95%;
    padding: 50px 40px 50px 40px;
    border-radius:40px;
    font-size: 30px;
    font-weight:400;
    margin: 5% auto;

  }
  .text-2{
    background-color:rgba(128,128,128 ,0.7);
    color: #87CEFA;
    bottom: 0;
    padding: 50px 40px 50px 40px;
    width: 65%;
    border-radius:40px;
    font-size: 30px;
    font-weight:400;
    margin: 5% auto;
  }
  .post-format-content {
    position: relative;


  }
  .post-thumbnail {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .content-wrap {
    padding: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 0;
    bottom: 0;
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
  }
  .content-wrap h1.entry-title {
    display: table;
    font-size:200%;
    text-transform: uppercase;
    width: 100%;;
    margin:0% auto;
  }
  .edit-link {
    z-index: 2;
  }
  .featured-image {
    display: table-cell;
    position: relative;
    transition: opacity .25s ease-in-out, background .25s ease-in-out;
    vertical-align: middle;
    z-index: 1;
    color: #fff;
    text-decoration: none;
    opacity: 0;
    padding: 10%;
  }
  .featured-image:hover {
    opacity: 0.9;
    color: #fff;
    background: rgba(0,0,0,0.8);
  }
  .post-thumbnail img {
    display: block;
  }


</style>
