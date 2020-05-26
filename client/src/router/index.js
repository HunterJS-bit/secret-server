import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Hash from '@/components/Hash/ViewSecret';
import CreateHash from '@/components/Hash/CreateHash';
import HashList from '@/components/Hash/HashList.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: HashList
    },
    {
      path: '/create',
      name: 'create',
      component: CreateHash
    },
    {
      path: '/:id',
      name: 'view',
      component: Hash
    }
  ],
  mode: 'history'
})