<template>
  <div>
    <common-header></common-header>
    <common-nav></common-nav>
  </div>
</template>

<script>
import CommonHeader from './common/Header.vue';
import CommonNav from './common/Nav.vue';

export default {
  name: 'HeaderNav',
  components: {
    CommonHeader,
    CommonNav,
  },
};
</script>

<style lang="scss" scoped>
</style>
