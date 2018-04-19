<template>
  <div>
    <mplayer 
      ref="mplayer"
      :url="url"
      :autoplay="autoplay"
      :paused="paused"
      :volume="volume"
      @timeupdate="timeupdate"
    />
    <input type="range" v-model="volume" ref="volume">
    <button ref="playPause" @click="playPause">播放</button>
    <span class="timer">{{ currentTime  }} / {{ duration }}</span>
  </div>
</template>
<script>
import { MUSIC_LIST } from './data/Musiclist.js'
// import Mplayer  from './Mplayer.vue'
import Mplayer  from './../dist/Mplayer.js'
export default {
  data(){
    return {
      url : MUSIC_LIST[0].file,
      volume:80,
      autoplay:false,
      currentTime:0,
      duration:0,
      paused:true
    }
  },
  components:{
    Mplayer
  },
  methods:{
    playPause(){
      // this.$refs.mplayer.playPause()
      this.paused = !this.paused
      this.$refs.playPause.textContent = this.paused? '播放':'暂停'
    },
    timeupdate(currentTime,duration){
      this.currentTime = currentTime
      this.duration = duration
    }
  }
}
</script>

