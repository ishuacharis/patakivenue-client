<template>
  <div id="index">
    <header>
      <Navbar />
      <Showcase />
    </header>
    <Activity />
    <About />
    <Footer />
  </div>
</template>

<script>
  
  import Navbar  from "../shared/Navbar.vue";
  import Showcase  from "../shared/ShowCase.vue";
  import Activity from "../shared/Activity.vue";
  import About from "../shared/About.vue";
  import Footer from "../shared/Footer.vue";
  export default {
      name: 'Index',
      components: {
          Navbar,Showcase,Activity,About,Footer
      }
  }
</script>

<style lang="scss">

</style>
