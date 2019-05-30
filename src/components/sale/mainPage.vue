<template>
  <div id='container'>
    <header>
      <input type="text" placeholder="搜索标题">
      <icon type="search"></icon><span @click='change()'>筛选</span>
    </header>
    <article>
      <h4>中国银行</h4>
      <li>项目类型&nbsp &nbsp  &nbsp战略协议</li>
      <li>客户名称&nbsp &nbsp  &nbsp腾讯</li>
      <li>项目阶段&nbsp &nbsp  &nbsp立即审批</li>
    </article>

<popup v-model="show" position="top">
    <section>
      <h4>项目类型</h4>
      <flexbox :gutter="0" wrap="wrap">
       <flexbox-item v-for='(item,index) in type' :key=index :span=item.amount>
        <div class='common' :class="{choose:index===typeJudge}" @click='notice1(index)'>{{item.value}}</div>
       </flexbox-item>
      </flexbox>
      <h4>项目阶段</h4>
      <flexbox :gutter="0" wrap="wrap">
       <flexbox-item v-for='(item,index) in process' :key=index :span=item.amount>
        <div class='common' :class="{choose:index===processJudge}" @click='notice2(index)'>{{item.value}}</div>
       </flexbox-item>
      </flexbox>
      <h4>所在地</h4>
      <flexbox :gutter="0" wrap="wrap">
       <flexbox-item v-for='(item,index) in area' :key=index :span=item.amount>
        <div class='common' :class="{choose:index===areaJudge}" @click='notice3(index)'>{{item.value}}</div>
       </flexbox-item>
      </flexbox>
      <span>恢复默认</span> <button>确认</button>
    </section>
</popup>


  </div>
</template>
<script>
import { Flexbox ,FlexboxItem } from 'vux'
import { Popup } from 'vux'
export default {
  components:{
    Flexbox,FlexboxItem,
    Popup,
  },
  data(){
    return{
      type:[
        {value:'全部',amount:1/4},
        {value:'1',amount:1/4},
        {value:'2',amount:1/4},
        {value:'2',amount:1/4}
      ],
      process:[
        {value:'全部',amount:1/4},
        {value:'1',amount:1/4},
        {value:'2',amount:1/4},
        {value:'3',amount:1/4}
      ],
      area:[
        {value:'全部',amount:1/4},
        {value:'1',amount:1/4},
        {value:'2',amount:1/4},
        {value:'3',amount:1/4},
        {value:'4',amount:1/4},
        {value:'5',amount:1/4},
        {value:'5',amount:1/4},
        {value:'6',amount:1/4},
      ],
      show:false,
      typeJudge:0,
      processJudge:0,
      areaJudge:0,
    }
  },  
  methods:{
    change(){
      this.show=!this.show;
    },
    notice1(index){
      //alert('index='+index)
      this.typeJudge=index;
      //alert(this.manageJudge)
    },
    notice2(index){
      this.processJudge=index;
    },
    notice3(index){
      this.areaJudge=index;
    }
  }
}
</script>
<style lang="less" scoped>
#container{
  padding:0 0.5rem;
  background:white;
  header{
   padding:0.4rem 0 0.3rem 0.5rem;
   input{
    border:1px rgb(175, 171, 171) solid;
    border-radius:15px;
    padding:0.4rem 0 0.4rem 2rem;
    font-size:0.6rem;
    width:65%;
   }
   i{
    left:1.5rem;
    top:0.9rem;
    position:absolute;
    }
   span{
    float:right;
    margin:0.4rem 0.5rem 0 0;
    font-size:0.6rem;
   }
  }
}
article{
  border:1px solid black;
  border-radius:5px;
  box-shadow: 3px 3px 5px #7d7f81;
  padding:0.3rem 0.5rem;
  h4{
    font-size:0.8rem;
  }
  li{
    font-size:0.6rem;
    margin:0.3rem 0;
    color:grey;
  }
}
section{
  padding:0.5rem;
  background:white;
  h4{
    font-size:0.75rem;
  }
  div{
    .common{
      border:1px rgb(187, 187, 194) solid;
      font-size:0.6rem;
      padding:0.3rem 0;
      margin:0.2rem 0.1rem 0.5rem 0.1rem;
      text-align:center;
    }
    .choose{
      color:white;
      background:rgb(103, 103, 199);
    }
  }
    span{
      font-size:0.6rem;
      color:blue;
    }
    button{
      float:right;
      color:red;
      border:1px red solid;
      border-radius: 5px;
      background:white;
      padding:0.2rem 0.8rem;
      margin:0.3rem 0 0 0;
      font-size:0.6rem
    }
}
</style>

<style>
.el-collapse{
  border:0px;
}
.el-collapse-item__header{
  height:1.5rem;
  font-size:0.75rem;
  font-weight:bold;
  border:0px;
}
.el-collapse-item__content{
  padding-bottom:0px;
}
</style>
