<template>
  <div class="container">
    <header>
      <icon type="search"></icon>
      <input type="text" placeholder="search">
    </header>
    <grid>
      <grid-item style='width:20%;'>
        <img src="../assets/tuohai.jpg" width=60px alt="" srcset="">
      </grid-item>
      <grid-item style='width:80%;'>
        <span>上海投资建设局</span>
        <li>政府企业</li><button class='wait'>集团审核中</button>
        <li>提交时间2018-01-01 &nbsp 11</li>
        <li>提交人&nbsp 张安顺</li>
        <hr>
      </grid-item>
    </grid>

    <grid>
      <grid-item style='width:20%;'>
        <img src="../assets/tuohai.jpg" width=60px alt="" srcset="">
      </grid-item>
      <grid-item style='width:80%;'>
        <span>上海投资建设局</span>
        <li>政府企业</li><button class='success'>审核成功</button>
        <li>提交时间2018-01-01 &nbsp 11</li>
        <li>提交人&nbsp 张安顺</li>
        <hr>
      </grid-item>
    </grid>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.container{
  font-size:0.7rem;
  letter-spacing: 1px;
  header{
    padding:0.5rem 0.2rem;
    input{
      border:1px #dfdfe1 solid;
      border-radius:15px;
      background:#dfdfe1;
      padding-left:1.5rem;
      height:30px;
      margin-left:0.5rem;
      width:14rem;
    }
    i{
      margin:0.5rem 0 0 1rem;
      position:absolute;
    }
  }
  a:hover{
    text-decoration:none;
  }
  hr{
    margin:0.5rem 0 -1rem 0;
  }
  span{
    color:black;
  }
  li{
    color:rgb(209, 186, 186);
    font-size:0.55rem;
    margin:0.1rem 0;   
  }
  button{
    float:right;
    padding:0.2rem; 
    border:1px white solid;
    border-radius:5px;
    font-size:0.65rem;
    color:white;
  }
  .wait{
    background:#ff5a5b;
  }
  .success{
    background:#009a9a;
    padding:0.2rem 0.55rem; 
  }
  .weui-grids:before{
    border-top:none;
  }
  .weui-grids{ 
    background:white;
    z-index:-1; 
    padding:-0.5rem; 
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
}
</style>
