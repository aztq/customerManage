<template>
<div>
  <div class="decorate"></div>
  <div class="sun">
    <div class="noway"><li class="special"></li><span class="content">基本信息</span></div>
    <main v-for='(item,index) in list' :key=index>
      <hr>
      <el-form label-width="90px" style='font-size:0.7rem !important;'>
      <el-form-item :label=item.key>
        <el-input v-model=item.value></el-input>
      </el-form-item>
      </el-form>
    </main>
  </div>
  <div class="decorate"></div>
  <div class="sun">
    <div class="noway"><li class="special"></li><span class="content">其它信息</span></div>
    <main v-for='(item,index) in part' :key=index>
      <hr>
      <el-form label-width="90px">
      <el-form-item :label=item.key>
        <el-input v-model=item.value></el-input>
      </el-form-item>
      </el-form>
    </main>
  <x-button style='letter-spacing:0.5rem;color:white;margin-top:2rem;width:85%;background:#007bff;font-size:0.75rem'>保存</x-button>
  <x-button style='letter-spacing:0.1rem;color:white;margin-top:1rem;width:85%;background:#e22500;font-size:0.75rem'>删除合作</x-button>
  </div>
  
</div>
</template>
<script>
export default {
  data(){
    return{
        list:[
          {key:'合作名称',value:''},
          {key:'客户名称',value:''},
          {key:'合作地域',value:''},
          {key:'合作类型',value:''},
          {key:'合作规模',value:''},
          {key:'合作板块',value:''},
          {key:'所属机构',value:''},
          {key:'是否签署合作协议',value:''}],
        part:[
          {key:'客户累计投资规模',value:''},
          {key:'实际再管投资规模',value:''},
          {key:'客户已投资规模',value:''},
          {key:'保险业务联动情况',value:''},
          {key:'广发业务联动情况',value:''},
          {key:'备注',value:''},
        ],
        choice:true
    }
  }
}
</script>
<style lang="less" scoped>
main{
  .el-form-item{
    margin-bottom:0;
  }
}
.sun{
  background:white;
}
.decorate{
  height:0.5rem;
  margin-bottom:0.1rem;
}
</style>

<style>
.el-input__inner{
  border:0px !important;
}
.el-form-item__label{
  font-size:0.6rem;
  text-align:center;
  line-height:1rem;
  padding:0.45rem 0;
  color:grey;
}
</style>

