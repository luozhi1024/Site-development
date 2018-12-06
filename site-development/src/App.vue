<template>
  <div id="app">
    <commonheader :selectMenu="selectMenu"></commonheader>
    <router-view class="content" @switchtab ="switchtab"/>
    <commonfooter :footerBgColor="selectMenu.bgColor"  :menuList="menuList"></commonfooter>
  </div>
</template>
<script>

  import  commonheader from "@/components/commonheader.vue";
  import  commonfooter from "@/components/commonfooter.vue";
  export default {
    components :{
      commonheader,
      commonfooter,
    },
    methods: {
      // changeTitle(menu){
      //     this.selectMenu = menu;
      // },
      switchtab(menuname){
        this.menuList.forEach(menu => {
          if(menu.name == menuname){
            this.selectMenu = menu;
          }

        });
      }
    },
    data(){
      return{
        menuList: [
          {
            title: '乐趣',
            name: 'My pleasures',
            path: '/MyPleasures',
          }, {
            title: '滑板',
            name: 'The skateboard',
            path: '/TheSkateboard',
          },{
            title: '健身',
            name: 'Fitness',
            path: '/Fitness'
          },{
            title: '电影音乐',
            name: 'Film music',
            path: '/FilmMusic'
          },{
            title: '游戏',
            name: 'The games',
            path: '/TheGames'
          },{
            title: '朋友们',
            name: 'Friends',
            path: '/Friends'
      }
        ],
        selectMenu: {}
      }
    }

  }
</script>

<style lang="scss">
  .content{
    margin: 200px 0;
  }


</style>
