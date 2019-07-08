<template>
  <div>
    <div class="noway"><li class="special"></li><span style='font-weight:bold;font-size:0.7rem;'>拜访信息</span></div>
    <div class="decorate"></div>
    <article>
      <div v-for='(i,index) in value1' :key=index>
        <span class='span1'>{{i.key}}</span><br>
        <span>{{i.date}}</span><br>
        <span>我司拜访人：<span style='color:blue'>{{i.one}}</span></span><br>
        <span>内部联系人：<span style='color:blue'>{{i.two}}</span></span>
        <button>{{i.situation}}</button>
        <hr>
      </div>
    </article>
  </div>
</template>

<script>
import {Flow , FlowState ,FlowLine} from 'vux'
export default {
  components:{
    Flow,FlowState,FlowLine
  },
  data(){
    return{
        value1:[
          {key:'客户现场',date:'2018-12-24',one:'张安顺',two:'赵子玉',situation:'计划拜访'},
          {key:'客户现场',date:'2018-12-24',one:'张安顺',two:'赵子玉',situation:'已完成的拜访'},
          {key:'客户现场',date:'2018-12-24',one:'张安顺',two:'赵子玉',situation:'未完成的拜访'},
        ]
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (min-width : 360px) {
  .decorate{
    margin:0.6rem 0 0.5rem 0 !important;
  }
}
article{
  padding:0 0.5rem;
  span{
    font-size:0.6rem;
 }
  .span1{
    font-size:0.7rem;
 }
}
.decorate{
  height:10px;
  background:rgb(218, 218, 236);
}
hr{
  margin:0.5rem 0;
}
  button{
    float:right;
    font-size:0.6rem;
    background:white;
    padding:0.1rem 0.3rem;
    border:1px grey solid;
    color:grey;
}

.noway{
  padding-top:0.3rem;
  .special{
    width:0.4rem;
    height:0.8rem;
    background:blue;
    float:left;
  }
}
</style>

