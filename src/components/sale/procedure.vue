<template>
  <div class="container">
    <header>
      <span>中国银行</span><br>
      <ul class='top'>
        <li>商机类型</li>
        <li>战略协议</li>
      </ul>
      <ul class='top'>
        <li>客户类型</li>
        <li>北京分行</li>
      </ul>   
    </header>

<el-collapse>
  <el-collapse-item title="基本信息" name="1">
    <ul class='show' v-for='(item,index) in list' :key=index>
      <li class='left'>{{item.key}}</li>
      <li class='right'>{{item.value}}</li>
     </ul>
  </el-collapse-item>
</el-collapse>





    <step v-model="step">
      <step-item :title="'step 1'"></step-item>
      <step-item :title="'step 2'"></step-item>
      <step-item :title="'step 3'"></step-item>
    </step>
    <div class="decorate"></div>
    <div class="noway"><li class="special"></li><span class="content">基本信息</span></div>
    <div class="decorate"></div>
     <ul class='show' v-for='(item,index) in list' :key=index>
      <li class='left'>{{item.key}}</li>
      <li class='right'>{{item.value}}</li>
     </ul>
    <div class="decorate"></div>
    
    
    <div class="noway"><li class="special"></li><span class="content">审批历史</span></div>
     <div class="history">
      <img src="../../assets/sight.jpg" width=19% alt="">
      <span>某部门</span>
      <button>审批通过</button>
      <ul class='top'>
        <li style='float:left;margin-right:1rem;'>张天</li>
        <li>2019-1-1</li>
      </ul>
      <p>风雨走过，经历了好多？</p>
     </div>
    <div class="decorate"></div>

    
    <div class="noway"><li class="special"></li><span class="content">审批意见</span></div>
    <textarea name="" id="" cols="30" rows="10" placeholder="输入审批意见"></textarea>
    <el-row>
      <el-col :span="8"><x-button>驳回放弃</x-button></el-col>
      <el-col :span="8"><x-button>驳回修改</x-button></el-col>
      <el-col :span="8" @click.native.once='nextStep()'><x-button>审批通过</x-button></el-col>
    </el-row>


  </div>
</template>
<script>
import { Popup } from 'vux'
import { Step , StepItem } from 'vux';
export default {
  components: {
    Step,StepItem,
    Popup
  },
  data(){
    return {
      list:[
        {key:'项目名称',value:'人行腾讯'},
        {key:'客户名称',value:'中国投资资产'},
        {key:'所在地',value:'北京市辖区'},
        {key:'拓展期望',value:'预计收益'},
        {key:'描述',value:'养老投资'},
        {key:'发起部门',value:'保险委托'},
        {key:'发起人',value:'admin'},
        {key:'发起时间',value:'2018-12'}
      ],
      step:0
    }
  },
  methods:{
    nextStep(){
      this.step++
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  padding:0 0.1rem;
  background:white;
}
header{
  padding:0.2rem 0.3rem 0 0.3rem;

  span{
    font-size: 0.8rem;
    font-weight:bold;
    }
  .top{
      height:1.5rem;
    li{
      font-size: 0.65rem;
      margin:0.3rem 0;
      float:left;
      margin-right:1rem;
      }
    }
}
.show{
  padding:0.3rem;
  font-size:0.7rem;
  .left{
    float:left;
    width:3.5rem;
    text-align:right;
    margin-right:1.5rem;
  }
}
.decorate{
  height:0.3rem;
  background:rgb(218, 218, 236);
}
.history{
  border:1px solid rgb(138, 138, 143);
  border-radius:10px;
  padding:0.2rem 0;
  margin:0.4rem 0.5rem;
  img{
    float:left;
    margin:0.5rem 0.5rem 0.2rem 0.5rem;
    }
  span{
    font-size:0.7rem;
    }
  button{
    border:1px green solid;
    background:white;
    padding:0.2rem;
    margin-right:0.5rem;
    margin-top:0.5rem;
    float:right;
    color:green;
    font-size:0.6rem;
  }
  .top{
    margin:0.1rem 0;
    li{
      font-size:0.7rem;
      }
    }
  p{
    font-size:0.6rem;
    margin-top:0.2rem;
  }
}
textarea{
  width:95%;
  margin-left:0.5rem;
  margin-top:0.6rem;
  font-size:0.7rem;
  padding:0.1rem;
}
.el-row{
  width:100%;
  position:fixed;
  bottom:0px;
  button{
    padding:0.2rem 0;
    color:rgb(37, 37, 250);
  }
}
.weui-btn:after{
  border:0;
  border-radius:0 !important;
}



</style>
