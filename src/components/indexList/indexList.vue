<template>
  <div class="pay-list">
    <ul v-if="list">
      <li v-for="(l, index) in list">
        <p class="time">{{ l[0].time }}</p>
        <dl class="pay-dl">
          <dd v-for="sl in l">
            <router-link :to="{ name: 'detail', params: { id: sl.id, month: 5}}">
              <i v-if="sl.type === 'transport'" class="fa fa-cab" style="background-color: #a892ff"></i>
              <i v-if="sl.type === 'eat'" class="fa fa-cutlery" style="background-color: #f70"></i>
              <i v-if="sl.type === 'life' || sl.type === 'income'" class="fa fa-tags" style="background-color: #6a8dff"></i>
              <i v-if="sl.type === 'wear'" class="fa fa-shopping-basket" style="background-color: #80c9ff"></i>
              <h4>{{ sl.title }}</h4>
              <strong>-{{ sl.price }}</strong>
            </router-link>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../filter/price'
  import getDay from './getDay'
  export default {
    data () {
      return {}
    },
    props: {
      items: {
        type: Object
      }
    },
    computed: {
      list () {
        if (this.items.pay) {
          let monthList = this.items.pay.payList
          var monthObj = {}
          for (let j = 0; j < monthList.length; j++) {
            let month = monthList[j].time.substring(monthList[j].time.length, monthList[j].time.length - 2)
            for (let i = 1; i <= getDay(this.items.year, this.items.month); i++) {
              if (Number(month) === i) {
                if (!monthObj['month-' + i]) {
                  monthObj['month-' + i] = []
                }
                monthObj['month-' + i].push(monthList[j])
              }
            }
          }
        }
        return monthObj
      },
      listHeight () {
        console.log(window.innerHeight)
        return 500
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .pay-list {
    height: 100%;
    /*padding: 5rem 0 2rem 0;*/
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
    z-index: 0;
    flex: 1;
  }

  .pay-list li {
    position: relative;
  }

  .pay-list li p.time {
    font-size: .55rem;
    color: #666;
    border-bottom: 1px solid #f3f3f3;
    padding: .2rem .3rem;
  }
  .pay-dl dd {
    position: relative;
    padding: 0 0 0 2rem;
    height: 1.8rem;
    line-height: 1.8rem;
  }

  .pay-dl dd i, .pay-dl dd strong {
    position: absolute;
    top: 0;
    display: block;
    width: 1.6rem;
    height: 1.8rem;
  }
  .pay-dl dd h4 {
    font-size: .7rem;
    border-bottom: 1px solid #f3f3f3;
    padding: 0 3rem 0 0;
  }
  .pay-dl dd:nth-last-child(1) h4 {
    border: none;
  }
  .pay-dl dd i {
    width: 1.1rem;
    height: 1.1rem;
    background-color: #f3f3f3;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    left: 0;
    line-height: 1.1rem;
    margin: .35rem;
    font-size: .55rem;
    color: #fff;
  }
  .pay-dl dd strong {
    right: 0;
    width: 3rem;
    font-size: .65rem;
    text-align: right;
    padding-right: .4rem;
  }
</style>
