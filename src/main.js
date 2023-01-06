// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//解决移动端300毫秒点击延迟问题
import fastclick from 'fastclick'
//引入样式
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'



Vue.config.productionTip = false
//fastClick自带的方法，解决300毫秒点击延迟问题
fastclick.attach(document.body);

/* 定义了vue的根实例，挂载到id=app的元素上*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*路由就是根据网址的不同，返回不同的内容给用户 */