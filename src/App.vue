<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <tab></tab>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Header from 'components/header/header.vue'
import Tab from 'components/tab/tab'
import { urlParse } from '@/common/js/util'
import { ERR_OK } from '@/common/js/config'

//方便理解和维护 定义一个常量ERR_OK

export default {
  data () {
    return {
      // 设置商家的一些特有的属性，比如id 为收藏做准备
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    // 获取商家的信息
    this.$http.get('/api/seller?id' + this.seller.id).then((response) => {
      let res = response.body;
      if(res.errno === ERR_OK) {
        // 合并商家的信息
        this.seller = Object.assign({}, this.seller, res.data)
      }
    })
  },
  components: {
    "v-header": Header,
    Tab
  }
}
</script>
<style lang="stylus" scoped>
</style>
