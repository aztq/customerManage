<template>
  <div class="container">
    <div class="sun">
    <div class="noway"><li class="special"></li><span class="content">基本信息</span></div>
    <table class='next' v-for='(item,index) in list' :key=index>
      <tr>
        <td class='left'>{{item.key}}</td>
        <td class='right'>{{item.value}}</td>
      </tr>
    </table>
  </div>
    <div class="decorate"></div>
    <div class="noway"><li class="special"></li>
      <span class='content'>审批意见</span>
    </div>
    <x-textarea placeholder='输入审批意见'></x-textarea>
    <x-button class='judge' type="default" style='background:rgb(10, 121, 241);color:white;'>审批通过</x-button>
    <x-button class='judge' type="warn">审批驳回</x-button>
  </div>
</template>
<script>
import { XTextarea } from 'vux'
export default {
   components: {
    XTextarea
  },
  data(){
    return{
        list:[
          {key:'管理类型',value:'asda'},
          {key:'社会信用代码',value:''},
          {key:'所在地',value:'asda'},
          {key:'注册地',value:'asda'},
          {key:'客户地址',value:'asdas'},
          {key:'注册地址',value:'asda'},
          {key:'注册资金',value:''},
          {key:'注册时间',value:''},
          {key:'法人姓名',value:'adad'},
          {key:'行业',value:''},
          {key:'主营业务',value:''},
          {key:'电话号码',value:'asda'},
          {key:'网站',value:'adsa'},
          {key:'邮箱',value:'asda'},
          {key:'下辖或参股保险公司',value:'asd'},
          {key:'保险经纪公司情况',value:''},
          {key:'外部信用评级',value:''},
        ],
    }
  },
  methods:{
  }
}
</script>
<style lang="less" scoped>
.container{
  background:white;
  padding-top:0.2rem; 
  padding-bottom:1rem; 
}
.next{
  tr{
    border-top:1px rgb(223, 189, 189) solid;
    font-size:0.6rem;
  }
  .left{
    width:5.5rem;
    opacity: 0.5;
    padding:0.5rem;
    text-align:center;
  }
  .right{
    width:14rem;
    font-size:0.7rem;
    padding:0.3rem;
  }
}
.judge{
  width:90%;
}
.decorate{
  height:10px;
  background:rgb(218, 218, 236);
  margin:0.1rem 0;
}
</style>
<style>
.weui-textarea{
  font-size:0.75rem !important;
}
.weui-grids{
  background:white;
}
.weui-grid__label{
  font-size:0.6rem !important;
  overflow:visible !important;
}
</style>
