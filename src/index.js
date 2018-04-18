import Vue from 'vue'
// import App from './App.vue'
import App from './child2.jsx'
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