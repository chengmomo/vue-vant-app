<template>
  <div class="recommend">
    <van-list>
      <van-cell
      v-for="item in list"
      :key="item"
      :title="item"
      @click="goRoute(item)"/>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {

  },
  data() {
    return {
      list: ['1','上班','午休','下班','休息日'],
      loading: true,
      finished: false
    };
  },
  methods: {
      goRoute(item) {
          console.log(item)
          this.$router.push({
              name: 'strategy'
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .van-cell {
    margin: 10px;
    width: 355px;
    height: 160px;
    padding: 0;
  }
</style>
