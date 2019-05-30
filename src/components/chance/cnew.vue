<template>
<div>
  <div class='contain'>
    <div class="noway"><li class="special"></li><span class="content">商机信息</span></div>
    <main v-for='(item,index) in value' :key=index>
      <hr>
      <el-form label-width="90px">
      <el-form-item :label=item.key><badge text="*"></badge>
        <el-input v-model=item.value></el-input>
      </el-form-item>
      </el-form>
    </main>
  </div>
  <x-button>完成</x-button>
</div>
</template>

<script>
export default {
  data(){
    return{
        value:[
          {key:'商机名称',value:''},
          {key:'商机类型',value:''},
          {key:'客户名称',value:''},
          {key:'需求时间',value:''},
          {key:'预期规模',value:''},
          {key:'商机所在地',value:''},
          {key:'紧急程度',value:''},
          {key:'内部联系人',value:''},
          {key:'商机描述',value:''},
        ]
    }
  }
}
</script>

<style lang="less" scoped>
.contain{
  background:white;
}
button{
  width:90% !important;
  background:#00a0d9;
  margin-top:3rem; 
  margin-bottom:1rem;
  color:white;
  letter-spacing:0.5rem;
}
main{
  background:white;
    span{
      background:white;
      color:red;
      font-size:0.7rem;
      margin:0 0.5rem 0 -1rem;
    }
    .el-form-item{
      margin-bottom:0;
      
      .el-input{
        width:90% !important;
        margin:-0.4rem 0 0 0.5rem;
      }
    } 
}
</style>

<style>
.el-input__inner{
  border:0px;
  font-size:0.6rem !important;
}
.el-form-item__label{
  font-size:0.6rem !important;
  text-align:center;
}
</style>



