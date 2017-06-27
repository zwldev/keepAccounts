import Vue from 'vue';
import Router from 'vue-router';
import indexList from '@/components/indexList/indexList';
import detail from '@/components/detail/detail';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'indexList',
    component: indexList
  }, {
    path: '/detail/:id&:month',
    name: 'detail',
    component: detail
  }]
});

//# sourceMappingURL=index-compiled.js.map