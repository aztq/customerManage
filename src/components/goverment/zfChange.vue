<template>
  <div class='container'>
    <header>
      <table>
        <tr>
          <td class='left'>企业名称</td>
          <td>上海市投资建设局</td>
        </tr>
        <tr>
          <td class='left'>企业类型</td>
          <td>政府企业</td>
        </tr>
        <tr>
          <td class='left'>所属一级客户</td>
          <td>上海市人民政府</td>
        </tr>
      </table>
    </header>
    <div class="sun">
     <div class="noway"><li class="special"></li><span class="content">基本信息</span></div>
     <main>
      <hr>
      <el-form label-width="90px">
      <el-form-item label='政府名称'>
        <el-input v-model=value1></el-input>
      </el-form-item>
      </el-form>
      <hr>
      <el-form label-width="90px">
      <el-form-item label='是否一级客户'>
        <button @click='change1()' :class="{choose:choice===true}">是</button>
        <button @click='change2()' :class="{choose:choice===false}">否</button>
      </el-form-item>
      </el-form>
      <hr>
      <el-form label-width="90px">
      <el-form-item label='所属一级客户'>
        <el-input v-model=value2></el-input>
      </el-form-item>
      </el-form>
      <hr>
      <el-form label-width="90px">
      <el-form-item label='管理类型'>
        <el-input v-model=value3></el-input>
      </el-form-item>
      </el-form>
      <hr>
      <el-form label-width="90px">
      <el-form-item label='所在地'>
        <el-input v-model=value4></el-input>
      </el-form-item>
      </el-form>
      <hr>
      <el-form label-width="90px">
      <el-form-item label='客户地址'>
        <el-input v-model=value5></el-input>
      </el-form-item>
      </el-form>
      <hr>
      <el-form label-width="90px">
      <el-form-item label='电话号码'>
        <el-input v-model=value6></el-input>
      </el-form-item>
      </el-form>
      <hr>
      <el-form label-width="90px">
      <el-form-item label='网站'>
        <el-input v-model=value7></el-input>
      </el-form-item>
      </el-form>
     </main>
     <x-button class='lastBtn1'>保存</x-button>
     <x-button class='lastBtn2' type="warn">删除客户</x-button>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { XButton } from 'vux'
export default {
  components: {
    XButton,
  },
  data(){
    return{
        value:[
          {key:'政府名称',value:'上海市人民政府'},
          {key:'是否一级客户',value:'--'},
          {key:'所属一级客户',value:'上海市人民政府'},
          {key:'管理类型',value:'--'},
          {key:'联系电话',value:'--'}
        ],
        value1:'dsds',
        value2:'dsds',
        value3:'dsds',
        value4:'dsds', 
        value5:'dsds',
        value6:'dsds',
        value7:'dsds',      
        choice:true
    }
  },
  methods:{
    change1(){
      this.choice=true;
    },
    change2(){
      this.choice=false;
    }
  }
}
</script>
<style lang="less" scoped>
header {
  background:rgb(97, 86, 97);
  padding:0.3rem;
  color:white;
  table{
    .left{
      width:5rem;
      margin:0.5rem 0;
    }
    td{
      font-size:0.65rem;
      padding:0.2rem;
    }
  }
}
.container{
  background:rgb(136, 131, 131);
  .sun{
   background:white;  

  }
}

main{
  .el-form-item{
    margin-bottom:0;
  }
  button{
  padding:0.1rem 1.3rem;
  background:white;
  border-radius:5px;
  font-size:0.65rem;
  margin-left:0.8rem;
  border:1px rgb(199, 186, 186) solid;
  }
  .choose{
  background:rgb(111, 111, 228);
  color:white;
  }
}
.lastBtn1{
  margin-top:4rem;
  background:rgb(103, 103, 236);
  letter-spacing:0.2rem;
  width:85%;
  color:white;
}
.lastBtn2{
  width:85%;
}
</style>

<style>
.el-input__inner{
  border:0px;
}
.el-form-item__label{
  font-size:0.65rem;
  text-align:center;
  height:1rem;
  padding:0;
}
</style>
