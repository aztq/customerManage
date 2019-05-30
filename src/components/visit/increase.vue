<template>
<div class='container'>
    <div class="decorate"></div>

    <x-input title="拜访事由" id='extra' :show-clear=false></x-input>
    <x-input title="拜访类型"></x-input>
    <x-input title="拜访对象" :show-clear=false></x-input>
    <icon type="search"></icon>
    <x-input title="关联项目" :show-clear=false></x-input>
    <icon type="search"></icon>

    <x-input title="拜访时间"></x-input>
    <x-input title="拜访地点"></x-input>
    <x-input title="我司拜访人" :show-clear=false></x-input>
    <icon type="search"></icon>
    <x-input title="拜访结果"></x-input>
    <div class="put" style='padding:0 0.5rem;'>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    </div>
  <div class="add">
    <span class='partTitle'>附加资料</span>
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
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      textarea:''
    }
  }
}
</script>
<style lang="less" scoped>
.decorate{
  height:0.5rem;
  background:#f3f3f3;
}
.container{
  font-size:0.8rem;
  background:white;
}
.vux-x-input{
  font-size:0.65rem;
}
i{
  float:right;
  margin-top:-1.4rem;
  margin-right:0.5rem;
}
.add{
  padding:0.3rem 0;
  .partTitle{
  font-size:0.65rem;
  margin:0.2rem 0.5rem;
}
.document{
  height:2rem;
  padding:0.2rem 0.5rem;
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
}

</style>
<style>
.weui-label{
  width:5rem !important;
}
</style>

