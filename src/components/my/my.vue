<template>
  <div>
    <div class="trouble">
    <div class="sub">
    <el-container>
      <el-aside width="6rem"><img src="../../assets/xida.jpg" width=80 height=80></el-aside>
      <el-main>
        <span style='color:#007fcd;font-size:0.8rem;'>张军华</span><br>
        <span >资产管理事业部</span><br>
        <span style='color:grey;font-size:0.7rem;'>业务员</span>
      </el-main>
    </el-container>
    </div>
    <article>
      <h5>我的信息</h5>
      <span>工号：</span><br>
      <span>邮箱：</span><br>
      <span>手机：</span>
    </article></div>
    <div class='application'>
      <div class="noway"><li class="special"></li><span class="content">我的应用</span></div>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item label='信息'>
        <img slot="icon" src="../../assets/xida.jpg">
      </grid-item>
      <grid-item label='信息'>
        <img slot="icon" src="../../assets/xida.jpg">
      </grid-item>
      </grid>

      <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item :label=item v-for="item in list2" :key="item">
        <img slot="icon" src="../../assets/xida.jpg">
      </grid-item>
      </grid>
    </div>
    <x-button>退出登录</x-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list1:['我的客户','我的商机','',''],
      list2:['我的客户','我的商机','我的协同','我的拜访']
    }
  }
}
</script>
<style lang="less" scoped>
aside{
  padding:1rem;
}
.trouble{
  background:white;
}
.application{
  background:white;
  padding-top:1rem;
}
.sub{
  background:#f3f3f3;
  height:10rem;
  main{
   padding:1.2rem;
    span{
     font-size:0.7rem;
    }
  }
}

article{
  border:1px #dfdbdb solid;
  border-radius:10px;
  padding:0.5rem;
  width:70%;
  background:white;
  margin-top:-3rem !important;
  margin:0 auto;
  h5{
    letter-spacing: 0.1rem;
    font-size:0.65rem;
  }
  span{
    letter-spacing: 0.2rem;
    opacity:0.5;
    font-size:0.65rem;
  }
}
a{
  width:25% !important;
}
.weui-grid:after{
  border:none;
}
.weui-grids:before{
  content:none !important;
}
span{
  font-size:0.8rem;
}
button{
  width:90% !important;
  background:#009bff;
  margin-top:1rem;
  color:white;
  border-radius:15px;
}
</style>
<style>
.weui-grid__label{
  font-size:0.65rem !important;
  color:rgb(59, 54, 54) !important;
}
</style>
