<template>
  <div class="header-wrap">
    <div class="header">
      <h2>账本</h2>
      <div class="top-tool">
        <ul class="clear-fix" v-if="obj.pay">
            <li @click="openPicker()">
              <p class="p1">2017年</p>
              <strong>{{ obj.month | month }}</strong> 月 <i class="fa fa-caret-down"></i>
            </li>
            <li>
              <p class="p1">支出</p>
              <p class="p2">{{ obj.pay.total | price }}</p>
            </li>
            <li>
              <p class="p1">收入</p>
              <p class="p2">{{ obj.income.total | price }}</p>
            </li>
        </ul>
      </div>
    </div>
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
  import '../../filter/month'
  import '../../filter/price'
  export default {
    data () {
      return {
        pickerValue: ''
      }
    },
    props: {
      items: {
        type: Object
      }
    },
    methods: {
      openPicker () {
        this.$refs.picker.open()
      },
      handleConfirm (date) {
        const month = 6
        this.items.month = month
        this.$emit('getData', month)
      }
    },
    computed: {
      obj: function () {
        return this.items
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    background: #1C1B1F;
    z-index: 99;
    position: relative;
    /*background: #3a3a3a;*/
    /*height: 5rem;*/
  }

  .header h2 {
    color: #fff;
    font-size: .8rem;
    text-align: center;
    padding-top: .3rem;
  }

  .top-tool ul {
    padding: .5rem .3rem;
  }

  .top-tool ul li {
    float: left;
    color: #fff;
    width: 35%;
    padding: 0 0 0 1.5rem;
  }

  .top-tool ul li p.p1 {
    font-size: .45rem;
  }

  .top-tool ul li p.p2 {
    font-size: .85rem;
    padding-top: .4rem ;
  }

  .top-tool ul li:nth-child(1) {
    width: 30%;
    padding-left: .8rem;
    border-right: 1px dashed rgba(255, 255, 255, .4);
  }

  .top-tool ul li:nth-child(1) strong {
    font-size: 1.2rem;
  }
</style>
