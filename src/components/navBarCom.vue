<!--
调用方法：
import ComNavBar from '@/components/navBarCom'
<com-nav-bar :barInfo="barInfo" @click-left="back" @click-right="submit"></com-nav-bar>
data() {
    return {
        barInfo: {
            title: '标题',
            leftText: '',
            rightText: '确定' //没有就传空字符
        }
    }
  },
methods: {
  back () {
    console.log('back')
  },
  submit () {
    console.log('submit')
  }
}
-->
<template>
  <div class="myNavBar">
    <van-nav-bar
          :title="barInfo.title"
          :left-text="barInfo.leftText"
          :right-text="barInfo.rightText"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: 'myNavBar',
  props: {
      barInfo: {
          type: Object
      }
  },
  data () {
      return {}
  },
  mounted() {

  },
  methods: {
      onClickLeft() {
        this.$emit("click-left")
      },
      onClickRight() {
          this.$emit("click-right")
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .van-nav-bar .van-icon {
    color: #000;
    font-size: 18px;
  }
  .van-nav-bar__text {
    color: #499EFA;
    font-size: 16px;
  }
  .van-nav-bar__title {
    font-size: 18px;
  }
</style>
