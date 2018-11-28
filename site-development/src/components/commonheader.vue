<template>
  <div class="home">
    <header class="header">
    </header>
  <div class="footer">
    <div><span class="title-menu">My pleasures</span></div>
    <ul class="footer-ul">
      <li class="title-li" v-for="(menu, index) in menuList" :key="index">
        <router-link  :to="menu.path">{{menu.title}}</router-link>
      </li>
    </ul>

  </div>
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
        height: 20%;
        background-color: #e54847;
        line-height: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: #fff;
        &-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        &-home {
            margin-left: 4px;
        }
    }
    .footer {
      display: flex;
      position: fixed;
      top: 20%;
      width: 100%;
      height:100px;
      line-height: 100px;
      background-color: #222222;
      font-size: 25px;
    }
    .footer-ul{
      right: 0%;
      display: flex;
      position: fixed;
    }
    .title-menu{
      color: #fff;
      font-size: 30px;
      margin-left: 50px;
    }
    .title-li{
      margin-right: 60px;
      color: #fff;
    }

</style>
