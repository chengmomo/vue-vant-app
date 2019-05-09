<template>
  <div class="home">
  	<!--<ul class="menu" @click="menuClick($event)">
    	<li class="active"><span data-attr="0">推荐</span></li>
    	<li><span data-attr="1">我的</span></li>
    	<li><span data-attr="2">日志</span></li>
    </ul>-->
    <div class="menu">
      <van-tabs @click="menuClick" class="menu-tab">
        <van-tab title="推荐"></van-tab>
        <van-tab title="我的"></van-tab>
        <van-tab title="日志"></van-tab>
      </van-tabs>
      <img :src="addImg" class="add">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data() {
    return {
        addImg: require("@/assets/icons/add.png"),
    }
  },
  watch: {
      $route( to , from ){

      }
  },
  beforeRouteEnter (to, from, next) {
      next(vm => {

      });
  },
  methods: {
	  menuClick(index, title) {
	      if (index === 0) {
	      	this.$router.push(`/home/recommend`)
	      } else if (index === 1) {
	      	this.$router.push(`/home/my-page`)
	      } else if (index === 2) {
	      	this.$router.push(`/home/log`)
	      }
	  },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .menu {
        .van-tab {
            color: #000;
        }
        .van-tabs__line {
            background-color: rgba(73,158,250,1);
        }
        .van-tab--active {
            color: rgba(73,158,250,1);
        }
    }

</style>
<style scoped lang="scss">
  .menu {
    background: #fff;
    position: relative;
    .add {
      position: absolute;
      top: 50%;
      margin-top: -9px;
      width: 16px;
      height: auto;
      right: 10px;
    }
  }
  .menu-tab {
    width: 70%;
    margin: 0 auto;
  }

</style>
