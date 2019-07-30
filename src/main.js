// 入口文件
import Vue from 'vue'
import App from './App.vue'

// 导入 mui 的样式
import './lib/mui/css/mui.min.css'


import {Header} from 'mint-ui'
Vue.component(Header.name, Header)  // Header.name 的值 就是 mt-header

new Vue({
    el: '#app',
    render: h => h(App)
})

