<template>
  <div id="app">
    <Index />
    <router-view></router-view>
  </div>
</template>

<script>
  import Index from './components/index/Index.vue'

  export default {
    name: 'App',
    components: {
      Index
    }
  }
</script>

<style lang="scss">

  @import './assets/css/global.scss';
  @import './assets/css/navbar.scss';
  @import './assets/css/event.scss';
  
</style>
