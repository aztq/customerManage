<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import './assets/reset.css';
body{
  width:100%;
  height:100%;
  background:#f3f3f3;
}
.noway{
  padding:0.2rem 0 0.4rem 0;
  background:white;
 .special{
  width:0.4rem;
  height:0.8rem;
  background:#007bff;
  float:left;
  margin:0.25rem 0.3rem 0 0.3rem;
  }
  .content{
    font-size:0.7rem;
    font-weight:bold;
  }
}
</style>
