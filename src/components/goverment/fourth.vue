<template>
  <div class='container'>
    <div class="noway"><li class="special"></li><span>合作信息</span></div>
    <hr>
    <div id='show'>
    <article>
      <img src="../../assets/sight.jpg" width=32% alt="">
      <li class='title'>第一次互联网合作</li>
      <li>互联网金融模块</li>
      <li style='padding-top:0.2rem;font-size:0.7rem'>tencent</li>
      <aside>
        <li style='float:left'>华东地区</li>
        <li style='float:right'>第三方资金合作</li>
      </aside>   
    </article>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (min-width : 400px) {
  img{
    width:30%;
  }
}
.container{
  padding:0.1rem 0;
  .noway{
  padding:0.3rem 0;
 .special{
  width:0.4rem;
  height:0.8rem;
  background:blue;
  float:left;
  margin:0.2rem 0.3rem 0 0.3rem;
  }
  span{
    font-size:0.7rem;
    font-weight:bold;
  }
}
}
#show{
  padding:0 0.5rem;
}
article{
  border:1px rgb(171, 171, 212) solid;
  padding:0.5rem;
  margin:1rem 0;
  box-shadow:5px 5px 5px grey;
  li{
    font-size:0.65rem;
    margin:0.2rem 0 0.2rem 0.2rem;
    color:#666666;
  }
  .title{
    font-size:0.7rem;
    margin:0.1rem 0 0.4rem 0;
    color:black;
  }
  aside{
    height:1rem;
  }
}
img{
  float:left;
  margin:-1rem 0.3rem 0 0;
}
</style>

