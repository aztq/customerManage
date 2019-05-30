<template>
  <div class='container'>
    <div>
     <article>
      <img class='img1' src="../../assets/sight.jpg" width=28% alt="">
      <li class='li1'>第一次互联网合作</li>
      <li class='li2'>互联网金融模块</li>
      <li class='li3'>tencent</li>
      <aside>
        <img class='location' src="../../assets/weizhi.png" width=5% alt="">
        <li style='float:left;margin-left:1rem;margin-top:0.2rem;'>华东地区</li>
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
        value1:[
          {key:'政府名称',value:'上海市人民政府'},
          {key:'所属一级客户',value:'上海市人民政府'},
          {key:'统一社会信用代码',value:'1211000079210056X1'},
          {key:'管理类型',value:'省属企业'},
          {key:'所在地域',value:'北京市北京市辖区'},
          {key:'网站',value:'www.example.com'},
        ],
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  padding:0.1rem 0.5rem;
  min-height:100vh;
  span{
    font-size:18px;
    margin:0 0 1rem 0 !important;
  }
}
article{
  border:1px rgb(171, 171, 212) solid;
  margin:1rem 0;
  padding:0.2rem;
  box-shadow:2px 2px 5px grey;
  .img1{
    float:left;
    margin-top:-0.6rem;
    margin-right:0.2rem;
  }
  .li1{
    font-size:0.9rem;
    margin-top:0.2rem;
  }
  .li2{
    font-size:0.75rem;
    margin-top:0.3rem;
  }
  .li3{
    font-size:0.7rem;
    margin-top:0.35rem;
    margin-bottom:0.1rem;
  }  
}
aside{
  height:1rem;
  li{
    font-size:0.6rem;
  }
  .location{
    position:relative;
    left:-3.5rem;
  }
}
</style>

