<template>
  <div>
    <div class="noway"><li class="special"></li><span>商机信息</span></div>
    <hr>
    <div class='show'>
      <aside class="right">
        <h4>融资</h4>
        <span><li style='color:#666666;margin:0.4rem 0 0 0'>安徽汽车公司</li>
         <x-button mini style='float:right;color:white;'>特急</x-button>
        </span><br><br>
        <span><li style='color:#666666;'>所在地</li><li style='margin:0 0 0 1rem'>四川-成都</li>
         <li style='float:right;margin:0 0.3rem 0 0'>2018-1-1</li></span>
      </aside>
      <aside class="left">
        <span>商机类型</span>
      </aside>
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
.noway{
  padding:0.3rem 0;
 .special{
  width:0.5rem;
  height:0.8rem;
  background:blue;
  float:left;
  margin:0.2rem 0.3rem 0 0.3rem;
  }
  span{
    font-size:0.8rem;
    font-weight:bold;
  }
}
.show{
  height:90px !important;
  background:rgb(156, 153, 153);
  overflow:hidden;
}
.left{
  width:6%;
  padding:0.5rem 0.5rem 0.5rem 0.8rem;;
  position:fixed;
  font-size:0.75rem;
  height:70px;
  color:white;
}
.right{
  float:left;
  width:85%;
  margin:0 0 0 2rem;
  border:1px grey solid;
  border-radius:10px 0 0 10px;
  padding:0.4rem 1rem 0 0.5rem;
  font-size:0.7rem;
  height:80px;
  background:white;
  button{
    background:rgb(241, 90, 90);
    font-size:0.6rem;
    margin-right:0.3rem;
    border-radius:0px;
  }
  li{
    float:left;
  }
}
hr{
  margin:0.1rem 0 0.5rem 0;
}

</style>

