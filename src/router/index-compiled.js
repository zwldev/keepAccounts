import Vue from 'vue';
import Router from 'vue-router';
import { Indicator } from 'mint-ui';
import indexList from '@/components/indexList/indexList';
import detail from '@/components/detail/detail';

Vue.use(Router);

var router = new Router({
  routes: [{
    path: '/',
    name: 'indexList',
    component: indexList
  }, {
    path: '/:id&:month',
    name: 'detail',
    component: detail
  }]
});

router.beforeEach(function (to, from, next) {
  Indicator.open();
  next();
});

router.afterEach(function (route) {
  setTimeout(function () {
    Indicator.close();
  }, 300);
});

export default router;

//# sourceMappingURL=index-compiled.js.map