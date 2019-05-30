<template>
  <div class="container">
    <div class="back"></div>
    <div class='sub'>
    <header>
   
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/my/book/first2">
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">我的订阅</span>
      </grid-item>
      <grid-item :link="{ path: '/my/book/second2'}">
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">我的订阅</span>
      </grid-item>
      <grid-item link="/my/book/third2">
        <img slot="icon" src="../../assets/sight.jpg">
        <span style='margin-right:0.5rem !important;' slot="label">收藏联合发展</span>
      </grid-item>
      <grid-item link="/my/book/fourth2">
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">我的订阅</span>
      </grid-item>
    </grid>
    </header>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
 export default{
   data(){
     return{
      top:[
       {label:'收藏客户',to:'/my/book/first2'},
       {label:'收藏合作',to:'/my/book/second2'},
       {label:'收藏联合发展',to:'/my/book/third2'},
       {label:'我的订阅',to:'/my/book/fourth2'},
     ]
   }
  }
 }
</script>
<style lang="less" scoped>
.container{
  background:white;
  .back{
    height:2.5rem;
    background:#e4e4e4;
  }
  .sub{
    padding:0 0.8rem; 
  }
  header{
    height:5rem;
    background:white;
    margin-top:-1.5rem;
    border:1px gray solid;
    border-radius:15px;
    span{
      font-size:0.55rem;
    }
  }
}
</style>
<style>
.weui-grids:before{
  border-top:0px !important;
}
.weui-grid:after{
  border-bottom:0px !important;
}
a:hover{
  text-decoration: none;
}
.weui-grid{
  padding:10px 5px;
}
.weui-grid__label{
  overflow:visible !important;
}
</style>
