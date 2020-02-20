import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Joke from './components/Joke';
import About from './components/About';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{ path: '', component: Joke },
		{ path: '/about', component: About },
	],
	mode: 'history',
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
