<template>
  <div class="recommend">
  	<ul class="menu" @click="menuClick($event)">
    	<li data-attr="0">推荐</li>
    	<li data-attr="1">我的</li>
    	<li data-attr="2">日志</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  watch: {
      $route( to , from ){
          
      }
  },
  beforeRouteEnter (to, from, next) {
      next(vm => {
          
      });
  },
  methods: {
	  menuClick(event) {
	      let el = event.target.attributes[1].value
	      if (el === '0') {
	      	this.$router.push(`/home/recommend`)
	      } else if (el === '1') {
	      	this.$router.push(`/home/my-page`)
	      } else if (el === '2') {
	      	this.$router.push(`/home/log`)
	      }
	  },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.menu {
		display: flex;
  		li {
  			flex: 1;
  			text-align: center;
  		}
	}
</style>
