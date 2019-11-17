<template>
  <div class="ticket-detail-container">
    <div class="title">
      <h2 class="from-to">{{ from }} - {{ to }}</h2>
      <p class="tips">Select Your Tickets.</p>
    </div>
    <p class="divider border-top"></p>
    <div class="info">
      <router-link
        :ref="`info-item-${item.id}`"
        class="info-item"
        tag="div"
        :to="`/ticket/${from} - ${to}/${item.id}`"
        v-for="(item, key) in timeTable"
        :key="key"
      >
        {{ item.date }}
      </router-link>
    </div>
    <router-view :timeTable="timeTable"></router-view>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'TicketDetail.vue',
  data() {
    return {
      firstLink: null,
      isLogin: false,
      timeTable: [
        {
          id: "1",
          date: '2019-11-14 星期四',
          cities: [
            {
              from: '成都',
              to: '雅安',
              buses: [
                {
                  "start_at": '10:00',
                  "left_tickets": '20',
                  status: '已发车'
                },
                {
                  "start_at": '15:00',
                  "left_tickets": '0',
                  status: '已发车'
                }
              ]
            },
            {
              from: '雅安',
              to: '成都',
              buses: [
                {
                  "start_at": '10:00',
                  "left_tickets": '10',
                  status: '已发车'
                },
                {
                  "start_at": '15:00',
                  "left_tickets": '16',
                  status: '已发车'
                }
              ]
            },
          ]
        },
        {
          id: "2",
          date: '2019-11-15 星期五',
          cities: [
            {
              from: '成都',
              to: '雅安',
              buses: [
                {
                  "start_at": '10:00',
                  "left_tickets": '8',
                  status: '接受预定，立即下单'
                },
                {
                  "start_at": '13:00',
                  "left_tickets": '7',
                  status: '接受预定，立即下单'
                },
                {
                  "start_at": '16:00',
                  "left_tickets": '5',
                  status: '接受预定，立即下单'
                },
                {
                  "start_at": '18:00',
                  "left_tickets": '21',
                  status: '接受预定，立即下单'
                }
              ]
            }
          ]
        },
      ]
      // timeTable: [
      //   {
      //     date: "2019-11-14",
      //     day: "星期四",
      //     from: [
      //       {
      //         from: "成都",
      //         to: "雅安",
      //         start_at: [
      //           {
      //             time: "10:00",
      //             left_tickets: "20",
      //             status: "已发车"
      //           },
      //           {
      //             time: "16:00",
      //             left_tickets: "0",
      //             status: "已发车"
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ]
    };
  },
  computed: {
    from() {
      return this.$route.params.from;
    },
    to() {
      return this.$route.params.to;
    },
  },
  mounted() {
    if (this.$route.path === `/ticket/${ this.from } - ${ this.to }` ) {
      // 得到第一个router-link对应的元素
      this.firstLink = this.$refs['info-item-1'][0].$el;
      this.firstLink.classList.add('active');
    }
  },
  updated() {
    if (this.firstLink) {
      this.firstLink.classList.remove('active');
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/mixins.scss';
@import '@/assets/styles/border.scss';

.ticket-detail-container {
  padding: .2rem;
  margin-top: .7rem;
  font-weight: 300;
  .from-to {
    font-size: .54rem;
    margin-bottom: .2rem;
  }
  .tips {
    font-size: .4rem;
  }
  .border-top {
    border-color: $white-e;
  }
  .divider {
    margin: .3rem auto;
    // border-top: 1px solid $white-3;
  }
  .info {
    display: flex;
    justify-content: flex-start;
    .info-item {
      border: 1px solid;
      border-color: #fff;
      border-bottom: none;
      padding: .2rem .4rem;
      color: $link-blue;
    }
    .active {
      @include linkBorder;
    }
    ::v-deep .router-link-active {
      @include linkBorder;
    }
  }
}

</style>
