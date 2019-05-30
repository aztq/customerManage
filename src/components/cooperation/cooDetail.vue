<template>
<div id='container'>
  <article>
      <h5>第一次互联网合作</h5>
      <img class='img1' src="../../assets/公司.png" width=6%>
      <li style='margin-left:1rem;margin-top:0.3rem;'>互联网金融模块</li>
      <el-row>
        <el-col :span="12"><li><img src='../../assets/weizhi.png' width=9%>华南区域</li></el-col>
        <el-col :span="12"><li><img src='../../assets/投资.png' width=9%>直接股权投资</li></el-col>
      </el-row>


  </article>
  <div class="decorate"></div>
  <div>
    <div class="noway"><li class="special"></li><span class="content">基本信息</span></div>
    <table class='next' v-for='(item,index) in list' :key=index>
      <tr>
        <td class='left'>{{item.key}}</td>
        <td class='right'>{{item.value}}</td>
      </tr>
    </table>
  </div>
  <div class="decorate"></div>
  <div class="sun">
    <div class="noway"><li class="special"></li><span class="content">其它信息</span></div>
    <table class='next' v-for='(item,index) in part' :key=index>
      <tr>
        <td class='left'>{{item.key}}</td>
        <td class='right'>{{item.value}}</td>
      </tr>
    </table>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
        list:[
          {key:'合作规模',value:'13，00000000'},
          {key:'合作模块',value:'第三方资金合作'},
          {key:'所属机构',value:'养老养生投资部'},
          {key:'是否签署合作协议',value:'是'}],
        part:[
          {key:'客户累计投资规模',value:'example'},
          {key:'实际再管投资规模',value:'example'},
          {key:'客户已投资规模',value:'example'},
          {key:'保险业务联动情况',value:'example'},
          {key:'广发业务联动情况',value:'example'},
          {key:'备注',value:'example'},
        ],
        choice:true
    }
  }
}
</script>
<style lang="less" scoped>
article{
  background:white;
  padding:0.4rem 0.4rem 0.1rem 0.4rem ;
  font-size:0.7rem;
  .img1{
    float:left;
    margin-top:-0.05rem;
  } 
  .el-row{
    li{
      font-size:0.7rem;
      clear:both;
    }
    img{
      margin-right:0.2rem;
      float:left;
      margin-top:0.05rem;
      margin-left:0.15rem;
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
#container{
  background:white;
}
.next{
  tr{
    border-top:1px rgb(223, 189, 189) solid;
    font-size:0.6rem;
  }
  .left{
    width:5rem;
    opacity: 0.5;
    padding:0.5rem 0.2rem;
    text-align:center;
  }
  .right{
    width:14rem;
    font-size:0.7rem;
    padding:0.3rem;
  }
}
td{
  font-size:center;
  button{
    padding:0.2rem 1.5rem;
    border:1px grey solid;
    border-radius:10px;
    font-size:0.6rem;
  }
}
.decorate{
  height:0.5rem;
  background:rgb(218, 218, 226);
  margin-bottom:0.1rem;
  margin-top:0.2rem;
}
</style>

