<template>
  <div class='view'>
    <div class='noway'><li class="special"></li>
      <span class='content'>基本信息</span>
    </div>
    <table v-for='(item,index) in value1' :key=index>
      <tr>
        <td class='left'>{{item.key}}</td>
        <td class='right'>{{item.value}}</td>
      </tr>
    </table>

    <div class="decorate"></div>

    <div class="noway"><li class="special"></li>
      <span class='content'>联系方式</span>
    </div>
    <table v-for='(i,index) in value2' :key=index>
      <tr>
        <td class='left'>{{i.key}}</td>
        <td class='right'>{{i.value}}</td>
      </tr>
    </table>
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
        value2:[
          {key:'联系电话',value:'--'},
          {key:'邮箱',value:'--'},
          {key:'传真',value:'--'},
          {key:'客户地址',value:'--'},
          {key:'邮编',value:'--'}
        ]
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (min-width : 360px) {
  .decorate{
    margin:0.3rem 0 0.2rem 0 !important;
  }
}
.view{
  margin-bottom:3rem;
}
div{
  background:white;
}
table{
  tr{
    border-top:1px rgb(238, 209, 209) solid;
    padding:0.5rem;
  }
  .left{
    width:6rem;
    padding:0.5rem 0;
    font-size:0.65rem;
    opacity: 0.8;
    text-align:center;
    color:grey;
  }
  .right{
    padding:0 0 0 0.9rem;
    font-size:0.65rem;
    width:73%;
  }
}
.decorate{
  height:10px;
  background:rgb(218, 218, 236);
  margin:0.3rem 0;
}
</style>

