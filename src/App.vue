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
import header from './components/header/header.vue'
import Tab from './components/tab/tab'
import { urlParse } from './common/js/util'

//方便理解和维护 定义一个常量ERR_OK
const ERR_OK = 0

export default {
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    this.$http.get('/api/seller?id' + this.seller.id).then((response) => {
      let res = response.body;
      if(res.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, res.data)
      }
    })
  },
  components: {
    "v-header": header,
    Tab
  }
}
</script>
<style lang="stylus" scoped>
</style>
