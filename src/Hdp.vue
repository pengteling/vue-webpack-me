<template>
  <div class="swiper-container" ref="slider">
      <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div> -->
          <div v-for="slider in sliders" class="swiper-slide" :key="slider.id"><img :src="slider.img_url" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" ref="pagination"></div>      
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data(){
    return{
      sliders:[
        {
          id:1,
          img_url:require('./images/banner-1.jpg')
        },
        {
          id:2,
          img_url:require('./images/banner-2.jpg')
        },
        {
          id:3,
          img_url:require('./images/banner-3.jpg')
        }
      ]
    }
  },
  mounted(){
    new Swiper(this.$refs.slider,{
      // 如果需要分页器
      pagination: {
        el: this.$refs.pagination,
        clickable: true
      },
    })
  }
}
</script>
<style lang="scss">
@import '~swiper/dist/css/swiper.css';
.swiper-container{
  img{
    width: 7.5rem;
  }
}

</style>

