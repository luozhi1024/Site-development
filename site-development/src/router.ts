import Vue from 'vue';
import Router from 'vue-router';
import MyPleasures from '@/views/MyPleasures/MyPleasures.vue';
import TheSkateboard from '@/views/TheSkateboard/TheSkateboard.vue';
import Fitness from '@/views/Fitness/Fitness.vue';
import FilmMusic from '@/views/FilmMusic/FilmMusic.vue'
import TheGames from '@/views/TheGames/TheGames.vue';
import Friends from '@/views/Friends/Friends.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/MyPleasures'
  },
    {
      path: '/MyPleasures',
      name: 'My pleasures',
      component: MyPleasures
    }, {
      path: '/TheSkateboard',
      name: 'The skateboard',
      component: TheSkateboard
    }, {
      path: '/Fitness',
      name: 'Fitness',
      component: Fitness
    }, {
      path: '/FilmMusic',
      name: 'Film Music',
      component: FilmMusic
    },{
      path: '/TheGames',
      name: 'The games',
      component: TheGames
    }, {
      path: '/Friends',
      name: 'Friends',
      component: Friends
    }
  ],
});
