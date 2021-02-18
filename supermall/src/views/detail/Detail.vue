<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Goods, Shop} from 'network/detail'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll
    },
    data() {
      return {
        code: null,
        topImages: [],
        goods: {},
        shop: {}
      }
    },
    created() {
      // 1.保存传入的code
      this.code = this.$route.params.code
      // 2.根据code请求数据
      getDetail(this.code).then(res => {
        // 1.获取顶部图片轮播数据
        console.log(res)
        const data = res.data.data
        this.topImages = data.article.cover.split(',')

        // 2.获取商品信息
        this.goods = new Goods(data.article, ['销量 1500', '收藏33人', '默认快递'], [{"name": "退货补运费"},{"name": "全国包邮"},{"name": "7天无理由退货"},{"name": "72小时发货"}]);

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.article)
      })
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>
