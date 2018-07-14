<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  // 因为MHeader本质上是个class，所以大写，标签可以小写（驼峰转中划线）
  import MHeader from './components/m-header/m-header.vue'
  import Tab from './components/tab/tab.vue'
  export default {
    
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/variable'

</style>

