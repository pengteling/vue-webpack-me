import Vue from 'vue'
// import App from './App.vue'
// import App from './child2.jsx'
// import App from './directive.vue'
// import App from './Touch.vue'
import App from './lazyImage.vue'
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