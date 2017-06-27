<template>
  <div class="calculator fix-box">
    <div class="top">{{calculator.result}}</div>
    <div class="c-wrap">
      <table>
        <tr>
          <td @click="chooseNum('1')">1</td>
          <td @click="chooseNum('2')">2</td>
          <td @click="chooseNum('3')">3</td>
          <td></td>
        </tr>
        <tr>
          <td @click="chooseNum('4')">4</td>
          <td @click="chooseNum('5')">5</td>
          <td @click="chooseNum('6')">6</td>
          <td @click="chooseDo('minus')">-</td>
        </tr>
        <tr>
          <td @click="chooseNum('7')">7</td>
          <td @click="chooseNum('8')">8</td>
          <td @click="chooseNum('9')">9</td>
          <td @click="chooseDo('plus')">+</td>
        </tr>
        <tr>
          <td @click="chooseNum('.')">.</td>
          <td @click="chooseNum('0')">0</td>
          <td @click="chooseDo('clear')">c</td>
          <td @click="chooseDo('done')">ok</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped>
  .calculator {
    background-color: #f8f8f8;
    position: fixed;
    bottom: 0;
  }

  .top {
    line-height: 1.5rem;
    font-size: .8rem;
    text-align: right;
    padding-right: 1.6rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  table {
    width: 100%;
  }

  table td {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    width: 25%;
    font-size: .8rem;
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  table tr td:nth-child(1) {
    border-left: none;
  }
</style>
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
    methods: {
      clearActive () {
        let item = this.$refs.ul.getElementsByTagName('li')
        for (let i in item) {
          if (item[i].classList && item[i].classList.contains('active')) item[i].classList.remove('active')
        }
      },
      setActive () {
        if (event.currentTarget.classList && event.currentTarget.classList.contains('active')) return false
        this.clearActive()
        event.currentTarget.classList.add('active')
        this.type = event.currentTarget.dataset.type
      },
      clearData () {
        this.clearActive()
        this.type = ''
      },
      chooseNum (num) {
        let keyArr = this.calculator.keyArr
        if (keyArr.length <= 0) {
          keyArr.push(num)
        } else {
          if (isNaN(keyArr[keyArr.length - 1])) {
            keyArr.push(num)
          } else {
            keyArr[keyArr.length - 1] += num
          }
        }
        this.calculator.result = Number(keyArr[keyArr.length - 1])
      },
      chooseDo (type) {
        let keyArr = this.calculator.keyArr
        keyArr.push(type)
        if (keyArr.length === 4) {
          this.getResult(keyArr)
        }
      },
      getResult (keyArr) {
        switch (keyArr[1]) {
          case 'plus':
            this.calculator.result = Number(keyArr[0]) + Number(keyArr[2])
            this.calculator.keyArr = []
            this.calculator.keyArr.push(String(this.calculator.result))
            console.log(keyArr)
            break
        }
      }
    }
  }
</script>
