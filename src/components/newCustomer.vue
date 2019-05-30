<template>
  <div class="container">
    <div class="noway"><li class="special"></li><span class="content">客户类型</span></div>
    <hr>
    <div class="root">
      <label for="">客户类型</label>
      <el-select v-model="value" placeholder="请选择"  @change='choose(value)'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value" @click="fun(value)">
        </el-option>
      </el-select>
    </div>
    <div class="one" v-show='content==="政府客户"'>
     <div class="decorate"></div>
     <div class="noway"><li class="special"></li><span class="content">客户信息</span></div>
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
    </div>

    <div class="one" v-show='content==="企业客户"'>
      <div class="decorate"></div>
      <div class="noway"><li class="special"></li><span class="content">客户信息</span></div>
      <main v-for='(item,index) in list' :key=index>
      <hr>
        <el-form label-width="90px">
        <el-form-item :label=item.key>
          <el-input v-model=item.value></el-input>
        </el-form-item>
        </el-form>
      </main>
    </div>

    <x-button style='margin-top:3rem;width:90%;background:rgb(100,100,240);color:white;'>完成</x-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      options: [{
          value: '政府客户',
          label: '政府客户'
        }, {
          value: '企业客户',
          label: '企业客户'
        }],
        value: '',
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
      content:"",
      value1:'',
      value2:'',
      value3:'',
      value4:'', 
      value5:'',
      value6:'',
      value7:'',  
      choice:true,
    }
  },
  methods:{
    change1(){
      this.choice=true;
    },
    change2(){
      this.choice=false;
    },
    choose(value){
      this.content=value;
    }
  }
}
</script>
<style lang="less" scoped>
.root{
  background:white;
  font-size:0.7rem;
  color:grey;
  padding:0.1rem 0.5rem;
  
  label{
    margin-right:1rem;
  }
  input:focus{
    outline:none;
  }
}
main{
  background:white;
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
.decorate{
  height:0.5rem;
}
</style>
