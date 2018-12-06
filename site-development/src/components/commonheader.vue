<template>
  <div class="home">
    <header class="header" >
    <h3 class="header-title">没有自我介绍 你想了解我 可以来问我</h3>
    </header>
  </div>
</template>

<script>
  export default {
    props: ['selectMenu']
  };
</script>



<style lang="scss" scoped>
  .home{
    z-index: 999;
  }
  .header {
    height: 10%;
    background:url("../assets/img/header.jpg");
    line-height: 10%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    z-index: 999;
    &-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
    }
  }


</style>

