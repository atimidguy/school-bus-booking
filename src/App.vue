<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import CommonFooter from './components/common/Footer.vue';

export default {
  name: 'app',
  components: {
    HeaderNav,
    CommonFooter,
  },
};
</script>

<style>
#app {
  margin: 0.4rem 0.1rem;
}
</style>
