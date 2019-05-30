<template>
  <div>
    <section v-for='(item,index) in ls' :key=index>
      <router-link :to=item.to><el-container>
        <el-aside width="100px"><img src="../../assets/xida.jpg" width=60px height=50px>
        <badge text="4"></badge></el-aside>
        <el-main>
          <span style='float:left;font-size:0.7rem;color:black;font-weight:bold;'><strong>{{item.kinds}}</strong></span>
          <span style='float:right;font-size:0.65rem;color:black;'>{{item.time}}</span><br>
          <span style='font-size:0.65rem;color:black;'>{{item.news}}</span>
        </el-main>
      </el-container></router-link>
      <div class="decorate"></div>
    </section>
  </div>
</template>
<script>
export default {
  data(){
    return{
      ls:[
        {src:'',kinds:'订阅消息',time:'2小时前',news:'您订阅的商机发布了',to:'/my/message/DY'},
        {src:'',kinds:'审核消息',time:'2小时前',news:'有个要审核',to:'/my/message/SH'},
        {src:'',kinds:'被审核消息',time:'2小时前',news:'已通过',to:'/my/message/BS'},
        {src:'',kinds:'拓展消息',time:'2小时前',news:'新增人员',to:'/my/message/TZ'},
        {src:'',kinds:'日程提醒',time:'2小时前',news:'新增人员',to:'/my/message/RC'}
      ]
    }
  }
}
</script>
<style lang="less" scoped>
section{
  background:white;
}
aside{
  padding:0.5rem 0 0 1rem;
  span{
    margin-top:-6.5rem;
    margin-left:2.8rem;
    background:red;
  }
}
.right{
  font-size:0.65rem;
}
.decorate{
  background:#efefef;
  height:0.1rem;
}

</style>
