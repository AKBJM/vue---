<template>
  <transition name="fade">
    <div class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>          
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>            
          <ul v-if="seller.supports" class="supports">
            <li v-for="(item, index) in seller.supports" class="support-item" :key="index">
              <span class="icon" :class="classMap[index]"></span>
              <span class="text">{{ item.description }}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>           
          <div class="bulletin">              
              <p class="content">{{ seller.bulletin }}</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close" @click="hide"></i>
      </div>
    </div>
  </transition>
</template>
<script>
  import Star from 'components/star/star.vue'

  export default {
    props: {
      seller: {
        type: Object
      },
      classMap: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      hide () {
        this.$emit('hide')
      }
    },
    components: {
      Star
    }
  }
</script>
<style lang="stylus">
  @import '../../common/stylus/mixin'

  .detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    opacity: 1  
    backdrop-filter: blur(10px)
    background: rgba(7, 17, 27, 0.8)
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity: 0
    .detail-wrapper
      min-height: 100%
      width: 100%
      .detail-main
        margin-top: 64px
        padding-bottom: 64px
        .name
          line-height: 16px
          text-align: center
          font-size: 16px
          font-weight: 700
        .star-wrapper
          margin-top: 18px
          padding: 2px 0
          text-align: center
        .title
          display: flex
          width: 80%
          margin: 28px auto 24px auto 
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding: 0 12px
            font-size: 14px 
            font-weight: 700
        .supports
          width: 80%
          margin: 0 auto
          .support-item
            padding: 0 12px
            margin-bottom: 12px
            font-size: 0
            &:last-child
              margin-bottom: 0
            .icon
              display: inline-block
              width: 16px
              height 16px
              vertical-align: top
              margin-right: 6px
              background-size: 16px 16px
              background-repeat: no-repeat
              &.decrease
                bg-image('decrease_2')
              &.discount
                bg-image('discount_2')
              &.guarantee
                bg-image('guarantee_2')
              &.invoice
                bg-image('invoice_2')
              &.special
                bg-image('special_2')
            .text
              line-height: 16px
              font-size: 12px
        .bulletin
          width: 80%
          margin: 0 auto
          .content
            padding: 0 12px
            line-height: 24px
            font-sze: 12px
            text-align: justify
    .detail-close
      width: 32px
      height: 32px
      margin: -64px auto 0 auto
      font-size: 32px
</style>
