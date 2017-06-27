<template>
  <div class="footer-bar" @click="addNew()"><i class="fa fa-plus"></i> 记一笔</div>
</template>
<style scoped>
  .footer-bar {
    position: relative;
    background-color: #f7f7f7;
    border-top: 1px solid #e1e1e1;
    bottom: 0;
    height: 2rem;
    line-height: 2rem;
    width: 100%;
    text-align: center;
    color: #107EC7;
    font-size: .8rem;
    z-index: 999;
  }
</style>
<script>
  export default{
    data () {
      return {
      }
    },
    methods: {
      addNew () {
        this.$parent.ctrlNewModel()
      }
    }
  }
</script>
