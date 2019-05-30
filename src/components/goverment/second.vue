<template>
  <div class="hello">
    <div class="noway"><li class="special"></li>
      <span style='font-weight:bold;font-size:0.7rem;'>下属信息</span>
    </div>
    <hr>
    <div class="contain" v-for='(item,index) in list' :key=item.id>
      <div class="sub">
      <div class="top">
        <h2>{{item.name}}</h2>
        <li>所属一级客户：{{item.type}}</li>
        <br>
        <span class='first'>中央总部</span>
        <span class='second'>汽车制造</span>
      </div>
      
      <hr>

      <div class="bottom"><img src="../../assets/weizhi.png" width=5%><span>{{item.where}}</span></div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {id:'1',name:'中国第一汽车集团有限公司',type:'上海市投资建设局',where:'上海市闵行区'},
        {id:'2',name:'中国第一汽车',type:'上海市投资建设局',where:'上海市闵行区'},
        {id:'3',name:'中国第一汽车',type:'上海市投资建设局',where:'上海市闵行区'},
        {id:'4',name:'中国第一汽车',type:'上海市投资建设局',where:'上海市闵行区'}
      ]

    }
  }
}
</script>

<style lang='less' scoped>
.contain{
  padding:0.5rem;
  .noway{
    padding-top:0.3rem;
    .special{
      width:0.4rem;
      height:0.8rem;
      background:rgb(100, 100, 226);
      float:left;
      margin:0.2rem 0.3rem 0 0.3rem;
    }
  }
  hr{
    width:99%;
    margin:0.3rem 0.1rem 0 0.1rem;
  }
  .sub{
    background:white;
    border:1px rgb(186, 186, 206) solid;
    border-radius:5px;
    h2{
      margin:0.3rem 0;
    }
  }
  .top{
    padding:0.1rem 0.2rem;
    h2{
      font-size:0.7rem;
      margin-left:0.1rem;
    }
    span{
      font-size:0.65rem;
      margin:0 0.1rem 0.1rem 0.2rem;
      border-radius:2px;
      padding:0.1rem 0.2rem;
    }
    .first{
      color:rgb(99, 99, 223);
      border:1px rgb(122, 122, 233) solid;
      border-radius:5px;
    }
    .second{
      color:red;
      border:1px red solid;
      border-radius:5px;
    }
    li{
      float:left;
      font-size:0.65rem;
      color:grey;
      margin:0.1rem;
    }
  }
}
.bottom{
  padding:0.2rem;
 span{
  font-size:0.65rem;
  padding:0.1rem;
  }
  img{
    float:left;
    margin-top:0.2rem;
  }
} 
</style>
