<template>
  <div>
    vue component
    {{ msg }}
  </div>
</template>
<script>
import './style/comm.scss'
export default {
  name:'App',
  data(){
    return{
      msg:123
    }
  }
}
</script>
<style lang="scss">
div{
  color:red;
  background: #ccc;
  width: 100px;
}
</style>
