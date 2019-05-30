<template>
  <div id='container'>
    <header>
      <input type="text" placeholder="搜索标题">
      <icon type="search"></icon><span>筛选</span>
    </header>
    <div class="main" v-for='(item,index) in list' :key=index>
      <div class="decorate"></div>
      <article>
        <x-button mini type="warn">计划拜访</x-button>
        <li class='title'><strong>{{item.name}}</strong></li>
        <li style='float:left;margin-right:0.5rem;'>2018</li>
        <li style='float:left'>13:00</li><br>
        <li>{{item.boss}}</li>
        <span>内部联系人：张</span>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list:[
        {id:'1',name:'客户现场演示原型并确认需求',boss:'兴业北京分行',date:'1953-07-15',person:'张安顺'},
        {id:'1',name:'客户现场演示原型并确认需求',boss:'兴业北京分行',date:'1953-07-15',person:'张安顺'},
        {id:'1',name:'客户现场演示原型并确认需求',boss:'兴业北京分行',date:'1953-07-15',person:'张安顺'}
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#container{
  background:white;
}
header{
  padding:0.4rem 0 0.3rem 0.8rem;
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
    margin:0.4rem 0.8rem 0 0;
    font-size:0.7rem;
  }
}

article{
  padding:0.5rem 0.3rem;
  .title{
    font-size:0.7rem;
    margin-bottom:0.3rem;
  }
  span{
    font-size:0.65rem;
  }
  li{
    font-size:0.65rem;
  }
  button{
  background:white;
  color:red;
  float:right;
  }
  .weui-btn_mini{
  padding:0 0.5rem;
  font-size:0.6rem;
  }
}
  .decorate{
  height:0.4rem;
  background:#f3f3f3;
  }

</style>
