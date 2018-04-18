<template>
  <div>
    <input type="text" v-model="data1">
    <div v-check="data1"></div>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.directive('check',{
  bind(el,binding){
    if(isNaN(binding.value) || binding.value==''){
      el.textContent = '请输入数字'
    }else{
      el.textContent = 'ok'
    }
  },
  update(el,binding,vnode,oldVnode){
    if(isNaN(binding.value) || binding.value==''){
      el.textContent = '请输入数字'
    }else{
      el.textContent = 'ok'
    }
  }
})
export default {
  data(){
    return {
      data1:''
    }
  }

}
</script>
