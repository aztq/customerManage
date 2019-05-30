<template>
  <div class="container">
    <div class="noway"><li class="special"></li><span class="content">拜访附件</span></div>
    <div class='document'>
      <img class='img1' src="../../assets/sight.jpg" alt="" width=50>
      <article>
        <span class='name'>3947</span><br>
        <span class='nap'>18k</span><span>已上传</span>
        <img class='delete' src="../../assets/删除.png">
      </article>
    </div>
    <div class='document'>
      <img class='img1' src="../../assets/sight.jpg" alt="头像" width=50>
      <article>
        <span class='name'>3947</span><br>
        <span class='nap'>18k</span><span>已上传</span>
        <img class='delete' src="../../assets/删除.png">
      </article>
    </div>
    <div class="next">
      <div class="noway"><li class="special"></li><span class="content">填写拜访结果</span></div>
      <x-textarea rows=8 class='line'></x-textarea>
    </div>
    
  </div>
</template>
<script>
import { XTextarea } from 'vux'
export default {
  components: {
    XTextarea
  }
}
</script>
<style lang="less" scoped>
.container{
  padding:0 0.5rem;
  background:white;
  .next{
    padding:0.5rem 0;
    .line{
      border:1px rgb(133, 130, 130) solid;
      border-radius:2px;
      margin:0.5rem 0;
    }
  }
}
.document{
  height:2rem;
  padding:0.2rem 0.1rem;
  .img1{
   float:left;
   margin:0.4rem 1rem 0 0;
  }
  .delete{
    float:right;
    width:5%;
    margin-right:1rem;
  }
  article{
    .name{
      font-size:0.65rem;
      color:black;
    }
    span{
      font-size:0.6rem;
      color:grey;
    }
    .nap{
    margin-right:1rem;
    }
  }
  
}
</style>
