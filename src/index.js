import Vue from 'vue'
import App from './App.vue'
new Vue({
  el:'#app',
  data:{
    msg:'hi,vue'
  },
  components:{
    App
  },
  render: h=>h(App)
})