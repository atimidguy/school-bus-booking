<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view />
    <common-footer></common-footer>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import CommonFooter from '@/components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
    CommonFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>
