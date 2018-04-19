import Vue from 'vue'
import App from './Hdp.vue'
// import App from './child2.jsx'
// import App from './directive.vue'
// import App from './Touch.vue'
// import App from './lazyImage.vue'
const flexible = ()=>{
  let html = document.getElementsByTagName('html')[0]
  let pageWidth = html.getBoundingClientRect().width
  html.style.fontSize = pageWidth / 750 * 625 + "%"
}
new Vue({
  el:'#app',
  data:{
    msg:'hi,vue'
  },
  components:{
    App
  },
  render: h=>h(App),
  created(){
    flexible()
    window.resize = ()=>{
      flexible()
    }
  }
})