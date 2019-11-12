<template>
  <div>
    <div class="news">
      <div class="news-report">新闻公告</div>
      <div
        class="news-item-wrapper"
        v-for="(newsItem, index) in visibleNewsItems"
        :key="index"
      >
        <div class="news-item-title" @click="handleNewsItemClick(index)">
          <div class="news-item-inner">
            {{ newsItem.id }} - {{ newsItem.title }}
          </div>
        </div>

        <!-- <transition name="fadeHeight">
          <div v-if="newsItem.isExpanded">
            <p class="news-item-content">
              {{ newsItem.content }}
            </p>
          </div>
        </transition> -->
        <el-collapse-transition :name="index">
          <p class="news-item-content" v-if="newsItem.isExpanded">
            {{ newsItem.content }}
          </p>
        </el-collapse-transition>
      </div>
      <!-- <pagination
        :pages="pages"
        :pageIndex="pageIndex"
        @updatepage="updatepage"
      ></pagination> -->
      <el-pagination
        class="pagination"
        small
        background
        :page-size="pageSize"
        :total="news.length"
        @current-change="updatepage"
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import Pagination from './Pagination.vue';
// import CollapseFade from '@/components/common/CollapseFade.vue';

export default {
  name: 'HomeNews',
  components: {
    // Pagination,
    // CollapseFade,
  },
  data() {
    return {
      news: [],
      visibleNewsItems: [],
      pageIndex: 0,
      pageSize: 5,
      collapsed: false,
    };
  },
  computed: {
    pages() {
      const pageNums = Math.ceil(this.news.length / this.pageSize);
      return pageNums;
    },
  },
  beforeMount() {
    this.$axios.get('/api/news.json').then(this.setNews);
  },
  methods: {
    setNews(res) {
      const result = res.data;
      this.news = result;
      this.news.forEach((item, index) => {
        if (index % this.pageSize === 0) {
          this.news[index].isExpanded = true;
        }
      });
      this.updateVisibleNewsItems();
    },
    updateVisibleNewsItems() {
      this.visibleNewsItems = this.news
        .slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
    },
    updatepage(currentPage) {
      this.pageIndex = currentPage - 1;
      window.scrollTo(0, 0);
      this.updateVisibleNewsItems();
    },
    // elementui pagination
    handleNewsItemClick(index) {
      this.visibleNewsItems[index].isExpanded = !this.visibleNewsItems[index].isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 1s;
  max-height: 2.4rem;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0px;
}

@import "@/assets/styles/_variables.scss";
.news {
  font-size: 0.32rem;
  padding: 0.2rem;
  line-height: 1.3;
  .news-report {
    font-weight: bold;
    font-size: 0.4rem;
    margin-bottom: 0.16rem;
  }
  .news-item-wrapper {
    margin-bottom: 0.2rem;
    .news-item-title {
      background-color: $white-1;
      padding: 0.2rem;
      border: 1px solid #ddd;
      height: 1.2rem;
      display: flex;
      align-items: center;
    }
    .news-item-content {
      // max-height: 2.4rem;
      overflow: hidden;
      padding: 0.2rem;
      border: 1px solid $dark-c;
      border-top: none;
      background-color: $white-3;
    }
  }
}
</style>
