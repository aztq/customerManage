<template>
  <div class="container">
    <header>
      <li class='special'></li><li class='title'>客户现场路演</li>
      <button class='situation-complete situation'>完成</button>
      <button class='situation-cancel situation'>取消</button>
    </header>
    <hr>
    <article class='describe'>
      <li>兴业银行</li>
      <li>2018 &nbsp 20：00 &nbsp 计划拜访</li>
    </article>
    <div class="decorate"></div>
    <el-row>
      <el-col :span="10"><div class="grid-content">内部联系人</div></el-col>
      <el-col :span="14"><div class="grid-content">我司拜访人</div></el-col>
    </el-row>

    <el-row>
      <el-col :span="10" style='padding:0 0.8rem;'>
        <div class="grid-content" style='border-right:1px grey solid;'>
          <img src="../../assets/头像.png" width=40><br>
          <span>啧</span>
        </div>
      </el-col>
    <el-col :span="14" style='padding:0 0.2rem;'>
      <div class="grid-content">
       <div style='float:left;;height:1rem;margin-right:1rem'>
         <img src="../../assets/头像.png" width=40>
         <p>周子瑜</p>
       </div>
       <div style='float:left;'>
         <img src="../../assets/头像.png" width=40>
         <p>周子瑜</p>
       </div>
        </div>
      </el-col>
    </el-row>
    <div class="decorate"></div>
    <div class="program">
      <li>关联项目</li>
      <li>阳澄湖</li>
    </div>
    <hr>

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
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.container{
  padding:0 0.2rem;
  background:white;
}
header{
  height:1.5rem;
  padding:0.5rem 0 0 0;
  .special{
    background:rgb(119, 119, 250);
    height:0.9rem;
    width:0.5rem;
    float:left;
    margin:0 0.2rem;
  }
  .title{
    float:left;
    font-size:0.75rem;
    font-weight:bold;
  }
}
.situation{
  font-size:0.6rem;
  margin:0 0.1rem;
  float:right;
  color:blue;
  background:white;
  padding:0.1rem;
  font-family: '微软雅黑';
  font-weight: 200;  
}
.situation-complete{
  border:1px blue solid;
}
.situation-cancel{
  color:black;
  border:1px black solid;
}
.describe{
  li{
    font-size:0.65rem;
    margin:0.3rem 0;
  }
}
.grid-content{
  font-size:0.6rem;
  padding:0.2rem 0;
  margin-left:0.8rem;
}
.program{
  height:1rem;
  padding:0.1rem 0;
  li{
    float:left;
    margin-right:1rem;
    font-size:0.6rem;
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
hr{
  margin-bottom:0.2rem;
}
.decorate{
  height:0.5rem;
  background:rgb(235, 220, 220);
  margin:0.3rem 0;
}
</style>
