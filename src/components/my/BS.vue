<template>
  <div>
    <span class='title'>今天（2018-03-01）</span>
    <article>
      <span><li style='float:left;margin-right:1rem'>2018-03-01</li><li style='float:left'>12:00</li></span><br><br>
      <span>您的客户上<span class='special'>XXXX</span>的商机</span>
    </article>
    <span class='title'>今天（2018-03-01）</span>
    <article>
      <span><li style='float:left;margin-right:1rem'>2018-03-01</li><li style='float:left'>12:00</li></span><br><br>
      <span>您的客户上<span class='special'>XXXX</span>的商机</span>
    </article>
    <span class='title'>今天（2018-03-01）</span>
    <article>
      <span><li style='float:left;margin-right:1rem'>2018-03-01</li><li style='float:left'>12:00</li></span><br><br>
      <span>您的客户上<span class='special'>XXXX</span>的商机</span>
    </article>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
article{
  border:1px white solid;
  border-radius:10px;
  background:#efefef;
  font-size:0.7rem;
  padding:0.5rem;
  margin:0.3rem 0;
  span{
    font-size:0.6rem;
    letter-spacing:1px;
    li{
      padding:0.1rem 0;
    }
    .special{
      color:blue;
    }
  }
}
div{
  background:white;
  height:100%;
  padding:0.2rem;
  min-height:100vh;
}
.title{
  font-weight:bold;
  font-size:0.7rem;
}

</style>
