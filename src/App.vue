<template>
  <div id="app">
    <common-header></common-header>
    <common-nav></common-nav>
    <router-view></router-view>
    <contact-list></contact-list>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from './components/common/Header.vue';
import CommonNav from './components/common/Nav.vue';
import CommonFooter from './components/common/Footer.vue';
import ContactList from './components/common/ContactList.vue';

export default {
  name: 'app',
  components: {
    CommonHeader,
    CommonNav,
    CommonFooter,
    ContactList,
  },
};
</script>

<style>
#app {
  margin: 0.4rem 0.1rem;
}
</style>
