<template>
  <div class='container'>
    <header>
      <span>上海市投资建设局</span>
      <li>政府企业</li>
      <li>所属一级客户：上海市人民政府</li>
      <ul>
      <li style='float:left'>订阅该客户</li>
      <li style='color:#0068ff;float:right'>查看客户关系树</li>
      </ul>
    </header>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item>
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">基本信息</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">下属信息</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">拜访信息</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">合作信息</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">商机信息</span>
      </grid-item>
    </grid>
    <div class="decorate"></div>

    <div class="sun">
    <div class="noway"><li class="special"></li><span class="content">基本信息</span></div>
    <table class='next' v-for='(item,index) in list' :key=index>
      <tr>
        <td class='left'>{{item.key}}</td>
        <td class='right'>{{item.value}}</td>
      </tr>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  components: {},
  data(){
    return{
        list:[
          {key:'管理类型',value:''},
          {key:'社会信用代码',value:'adveerr'},
          {key:'所在地',value:'深圳'},
          {key:'注册地',value:'深圳'},
          {key:'客户地址',value:'广东'},
          {key:'注册地址',value:''},
          {key:'注册资金',value:'深圳'},
          {key:'注册时间',value:'深圳'},
          {key:'法人姓名',value:'广东'},
          {key:'行业',value:''},
          {key:'主营业务',value:'adveerr'},
          {key:'电话号码',value:'深圳'},
          {key:'网站',value:'深圳'},
          {key:'邮箱',value:'广东'},
          {key:'下辖或参股保险公司',value:''},
          {key:'保险经纪公司情况',value:'深圳'},
          {key:'外部信用评级',value:'AA+'},
        ],
        choice:true
    }
  }
}
</script>
<style lang="less" scoped>
header{
  padding:0.3rem 0.3rem 0.8rem 0.3rem;
  background:#333d46;
  height:5rem;
  span{
    color:white;
    font-size: 0.8rem;
  }
  li{
    color:white;
    font-size: 0.65rem;
    margin:0.3rem 0;
  }
  ul{
    li{
      font-size: 0.6rem;
    }
  }
}
.sun{
  background:white;  
  padding:0 0 2.5rem 0;
  .next{
    width:100%;
  tr{
    border-top:1px rgb(223, 189, 189) solid;
    font-size:0.6rem;
    width:100%;
  }
  .left{
    width:30%;
    opacity: 0.5;
    padding:0.5rem;
    text-align:center;
  }
  .right{
    width:65%;
    font-size:0.7rem;
    padding:0.5rem 1rem;
  }
 }
}
.choose{
  background:rgb(111, 111, 228);
}
.decorate{
  height:10px;
  background:rgb(218, 218, 236);
}
.weui-grid{
  padding:10px 5px;
}
</style>
<style>
.weui-grids{
  background:white;
  clear:both;
}
.weui-grid__label{
  font-size:0.6rem !important;
  overflow:visible !important;
}
.weui-grid{
  padding:10px 5px;
}
</style>
