<template>
  <div class='container'>


    <swipeout>
      <swipeout-item transition-mode="follow">
        <div slot="right-menu">
          <swipeout-button type="warn">删除收藏</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t">
          <article>
            <h4>中国银行</h4>
            <span><img src="../../assets/空心圆.png" width=3%;><li class='left'>商机类型</li><li class='right'>类型1</li></span><br>
            <span><img src="../../assets/空心圆.png" width=3%;><li class='left'>客户名称</li><li class='right'>腾讯</li></span><br>
            <span><img src="../../assets/空心圆.png" width=3%;><li class='left'>项目阶段</li><li class='right special'>立即审批</li></span><br>
          </article>
          <hr>
        </div>
      </swipeout-item>
    </swipeout> 
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.container{
  padding:0.5rem 1rem;
  min-height:100vh;
  article{
    
    span{
      
    }
   li{
    float:left;
    font-size:0.6rem;
    margin:0.2rem;
   }
   .right{
    margin-left:1rem;
   }
   .special{
    color:red;
   }
   img{
     float:left;
     margin-top:0.3rem;
   }
   h4{
    font-size:0.8rem;
   }
  }
}

</style>