<template>
  <span>
    <div v-img="url" v-for="url in urls" :key="url"></div>
  </span>
</template>
<script>
// import Vue from "vue";
// Vue.directive("img", {
//   inserted(el, binding) {
//     let color = Math.floor(Math.random() * 1000000);
//     el.style.backgroundColor = color;
//   }
// });
export default {
  directives: {
    img: {
      inserted(el, binding) {
        let color = Math.floor(Math.random() * 1000000);
        console.log(color);
        el.style.backgroundColor = '#' + color;
        let img = new Image()
        img.src = binding.value
        img.onload = () => {
          setTimeout(()=>{
            el.style.backgroundImage = `url(${img.src})`
          },3000)
          
        }
      }
    }
  },
  data() {
    return {
      urls: [
        "http://d.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938e81944c7d0628535e5dd6f8a.jpg",
        "http://e.hiphotos.baidu.com/image/pic/item/203fb80e7bec54e7daacbd1ebb389b504fc26a6a.jpg",
        "http://e.hiphotos.baidu.com/image/pic/item/e850352ac65c1038cf7938c4b0119313b07e89b5.jpg"
      ]
    };
  }
};
</script>
<style>
div {
  float: left;
  width: 600px;
  height: 500px;
  /* background: #ccc; */
  background-size: cover;
}
</style>