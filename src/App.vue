<template>
  <div id="app">
    <v-header @getData="requestData" v-if="items" :items="items"></v-header>
    <transition name="slide-fade">
      <router-view :items="items"></router-view>
    </transition>
    <v-footer></v-footer>
    <v-new :class="{'show': isShowNewModel}"></v-new>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import footer from './components/footerBar/footerBar.vue'
  import addNew from './components/addNew/addNew.vue'
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        items: {},
        isShowNewModel: false
      }
    },
    components: {
      'v-header': header,
      'v-footer': footer,
      'v-new': addNew
    },
    methods: {
      requestData (month) {
        this.$http.get('static/data/month-' + month + '.json').then(
          (res) => {
            if (res.status === 200) {
              this.items = res.data
            } else {
              console.log(res.status)
            }
          },
          (res) => {
            this.items.pay.payList = []
            Toast({
              message: res.statusText,
              duration: 2000
            })
          }
        )
      },
      ctrlNewModel () {
        if (this.isShowNewModel === true) {
          this.isShowNewModel = false
        } else {
          this.isShowNewModel = true
        }
      }
    },
    created () {
      this.requestData(5)
    }
  }
</script>

<style>
  @import "common/css/reset.css";
  @import "common/css/base.css";
  @import "common/css/font-awesome.min.css";

  #app {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
