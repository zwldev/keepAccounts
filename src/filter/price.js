import Vue from 'vue'

Vue.filter('price', function (value) {
  return Number(value).toFixed(2)
})
