<template>
  <div class="container">
    <div class="noway"><li class="special"></li><span class="content">基本信息</span></div>
    <div class="decorate"></div>
    <li id='con'>
      <label>项目名称</label><input :value=program>
    </li>
     <div class="decorate"></div>
    <li id='con'>
      <label>客户名称</label><input :value=customer>
    </li><div class="decorate"></div>
    <li id='con'>
      <label>所在地区</label><input :value=district>
    </li><div class="decorate"></div>
    <li id='con'>
      <label>拓展期望</label><input :value=expect>
    </li><div class="decorate"></div>
    <span class='bottom'>描述信息</span>
    <div id='text'>
      <textarea rows="5" cols="20" placeholder='请输入描述信息'>
      </textarea>
    </div>
    <div class="dec"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      program:'中国银行',
      customer:'银行',
      district:'朝阳',
      expect:'5000'
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  min-height:100vh;
  background:white;
  padding:0 0 0.3rem 0;
  .decorate{
    height:2px;
    background:#f3f3f3;
  }
  .special{
    background:blue;
    float:left;
    height:0.9rem;
    width:0.5rem;
    margin:0.1rem  0.3rem 0 0.3rem;
  }
  .title{
    font-size:0.75rem;
    font-weight:bold;
  }
  #con{
    margin:0.2rem 0;
    padding:0.1rem 0.3rem;
    height:1rem;
    label{
      float:left;
      font-size:0.65rem;
      padding:0.2rem;
      color:#989898;
    }
  }
  input{
    border:0px;
    float:left;
    margin-left:2rem;
    font-size:0.7rem;
    padding:0.2rem;
  }
  .bottom{
    font-size:0.65rem;
    color:#989898;
    margin-left:0.3rem;
  }
}
#text{
  text-align:center;
  textarea{
    width:90%;
    font-size:0.7rem;
    color:#989898;
    margin-top:0.2rem;
  } 
}
.dec{
  height:1rem;
  background:#f3f3f3;
  margin-top:2.5rem;
}
</style>
