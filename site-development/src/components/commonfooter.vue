<template>
  <ul class="footer" :style="{background: footerBgColor}">
    <li class="footer-menu" v-for="(menu, index) in menuList" :key="index" v-bind:class="[index==0?'button tab-link  active':'menu-first']">
      <router-link  :to="menu.path">{{menu.title}}</router-link>
    </li>
  </ul>
</template>

<script>

  export default {

    props: ['menuList','footerBgColor'],
    methods: {
      // selectMenu(menu) {
      //     this.bgColor = menu.bgColor;
      //     this.$emit('changeTitle', menu);
      // }
    }
  };
</script>
<style lang="scss" scoped>
  .footer {
    display: flex;
    position: fixed;
    top: 10%;
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #222222;
    font-size: 25px;
    z-index: 999;
    &-menu {
      flex-grow: 1;
      text-align: center;
      a {
        color: #ccc;
        outline: none;
        &.router-link-active {
          color: #fff;
        }
      }
    }
  }
  .menu-first{
    margin: 0 50px;
  }
</style>


