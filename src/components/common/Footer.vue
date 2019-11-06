<template>
  <footer class="footer">
    <div class="footer-title">四川农业大学汽车票务网</div>
    <div class="footer-copyright">
      Copyright &copy; 2019
      <router-link to="/" class="footer-link">SBTS</router-link> -
      <router-link to="/ticket" class="footer-link">汽车票</router-link> |
      <span>Powered by </span>
      <a href="https://github.com/atimidguy" class="footer-link">atimidguy</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CommonFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 2px solid;
  text-align: center;
  // position: absolute;
  // bottom: 0.2rem;
}
.footer-title {
  margin: 0.5rem auto 0.2rem;
}
.footer-copyright {
  font-size: 0.26rem;
}
.footer-link {
  color: #777;
}
</style>
