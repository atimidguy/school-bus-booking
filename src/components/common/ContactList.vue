<template>
  <div class="contact-container">
    <div class="contact-list" v-for="(item, key) in contactList" :key="key">
      <h4 class="contact-item-name">
        <span class="img-wrapper">
          <img class="img-content" src="@/assets/images/phone-2.png" alt="" />
        </span>
        {{ item.name }}
      </h4>
      <template v-if="item.cities">
        <p class="contact-info" v-for="(city, key) in item.cities" :key="key">
          {{ city.name }}：{{ city.tel }}
        </p>
      </template>
      <template v-else>
        <p class="contact-info">{{ item.tel }}</p>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactFooter',
  data() {
    return {
      contactList: [
        {
          name: '售票处',
          cities: [
            {
              name: '雅安',
              tel: '0835-1111111',
            },
            {
              name: '温江',
              tel: '028-22222222',
            },
            {
              name: '成都',
              tel: '028-33333333',
            },
          ],
        },
        {
          name: ' 车辆管理',
          cities: [
            {
              name: '雅安',
              tel: '0835-4444444',
            },
            {
              name: '成都',
              tel: '028-55555555',
            },
          ],
        },
        {
          name: '登录密码咨询',
          cities: [
            {
              name: '雅安',
              tel: '0835-6666666',
            },
            {
              name: '成都',
              tel: '028-77777777',
            },
            {
              name: '成都',
              tel: '028-88888888',
            },
          ],
        },
        {
          name: '网络订票咨询',
          tel: '0835-9999999',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.contact-container {
  margin: 0.8rem -0.1rem /* compensate #app margin 0.1rem */;
  background-color: $primaryColor;
  text-align: center;
  padding: 0.28rem;
  .contact-list {
    color: #fff;
  }
  .contact-item-name {
    font-size: 0.34rem;
    font-weight: 500;
    padding: 0.28rem;
    .img-wrapper {
      display: inline-block;
      background: $primaryColor-darker;
      width: 0.3rem;
      height: 0.3rem;
      padding: 0.1rem;
      border-radius: 0.05rem;
      // margin-right: 0.1rem;
      box-sizing: content-box;
      .img-content {
        width: 100%;
        height: 100%;
      }
    }
  }
  .contact-info {
    line-height: 2.5;
  }
}
</style>
