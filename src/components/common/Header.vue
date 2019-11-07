<template>
  <div>
    <header class="common-header">
      <h2 class="subtitle">四川农业大学</h2>
      <h1 class="title">汽车票务网</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.common-header {
  padding-bottom: 0.3rem;
  text-align: center;
}
.subtitle {
  font-size: 0.36rem;
  font-weight: normal;
  color: $subtitleColor;
}
.title {
  font-size: 0.56rem;
  margin-top: 0.2rem;
  font-weight: 500;
  color: $titleColor;
}
</style>
