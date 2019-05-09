import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.config.productionTip = false

Vue.use(Router).use(Vant)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
