<template>
  <div>
    <ul class="pagination">
      <li class="prev iconfont icon-arrow-lift"></li>
      <li
        :ref="i"
        class="pagination-item"
        v-for="(page, i) in pages"
        :key="page"
        @click="handlePaginationClick(i)"
        v-show="i < 6"
      >
        {{ page }}
      </li>
      <li class="next iconfont icon-arrow-right"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    news: Array,
    pages: Number,
    pageIndex: Number,
  },
  data() {
    return {
      showPrev: false,
    };
  },
  watch: {
    pageIndex(newIndex, oldIndex) {
      this.$refs[newIndex][0].classList.add('active');
      this.$refs[oldIndex][0].classList.remove('active');
    },
  },
  methods: {
    handlePaginationClick(i) {
      this.$emit('updatepage', i);
    },
  },
  updated() {
    this.$refs[0][0].classList.add('active');
  },
};
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_1498615_i4q5hurgxzo.css");
@import "@/assets/styles/_variables.scss";
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  .prev {
    margin-right: 0.2rem;
  }
  .pagination-item {
    width: 0.3rem;
    text-align: center;
    padding: 0.1rem 0.2rem;
    margin-right: 0.2rem;
    border: 1px solid $dark-c;
    border-radius: 0.1rem;
    &.active {
      background-color: $primaryColor;
      color: $white-1;
    }
  }
}
</style>
