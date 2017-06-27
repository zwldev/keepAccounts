<template>
  <div class="types">
    <ul ref="ul">
      <li data-type="1" @click="setActive()"><i class="fa fa-jpy"></i><br><span>一般</span></li>
      <li data-type="2" @click="setActive()"><i class="fa fa-cutlery"></i><br><span>餐饮</span></li>
      <li data-type="3" @click="setActive()"><i class="fa fa-shopping-basket"></i><br><span>购物</span></li>
      <li data-type="4" @click="setActive()"><i class="fa fa-soccer-ball-o"></i><br><span>运动</span></li>
      <li data-type="5" @click="setActive()"><i class="fa fa-bus"></i><br><span>交通</span></li>
      <li data-type="6" @click="setActive()"><i class="fa fa-coffee"></i><br><span>零食</span></li>
      <li data-type="7" @click="setActive()"><i class="fa fa-jpy"></i><br><span>一般</span></li>
      <li data-type="8" @click="setActive()"><i class="fa fa-cutlery"></i><br><span>餐饮</span></li>
      <li data-type="9" @click="setActive()"><i class="fa fa-shopping-basket"></i><br><span>购物</span></li>
      <li data-type="10" @click="setActive()"><i class="fa fa-soccer-ball-o"></i><br><span>运动</span></li>
      <li data-type="11" @click="setActive()"><i class="fa fa-bus"></i><br><span>交通</span></li>
      <li data-type="12" @click="setActive()"><i class="fa fa-coffee"></i><br><span>零食</span></li>
      <li data-type="13" @click="setActive()"><i class="fa fa-soccer-ball-o"></i><br><span>运动</span></li>
      <li data-type="14" @click="setActive()"><i class="fa fa-bus"></i><br><span>交通</span></li>
      <li data-type="15" @click="setActive()"><i class="fa fa-coffee"></i><br><span>零食</span></li>
    </ul>
  </div>
</template>
<style scoped>
  .types ul {
    display: flex;
    flex-wrap: wrap;
  }
  .types ul li {
    width: 20%;
    text-align: center;
    padding: .5rem 0;
    color: #595959;
  }
  .types ul li i {
    width: 1.1rem;
    height: 1.1rem;
    line-height: 1.1rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    font-size: .6rem;
  }

  .types ul li.active i {
    background-color: #F86714;
    color: #fff;
  }

  .types ul li span {
    font-size: .55rem;
  }
</style>
<script>
  export default{
    data () {
      return {
        type: ''
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
      }
    }
  }
</script>
