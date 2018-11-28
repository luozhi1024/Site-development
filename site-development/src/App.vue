<template>
  <div id="app">
    <commonheader :selectMenu="selectMenu"></commonheader>
    <router-view class="content" @switchtab ="switchtab"/>
    <commonfooter :footerBgColor="selectMenu.bgColor"  :menuList="menuList"></commonfooter>
    <MyPleasures></MyPleasures>
  </div>
</template>
<script>

  import  commonheader from "@/components/commonheader.vue";
  import  commonfooter from "@/components/commonfooter.vue";
  import  MyPleasures from "@/components/MyPleasures.vue"
  export default {
    components :{
      commonheader,
      commonfooter,
      MyPleasures
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
            title: '滑板',
            bgColor: '#e54847',
            name: 'The skateboard',
            path: '/The skateboard',
          },{
            title: '健身',
            bgColor: '#C20C0C',
            name: 'Fitness',
            path: '/Fitness'
          },{
            title: '电影音乐',
            bgColor: '#795548',
            name: 'Film music',
            path: '/Film music'
          },{
            title: '游戏',
            bgColor: '#3f51b5',
            name: 'The games',
            path: '/The games'
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
    margin: 302px 0;
  }


</style>
