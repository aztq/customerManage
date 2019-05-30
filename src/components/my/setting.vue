<template>
  <div class="container">
    <div class="decorate"></div>
     <group>
      <x-input title="字体大小" value="中" text-align='right' disabled></x-input>
      <x-input title="主题切换" value="乳牙白" text-align='right' disabled></x-input>
      <cell title="清楚缓存" value="0.0k" is-link value-align="right"></cell>
    </group>
    <group>
      <x-input title="版本更新" value="最新版本V1.68" text-align='right' is-link disabled></x-input>
      <x-input title="操作手册" value="" text-align='right' disabled is-link></x-input>
      <cell title="Cell" value="" is-link value-align="right"></cell>
    </group>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.container{
  .decorate{
    height:0.1rem;
  }
  background:rgb(185, 178, 178);
  height:100%;
}
</style>
