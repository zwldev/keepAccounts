import Vue from 'vue';

Vue.filter('price', function (value) {
  return Number(value).toFixed(2);
});

//# sourceMappingURL=price-compiled.js.map