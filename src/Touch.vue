<template>
  <div>
    <div v-tap="tapHandler" v-swipeleft="swipeleftHandler">
      测试区域
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Hammer from 'hammerjs'
Vue.directive('tap',{
  bind(el, binding){
    const hammer = new Hammer(el)
    hammer.on("tap", binding.value)
  }
})

/* const hammer = new Hammer(dom)
hammer.on('tap',fn) */

Vue.directive('swipeleft',{
  bind(el, binding){
    const hammer = new Hammer(el)
    hammer.on("swipeleft", binding.value)
  }
})
export default{
  name:'Touch',
  methods:{
    tapHandler(){
      console.log("刚才触发了tap")
    },
    swipeleftHandler(s){
      console.log(`向左滑动：X偏移量：${s.deltaX}, Y偏移量：${s.deltaY}`)
    }
  }
}
</script>
<style>
div{
  width: 600px;
  height: 300px;
  background: #ccc;
}
</style>


