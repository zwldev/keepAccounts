<template>
  <div class="detail">
    <h2>{{ detail.title }}</h2>
    <p class="price">{{ detail.price |price }}</p>
    <p class="desc">{{ detail.desc }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        detail: {}
      }
    },
    props: {
      items: {
        type: Object
      }
    },
    methods: {
      begin () {
        this.detail = this.items.pay.payList[this.$route.params.id - 1]
      }
    },
    created () {
      this.begin()
    }
  }
</script>

<style scoped>
  .detail {
    flex: 1;
  }

  h2 {
    font-size: .8rem;
    text-align: center;
    line-height: 2rem;
  }

  p.price {
    text-align: center;
    font-weight: bold;
    font-size: .9rem;
    color: #107EC7;
  }

  p.desc {
    font-size: .65rem;
    padding: 1rem;
    text-align: center;
  }
</style>
