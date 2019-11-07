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
            {{ newsItem.title }} - {{ newsItem.time }}
          </div>
        </div>
        <p class="news-item-content" v-show="newsItem.isExpanded">
          {{ newsItem.content }}
        </p>
      </div>
      <pagination
        :pages="pages"
        :pageIndex="pageIndex"
        @updatepage="updatepage"
      ></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination.vue';

export default {
  name: 'HomeNews',
  components: {
    Pagination,
  },
  data() {
    return {
      news: [
        {
          id: '0001',
          isExpanded: true,
          title: '关于法定假日、学校开学、放假时间段增加交通车的通知',
          time: '2019/10/21 16:18:46',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi enim reiciendis, sapiente ad eaque odio odit similique ex soluta nostrum ratione cum voluptatem recusandae veritatis laborum quaerat, ipsam provident laboriosam.',
        },
        {
          id: '0002',
          isExpanded: false,
          title: '关于2019年10月3日-- 10月7日关闭夜间时段（18:00---次日8:00）购票、退票的䃼充通知',
          time: '2019/10/3 9:13:49',
          content: 'Adipisicing elit. Lorem ipsum dolor sit amet consectetur,Commodi enim reiciendis, sapiente ad eaque odio odit similique ex soluta nostrum ratione cum voluptatem recusandae veritatis laborum quaerat, ipsam provident laboriosam.',
        },
        {
          id: '0003',
          isExpanded: false,
          title: '关于2019年10月1日-- 10月7日关闭夜间时段（18:00---次日8:00）外网购票、退票的通知',
          time: '2019/9/30 15:47:19',
          content: 'Sapiente ad eaque odioLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi enim reiciendis,  odit similique ex soluta nostrum ratione cum voluptatem recusandae veritatis laborum quaerat, ipsam provident laboriosam.',
        },
        {
          id: '0004',
          isExpanded: false,
          title: '关于暑假期间雅安往返成都校区车次变化的通知',
          time: '2019/7/13 10:13:37',
          content: 'Commodi enim reiciendis,  odit similique ex soluta nostrum ratione cum voluptatem recusandae veritatis laborum quaerat, ipsam provident laboriosam.',
        },
        {
          id: '0005',
          isExpanded: false,
          title: '四川农业大学校车票网络购票须知（试行）',
          time: '2019/5/20 16:14:30',
          content: 'bad aabasa asdl; l;k',
        },
        {
          id: '0006',
          isExpanded: false,
          title: '紧急通知',
          time: '2019/4/28 9:23:29',
          content: 'Urgent News',
        },
      ],
      visibleNewsItems: [],
      pageIndex: 0,
      pageSize: 3,
    };
  },
  computed: {
    pages() {
      const pageNums = Math.ceil(this.news.length / this.pageSize);
      return pageNums;
    },
  },
  beforeMount() {
    this.news.forEach((item, index) => {
      if (index % this.pageSize === 0) {
        this.news[index].isExpanded = true;
      }
    });
  },
  mounted() {
    this.updateVisibleNewsItems();
  },
  methods: {
    updateVisibleNewsItems() {
      this.visibleNewsItems = this.news
        .slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
    },
    updatepage(pageIndex) {
      this.pageIndex = pageIndex;
      this.updateVisibleNewsItems();
    },
    handleNewsItemClick(index) {
      this.visibleNewsItems[index].isExpanded = !this.visibleNewsItems[index].isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
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
      padding: 0.2rem;
      border: 1px solid $dark-c;
      border-top: none;
      background-color: $white-3;
    }
  }
}
</style>
