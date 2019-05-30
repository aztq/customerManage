<template>
<div class='container'>
      <article>
      <h5>第一次互联网合作</h5>
      <li style='margin:0.4rem 0;'>投资业务合作</li>
      <img class='img1' src="../../assets/公司.png" width=6%>     
      <li style='margin-left:1rem;'>互联网金融模块</li>
      <el-row>
        <el-col :span="10"><li><img src='../../assets/weizhi.png' width=8%>华南区域</li></el-col>
        <el-col :span="10"><li><img src='../../assets/投资.png' width=8%>华南区域</li></el-col>
        <el-col :span="4"><li><img src='../../assets/star.png' width=40%></li></el-col>
      </el-row>
</article>

    <article>
      <h5>第一次互联网合作</h5>
      <li style='margin:0.4rem 0;'>投资业务合作</li>
      <img class='img1' src="../../assets/公司.png" width=6%>
      <li style='margin-left:1rem;'>互联网金融模块</li>
      <el-row>
        <el-col :span="12"><li><img src='../../assets/weizhi.png' width=8%>华南区域</li></el-col>
        <el-col :span="12"><li><img src='../../assets/weizhi.png' width=8%>华南区域</li></el-col>
      </el-row>
</article>
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
.container{
  padding:0.3rem 0.5rem;
  background:rgb(243, 227, 227);
  span{
    font-size:18px;
    margin:0 0 1rem 0 !important;
  }
}
article{
  background:white;
  padding:0.4rem 0.4rem 0.1rem 0.4rem ;
  margin-bottom:0.5rem;
  font-size:0.7rem;
  .img1{
    float:left;
    margin-top:-0.2rem;
  } 
  .el-row{
    li{
      font-size:0.7rem;
    }
    img{
      margin-right:0.1rem;
    }
  }
  
  h5{
    margin:0.1rem 0 0.3rem 0;
  }
  li{
    margin:0.2rem 0 0.3rem 0;
    color:grey;

  }
}
</style>

