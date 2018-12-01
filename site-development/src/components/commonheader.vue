<template>
  <div class="home">
    <header class="header">
    </header>
  </div>
</template>

<script>
    export default {
        props: ['selectMenu','menuList','footerBgColor'],
      methods: {
        // selectMenu(menu) {
        //     this.bgColor = menu.bgColor;
        //     this.$emit('changeTitle', menu);
        // }
      }
    };
</script>


<style lang="scss" scoped>
  .home{
    z-index: 999;
  }
    .header {
        height: 10%;
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
