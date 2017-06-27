<template>
  <div class="new-model fix-box">
    <div class="head">
      <strong>支出</strong>
      <a class="cancel" @click="cancelModel()">取消</a>
    </div>
    <div @click="openPicker()">
      <button class="a-top-btn time">{{ time }}</button>
    </div>
    <div class="types-list">
      <v-types></v-types>
    </div>
    <v-calculator></v-calculator>
    <div>
      <mt-datetime-picker ref="picker"
                          type="date"
                          year-format="{value} 年"
                          month-format="{value} 月"
                          @confirm="handleConfirm"
                          v-model="pickerValue">
      </mt-datetime-picker>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import types from './types.vue'
  import calculator from './calculator.vue'
  export default{
    data () {
      return {
        pickerValue: '',
        time: '2017-2-1'
      }
    },
    components: {
      'v-types': types,
      'v-calculator': calculator
    },
    methods: {
      openPicker () {
        this.$refs.picker.open()
      },
      handleConfirm (date) {
        this.time = String(date.getFullYear()) + '-' + String(date.getMonth() + 1) + '-' + String(date.getDate())
      },
      cancelModel () {
        this.$parent.ctrlNewModel()
        this.$children[0].clearData()
      }
    }
  }
</script>

<style scoped>
  .new-model {
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999;
    background-color: #fff;
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
  }

  .new-model.show {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  .head {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
  }

  .head strong {
    font-size: .8rem;
    color: #333;
  }

  .head a.cancel {
    font-size: .65rem;
    color: #0E87DF;
    position: absolute;
    right: .5rem;
  }

  .a-top-btn {
    background-color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid #bbb;
    padding: .1rem .2rem;
    color: #aaa;
    font-size: .6rem;
    margin: .4rem .5rem;
  }
</style>
