<template>
<div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
</div>
</template>

<script>

import router from './router/index'
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  router,
  components: {
    MainTabBar
  }
}
</script>
    
<style>
    @import './assets/css/base.css'
</style>
