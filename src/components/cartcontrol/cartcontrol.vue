<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0" @click.stop.prevent="decreasecount"></div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{ food.count }}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCount"></div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    props: {
      food: {
        type: Object
      }
    },
    created () {      
    },
    methods: {
      addCount () {
        if(!this.food.count) {
          Vue.set(this.food, 'count', 1)
        }
        else {
          this.food.count++
        }
        this.$emit('cart-add', event.target)
      },
      decreasecount () {
        if(this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script> 
<style lang="stylus" scoped>
  .cartcontrol
    font-size: 0
    .cart-decrease, .cart-count, .cart-add
      display: inline-block
    .cart-decrease, .cart-add
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .cart-count
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 12px
      color: rgb(147, 153, 159)
    .cart-decrease      
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-to
        opacity: 0
        transform: translate3d(24px, 0, 0) rotate(180deg)
</style>