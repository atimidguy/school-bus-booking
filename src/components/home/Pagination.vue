<template>
  <div>
    <ul class="pagination">
      <li
        :ref="i"
        class="pagination-item"
        v-for="(page, i) in pages"
        :key="page"
        @click="handlePaginationClick(i)"
      >
        <!-- :class="{ active: page.isActive }" -->
        {{ page }}
      </li>
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
  mounted() {
    this.$refs[0][0].classList.add('active');
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.pagination {
  display: flex;
  justify-content: center;
  .pagination-item {
    width: 0.3rem;
    text-align: center;
    padding: 0.1rem 0.2rem;
    margin-right: 0.2rem;
    border: 1px solid $dark-c;
    border-radius: 0.1rem;
    &.active {
      background-color: $titleColor;
      color: $white-1;
    }
  }
}
</style>
