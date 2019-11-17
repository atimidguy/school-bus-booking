<template>
  <div class="info-container">
    <div
      class="info-item-container"
      :class="{ red: item.status === '已发车' }"
      v-for="(item, index) in finalTimeTable"
      :key="index"
    >
      <div class="info-item">
        <span class="start-at">{{ item['start_at'] }}</span>
        <span class="left-tickets">剩余 {{ item['left_tickets'] }} 张</span>
        <div class="price">￥40.00</div>
        <div class="status">{{ item.status }}</div>
        <router-link tag="div" to="/login" class="login-tips">要预定，请登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'TicketMoreDetail',
  props: {
    timeTable: {
      type: Array,
    },
    id: {
      type: String,
      default() {
        return '1';
      },
    },
  },
  computed: {
    idNum() {
      return this.id || 1;
    },
    finalTimeTable() {
      const filteredDate = this.timeTable.find((ele) => (ele.id === this.idNum));
      const filteredCities = filteredDate.cities.find((ele) => (ele.from === "成都" && ele.to === "雅安"))
      const filteredBus = filteredCities.buses;
      return filteredBus;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/border.scss';
.red {
  border-left-color: red !important;
}
.info-container {
  margin-top: .1rem;
  border-top: 1px solid $dark-c;

  .info-item-container {
    margin: .4rem 0 0;
    padding: .2rem;
    // border: 1px solid $dark-c;
    background-color: $white-fc;
    border-left: 3px solid $green-1;
    .info-item {
      margin: .2rem 0;
      font-weight: normal;
      .start-at {
        font-size: .34rem;
        margin-right: .2rem; 
      }
      .left-tickets {
        color: $dark-7;
        font-size: .25rem;
      }
      .price {
        font-size: .26rem;
        margin-top: .3rem;
      }
      .status {
        font-size: .24rem;
        margin-top: .3rem;
      }
      .login-tips {
        float: right;
        margin-top: -.3rem;
        margin-right: .4rem;
        padding: .2rem .3rem;
        color: #fff;
        background-color: $login-btn-blue;
      }
    }
  } 
}
</style>
