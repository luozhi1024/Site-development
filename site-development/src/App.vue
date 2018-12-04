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
            bgColor: '#e54847',
            name: 'My pleasures',
            path: '/MyPleasures',
          }, {
            title: '滑板',
            bgColor: '#e54847',
            name: 'The skateboard',
            path: '/TheSkateboard',
          },{
            title: '健身',
            bgColor: '#C20C0C',
            name: 'Fitness',
            path: '/Fitness'
          },{
            title: '电影音乐',
            bgColor: '#795548',
            name: 'Film music',
            path: '/FilmMusic'
          },{
            title: '游戏',
            bgColor: '#3f51b5',
            name: 'The games',
            path: '/TheGames'
          },{
        title: '朋友们',
          bgColor: '#3f51b5',
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
