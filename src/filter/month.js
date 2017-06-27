import Vue from 'vue'

Vue.filter('month', function (value) {
  return value < 10 ? '0' + String(value) : value
})
