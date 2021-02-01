<template>
    <div>
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners='banners'></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
    </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import HomeRecommend from 'views/home/childComps/HomeRecommend'

  import {getHomeMultidata} from 'network/home'

  export default {
    components: {
      NavBar,HomeSwiper,HomeRecommend
    },
    created () {
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    },
    data () {
      return {
        banners:[],
        recommends:[]
      }
    }
  }
</script>

<style scoped>
    .home-nav{
      background-color: var(--color-tint);
      color: #fff;
    }
</style>