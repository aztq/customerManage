<template>
<div class="vux-1px-t">

<swipeout>
  <swipeout-item transition-mode="follow">
    <div slot='right-menu'>
      <swipeout-button type="warn">取消收藏</swipeout-button>
    </div>
    <div slot="content" class="demo-content vux-1px-t">
      <grid>
        <grid-item style='width:20%;'>
          <img src="../../assets/tuohai.jpg" width=60px alt="" srcset="">
        </grid-item>
        <grid-item style='width:80%;'>
          <span>上海投资建设局</span>
          <li>政府企业</li>
          <li>所属以及企业: &nbsp 上海市人民政府</li>
          <hr>
        </grid-item>
      </grid>
    </div>
  </swipeout-item>
</swipeout>

<swipeout>
  <swipeout-item transition-mode="follow">
    <div slot='right-menu'>
      <swipeout-button type="warn">取消收藏</swipeout-button>
    </div>
    <div slot="content" class="demo-content vux-1px-t">
      <grid>
        <grid-item style='width:20%;'>
          <img src="../../assets/tuohai.jpg" width=60px alt="" srcset="">
        </grid-item>
        <grid-item style='width:80%;'>
          <span>上海投资建设局</span>
          <li>政府企业</li>
          <li>所属以及企业: &nbsp 上海市人民政府</li>
          <hr>
        </grid-item>
      </grid>
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
a:hover{
    text-decoration:none;
}
  span{
    color:black;
    font-size:0.6rem;
  }
  li{
    color:rgb(209, 186, 186);
    font-size:0.55rem;
    margin:0.2rem 0;
    letter-spacing:1px;
  }
  button{
    height:3.6rem;
  }
  .weui-grids:before{
    border-top:none;
  }
  .weui-grid:before{
    border-right:none;
  }
  .weui-grids:after{
    border-left:none;
  }
  .weui-grid:after{
    border-bottom:none;
  }
  .weui-grids{
    background:white;
   
  }
</style>
