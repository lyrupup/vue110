// 入口文件
import Vue from 'vue'
import App from './App.vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入 vue-resouerce
import VueResource from 'vue-resource'
// 安装 vue-resource, 安装完毕之后，就可以用 this.$http 来发送请求了
Vue.use(VueResource)

// 导入 mui 的样式
import './lib/mui/css/mui.min.css'

// 导入路由模块
import router from './router'   // 这里最好小写，方便下面的属性简写

// 导入 mint-ui 的相关组件
import {Header, Swipe, SwipeItem} from 'mint-ui'

Vue.component(Header.name, Header)  // Header.name 的值 就是 mt-header
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


new Vue({
    el: '#app',
    render: h => h(App),
    // 挂载路由对象到vm实例中去
    router
})

