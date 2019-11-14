<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <contact-list></contact-list>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import CommonFooter from './components/common/Footer.vue';
import ContactList from './components/common/ContactList.vue';

export default {
  name: 'app',
  components: {
    HeaderNav,
    CommonFooter,
    ContactList,
  },
};
</script>

<style>
#app {
  margin: 0.4rem 0.04rem;
}
</style>
