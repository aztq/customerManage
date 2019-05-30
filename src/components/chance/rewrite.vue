<template>
  <div>
    <div class="noway"><li class="special"></li><span class="content">商机信息</span></div>
    <main v-for='(item,index) in value' :key=index>
      <hr>
      <el-form label-width="90px">
      <el-form-item :label=item.key><badge text="*"></badge>
        <el-input v-model=item.value></el-input>
      </el-form-item>
      </el-form>
    </main>
    <x-button class='another'>保存</x-button>
    <x-button style='background:#e22500' type="warn">删除商机</x-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
        value:[
          {key:'商机名称',value:'sdfsdfs'},
          {key:'商机类型',value:'fddgfd'},
          {key:'客户名称',value:'dfgdfg'},
          {key:'需求时间',value:'dfgdfg'},
          {key:'预期规模',value:'dfgdfg'},
          {key:'商机所在地',value:'dfgdfg'},
          {key:'紧急程度',value:'dfgdf'},
          {key:'内部联系人',value:'dfgdf'},
          {key:'商机描述',value:'dfgdgf'},
        ]
    }
  }
}
</script>

<style lang="less" scoped>
main{
  background:white;
    span{
      background:white;
      color:red;
      font-size:0.7rem;
      margin:0.6rem 1rem 0 -1.2rem;
      position:absolute;
    }
    .el-form-item{
      margin-bottom:0;
      
      .el-input{
        width:90% !important;
        margin:-0.4rem 0 0 0.5rem;
      }
    } 
}
button{
  width:90% !important;
  font-size:0.75rem;
}
.another{
  margin-top:2rem;
  background:#007bff;
  letter-spacing:0.1rem;
  color:white;
}
</style>
<style>
.el-input__inner{
  border:0px;
}
.el-form-item__label{
  font-size:0.6rem !important;
  text-align:center;
}
</style>


