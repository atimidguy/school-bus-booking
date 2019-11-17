<template>
<div class="ticket-container">
  <div class="ticket-news-container">
    <p class="ticket-news-item">为不混淆站点，请广大师生注意龙江宾馆即为成都站，温江校区为温江站</p>
    <p class="ticket-news-item">为方便师生出行，学生发车前三天，教职工发车前四天可预订校车票，具体车次请登陆后详见</p>
  </div>
  <div class="ticket-filter-container">
    通过始发站筛选：
    <ul class="ticket-filter">
      <li class="ticket-filter-item" v-for="(item, index) in startStations" :key="index">
        <div class="ticket-filter-item-button" @click='handleFilterClick'>{{ item }}</div>
      </li>
    </ul>
  </div>
  <div class="bus-container">
    <router-link
      tag="div"
      :to="`/ticket/${bus.from} - ${bus.to}`"
      class="bus-item"
      v-for="bus in fromA"
      :key="bus.id"
    >
      <div class="bus-img-container">
        <img class="bus-img-content" src="@/assets/images/bus.png" alt="">
      </div>
      <div class="start-end">{{ bus.from }} - {{ bus.to }}</div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'TicketNews',
  data() {
    return {
      from: '',
      startStations: ['所有始发', '龙江宾馆', '崇州', '温江校区', '雅安'],
      buses: [
        {
          id: '0001',
          from: '龙江宾馆',
          to: '雅安',
        },
        {
          id: '0002',
          from: '崇州',
          to: '温江校区',
        },
        {
          id: '0003',
          from: '温江校区',
          to: '崇州',
        },
        {
          id: '0004',
          from: '温江校区',
          to: '雅安',
        },
        {
          id: '0005',
          from: '雅安',
          to: '龙江宾馆',
        },
        {
          id: '0006',
          from: '雅安',
          to: '龙江宾馆2',
        },
        {
          id: '0007',
          from: '雅安',
          to: '温江校区',
        },
      ],
    };
  },
  methods: {
    handleFilterClick(e) {
      this.from = e.target.textContent;
    },
  },
  computed: {
    fromA() {
      if (!this.from || this.from === '所有始发') {
        return this.buses;
      }
      const array = [];
      this.buses.forEach((item) => {
        if (item.from === this.from) {
          array.push(item);
        }
      });
      return array;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
  .ticket-container {
    padding: .2rem;
    font-size: .26rem;
    .ticket-news-item {
      margin-top: .2rem;
      line-height: 1.5;
    }
    .ticket-filter-container {
      margin-top: .3rem;
      .ticket-filter {
        margin-top: .15rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .ticket-filter-item {
          user-select: none;
          color: #fff;
          border-radius: .04rem;
          margin-bottom: .1rem;
          margin-right: .2rem;
          background-color: $primaryColor;
          padding: .12rem .24rem;
        }
      }
    }

    .bus-container {
      margin-top: .2rem;
      display: flex;
      flex-wrap: wrap;
      .bus-item {
        width: 40%;
        border: .1rem solid $primaryColor-darker;
        margin-right: 5%;
        margin-bottom: .3rem;
        background-color: $primaryColor;
        .bus-img-container {
          display: flex;
          align-items: center;
          justify-content: center;
          .bus-img-content {
            width: 100%;
          }
        }
        .start-end {
          margin: .24rem 0;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
</style>
