<template>
  <div class="recommend">
    <ul>
        <li v-for="item in list" @click="goRoute(item)">
            <img :src="item.img" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {

  },
  data() {
    return {
      list: [
          {
              route: 'strategy',
              img : require('../../assets/img/1.png')
          },
          {
              route: 'strategy',
              img : require('../../assets/img/2.png')
          },
          {
              route: 'strategy',
              img : require('../../assets/img/3.png')
          },
          {
              route: 'offWork',
              img : require('../../assets/img/4.png')
          },
          {
              route: 'strategy',
              img : require('../../assets/img/5.png')
          },
          // '1.2dacda2a','2.a3e12f8e','3.c63ccbc5','4.37fd846e','5.0e0d54dc'
      ],
      loading: true,
      finished: false
    };
  },
  methods: {
      goRoute(item) {
          console.log(item)
          this.$router.push({
              name: item.route
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  li {
      margin: 10px 10px 0 10px;
      width: 355px;
      height: 160px;
      padding: 0;
      float: left;
  }
</style>
