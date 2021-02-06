<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {
    getHomeMultidata,
    getHomeGoods
  } from "../../network/home";

  export default {
    name: "Home",
    components: {
      FeatureView,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'k1': {page: 0, list: []},
          'k2': {page: 0, list: []},
          'k3': {page: 0, list: []},
        },
        currentType: 'k1',
        isShowBackTop: false
      }
    },
    created() { // 组件创建完成发送网络请求
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('k1')
      this.getHomeGoods('k2')
      this.getHomeGoods('k3')
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },
    methods:{
      /**
       * 事件监听相关的方法
       */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'k1'
            break
          case 1:
            this.currentType = 'k2'
            break
          case 2:
            this.currentType = 'k3'
            break
        }
      },
      backClick(){
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y) > 100
      },
      loadMore(){
        // console.log('上拉加载更多');
        this.getHomeGoods(this.currentType)

        this.$refs.scroll.scroll.refresh()
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          //this.banners = res.data.banner.list;
          //this.recommends = res.data.recommend.list;
          this.banners = [{
            image: 'https://static.jk.ybstatic.com/ups/img/Flnqbb9Dvl2E1AvrsgbUg__aMZVZ.jpeg',
            link: 'https://www.baidu.com/'
          },{
            image: 'https://static.jk.ybstatic.com/ups/img/FuCvhuNDMBRZt5P4pw7r3FPIJRnz.jpeg',
            link: 'https://www.baidu.com/'
          },{
            image: 'https://static.jk.ybstatic.com/ups/img/Fhvmt7CxmL-OleMQRAAcGQI2nWDs.jpeg',
            link: 'https://www.baidu.com/'
          },];
          this.recommends = [{
            image: 'https://static.jk.ybstatic.com/ups/img/Flnqbb9Dvl2E1AvrsgbUg__aMZVZ.jpeg',
            link: 'https://www.baidu.com/',
            title: '一号'
          },{
            image: 'https://static.jk.ybstatic.com/ups/img/FuCvhuNDMBRZt5P4pw7r3FPIJRnz.jpeg',
            link: 'https://www.baidu.com/',
            title: '二号'
          },{
            image: 'https://static.jk.ybstatic.com/ups/img/Fhvmt7CxmL-OleMQRAAcGQI2nWDs.jpeg',
            link: 'https://www.baidu.com/',
            title: '三号'
          },{
            image: 'https://static.jk.ybstatic.com/ups/img/FgHmU65h9N5T0e1WVgP0ckFxxYw-.jpeg',
            link: 'https://www.baidu.com/',
            title: '四号'
          }];
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.articles)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      },
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
