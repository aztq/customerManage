<template>
  <div class="container">
    <div class="noway"><li class="special"></li><span class="content">基本信息</span></div>
    <main v-for='(item,index) in list' :key=index>
    <hr>
      <el-form label-width="90px">
      <el-form-item :label=item.key>
        <el-input v-model=item.value></el-input>
      </el-form-item>
      </el-form>
    </main>
    <x-button style='width:90%;background:rgb(100,100,240);color:white;'>保存</x-button>
    <x-button type="warn" style='width:90%'>删除客户</x-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
        list:[
          {key:'管理类型',value:''},
          {key:'社会信用代码',value:''},
          {key:'所在地',value:''},
          {key:'注册地',value:''},
          {key:'客户地址',value:''},
          {key:'注册地址',value:''},
          {key:'注册资金',value:''},
          {key:'注册时间',value:''},
          {key:'法人姓名',value:''},
          {key:'行业',value:''},
          {key:'主营业务',value:''},
          {key:'电话号码',value:''},
          {key:'网站',value:''},
          {key:'邮箱',value:''},
          {key:'下辖或参股保险公司',value:''},
          {key:'保险经纪公司情况',value:''},
          {key:'外部信用评级',value:''},
        ],
    }
  }
}
</script>
<style lang="less" scoped>
main{
  background:white;
  .el-form-item{
    margin-bottom:0;
  }
}
button{
    margin-top:2rem;
    margin-bottom:1rem;
}
</style>
<style>
.el-form-item__label{
    text-align:center !important;    
}
.el-input__inner{
  border:0px;
}
.el-form-item__label{
  font-size:0.65rem;
  text-align:center;
  padding:0.6rem 0 0 0 !important;
  line-height:1rem;
  color:grey;
}
</style>
