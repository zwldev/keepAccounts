
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';

import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Mint);

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: App }
});

//# sourceMappingURL=main-compiled.js.map