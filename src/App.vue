<template>
  <div class='app-container'>
    <!-- 顶部header区域 -->
    <mt-header fixed title="刘师傅的第一个App"></mt-header>
   
    <!-- 想要中间切换组件的时候有动画效果，就用transition标签包裹起来 -->
    <transition>
      <router-view></router-view>
    </transition>
    
    
    <nav class='mui-bar mui-bar-tab'>
      <router-link class='mui-tab-item'  to="/home">
        <span class='mui-icon mui-icon-home'></span>
        <span calss='mui-tab-label'>首页</span>    
      </router-link>
      <router-link class='mui-tab-item' to="/member">
        <span class='mui-icon mui-icon-contact'></span>
        <span calss='mui-tab-label'>会员</span>    
      </router-link>
      <router-link class='mui-tab-item' to="/shopcar">
        <span class='mui-icon mui-icon-contact'>
          <span class="mui-badge">9</span>
        </span>
        <span calss='mui-tab-label'>购物车</span>    
      </router-link>
      <router-link class='mui-tab-item' to="/search">
        <span class='mui-icon mui-icon-search'></span>
        <span calss='mui-tab-label'>搜索</span>    
      </router-link>

    </nav>

  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container{
  padding-top: 40px;
  overflow-x: hidden;
}
.router-link-active{
  color: purple
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}
</style>
