<template>
  <div>
    <header>
      <span>北京新能源合作</span>
      <li>商机类型：战略协议</li>
      <li style='float:left'>客户名称：北京能源集团</li>     
      <button>特急</button>
    </header>
    <div class="decorate"></div>
    <div class="noway"><li class="special"></li><span class="content">商机信息</span></div>
    <table>
      <tr v-for='(item,index) in value1' :key=index>
        <td class='left'>{{item.key}}</td>
        <td class='right'>{{item.value}}</td>
      </tr>
    </table>

    <div class="decorate"></div>

    <div class="noway"><li class="special"></li><span class="content">内部联系人</span></div>
    <table>
      <tr v-for='(i,index) in value2' :key=index>
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
          {key:'需求时间',value:'2018'},
          {key:'预期规模',value:'13,333,2333元'},
          {key:'商机所在地',value:'江浙沪'},
          {key:'商机描述',value:'啊多数地方上的'},
        ],
        value2:[
          {key:'姓名',value:'--'},
          {key:'联系方式',value:'--'},
          {key:'邮箱',value:'--'}
        ]
    }
  }
}
</script>

<style lang="less" scoped>
div{
  background:white;
}
header{
  padding:0.2rem 0.3rem 0 0.3rem;
  height:3.6rem;
  span{
    font-size: 0.75rem;
    font-weight:bold;
  }
  li{
    font-size: 0.65rem;
    color:grey;
    margin:0.2rem 0 0.2rem 0;
  }
  ul{
    font-size: 0.6rem;
  }
  button{
    padding:0.1rem 0.6rem;
    font-size:0.6rem;
    color:white;
    float:right;
    background:red;
    border:0;
  }
}
.decorate{
    height:10px;
    background:rgb(218, 218, 236);
    margin:0.1rem 0;
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
    font-size:0.7rem;
    width:73%;
  }
}
</style>


