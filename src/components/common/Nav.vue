<template>
  <div>
    <nav class="nav border-y">
      <router-link
        :to="item.link"
        tag="div"
        class="nav-item"
        v-for="(item, index) in navItem"
        :key="index"
        @click.prevent="handleClick"
      >
        {{ item.name }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CommonNav',
  data() {
    return {
      navItem: [
        { name: '首页', link: '/' },
        { name: '汽车票', link: '/ticket' },
        { name: '登录', link: '/login', active: false },
        { name: '校友购票', link: '/outplogin' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.nav {
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  font-size: 0.3rem;
  text-align: center;
}
.nav-item {
  width: 25%;
  padding: 0.3rem 0rem;
  &:active {
    background: #dfdedd;
  }
}
</style>
