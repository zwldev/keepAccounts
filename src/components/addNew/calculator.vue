<template>
  <div class="calculator fix-box">
    <div class="top clear-fix">
      <div class="fl left">{{getString ? getString : '&nbsp;'}}</div>
      <div class="fl right">{{calculator.result}} <a @touchstart="clearCalculator()" v-if="calculator.result !== 0"><i
        class="fa fa-close"></i></a></div>
    </div>
    <div class="c-wrap">
      <table class="c-keyboard">
        <tr>
          <td @touchstart="chooseNum('1')">1</td>
          <td @touchstart="chooseNum('2')">2</td>
          <td @touchstart="chooseNum('3')">3</td>
          <td @touchstart="chooseDo('delete')">Del</td>
          <td></td>
        </tr>
        <tr>
          <td @touchstart="chooseNum('4')">4</td>
          <td @touchstart="chooseNum('5')">5</td>
          <td @touchstart="chooseNum('6')">6</td>
          <td @touchstart="chooseDo('minus')">-</td>
        </tr>
        <tr>
          <td @touchstart="chooseNum('7')">7</td>
          <td @touchstart="chooseNum('8')">8</td>
          <td @touchstart="chooseNum('9')">9</td>
          <td @touchstart="chooseDo('plus')">+</td>
        </tr>
        <tr>
          <td @touchstart="chooseNum('.')">.</td>
          <td @touchstart="chooseNum('0')">0</td>
          <td @touchstart="chooseDo('result')">=</td>
          <td @touchstart="chooseDo('done')">ok</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        type: '',
        calculator: {
          keyArr: [],
          result: 0
        }
      }
    },
    computed: {
      /**
       *把数组中的元素转为字符串展示
       * @returns {string}
       */
      getString () {
        let realString = ''
        for (let i in this.calculator.keyArr) {
          realString += this.calculator.keyArr[i]
        }
        return realString
      }
    },
    methods: {
      chooseNum (num) {
        let keyArr = this.calculator.keyArr
        if (keyArr.length <= 0) {
          if (num === '.') {
            return false
          }
          keyArr.push(num)
        } else {
          if (isNaN(keyArr[keyArr.length - 1])) {
            if (num === '.') {
              return false
            }
            keyArr.push(num)
          } else {
            if (num === '.' && (keyArr[keyArr.length - 1].indexOf('.') > -1)) {
              return false
            }
            this.$set(keyArr, keyArr.length - 1, keyArr[keyArr.length - 1] + num)
          }
        }
      },
      /**
       *运算符逻辑
       */
      chooseDo (type) {
        let keyArr = this.calculator.keyArr
        switch (type) {
          case 'plus':
            if (keyArr.length > 0) {
              if (keyArr[keyArr.length - 1] === '+') {
                return false
              } else if (keyArr[keyArr.length - 1] === '-') {
                this.$set(keyArr, keyArr.length - 1, '+')
              } else {
                keyArr.push('+')
              }
            }
            break
          case 'minus':
            if (keyArr.length > 0) {
              if (keyArr.length > 0) {
                if (keyArr[keyArr.length - 1] === '-') {
                  return false
                } else if (keyArr[keyArr.length - 1] === '+') {
                  this.$set(keyArr, keyArr.length - 1, '-')
                } else {
                  keyArr.push('-')
                }
              }
            }
            break
          case 'delete':
            if (keyArr.length > 0) {
              if (keyArr[keyArr.length - 1].length > 1) {
                this.$set(keyArr, keyArr.length - 1, keyArr[keyArr.length - 1].substring(0, keyArr[keyArr.length - 1].length - 1))
              } else {
                keyArr.splice(keyArr.length - 1, 1)
              }
              if (keyArr.length === 0) {
                this.getResult(keyArr)
              }
            }
            break
          case 'result':
            this.getResult(keyArr)
            break
          case 'done':
            let resultObj = {
              time: this.$parent.time,
              type: this.$parent.$children[0].type,
              count: this.calculator.result
            }
            console.log(resultObj)
//            alert(JSON.stringify(resultObj))
            break
        }
      },
      /**
       *计算结果
       * @param keyArr
       */
      getResult (keyArr) {
        this.calculator.result = 0
        for (let i = 0; i < keyArr.length / 2; i++) {
          if (keyArr[2 * i - 1] === '-') {
            keyArr[2 * i] = Number(keyArr[2 * i] * -1)
          }
          this.calculator.result += Number(keyArr[2 * i])
          if (keyArr[2 * i - 1] === '-') {
            keyArr[2 * i] = String(keyArr[2 * i] * -1)
          }
        }
      },
      /**
       *清除计算器的所有
       *
       */
      clearCalculator () {
        this.calculator.keyArr = []
        this.calculator.result = 0
      }
    }
  }
</script>
<style scoped>
  .calculator {
    background-color: #f8f8f8;
    position: fixed;
    bottom: 0;
  }

  .top div {
    line-height: 1.6rem;
    font-size: .8rem;
    text-align: right;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .top div:nth-child(1) {
    text-align: right;
    width: 75%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    padding-right: .2rem;
    white-space:nowrap;
  }

  .top div:nth-child(2) {
    text-align: center;
    width: 25%;
    position: relative;
    padding-right: 1.1rem;
  }

  .top div:nth-child(2) a {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 1rem;
    height: 1.6rem;
    line-height: 1.4rem;
    text-align: left;
  }

  .top div:nth-child(2) i.fa {
    width: .6rem;
    height: .6rem;
    line-height: .6rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    background-color: rgba(0, 0, 0, .3);
    color: #fff;
    font-size: .5rem;
  }

  table {
    width: 100%;
  }

  table.c-keyboard td {
    height: 2.2rem;
    line-height: 2.2rem;
    text-align: center;
    width: 25%;
    font-size: .8rem;
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  table.c-keyboard tr td:nth-child(1) {
    border-left: none;
  }
</style>
