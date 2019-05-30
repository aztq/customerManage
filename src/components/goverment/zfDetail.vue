<template>
  <div class="contain">
    <header>
      <span>上海市投资建设局</span>
      <li>政府企业</li>
      <li>所属一级客户：上海市人民政府</li>
      <ul>
      <img class='book' src="/static/订阅.svg"><li style='float:left'>订阅该客户</li>
      <img class='star' src="/static/星星.svg">
      <li style='color:#0068ff;float:right' @click='go'>查看客户关系树</li>
      </ul>
    </header>

    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/goverment/zfDetail/first">
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">基本信息</span>
      </grid-item>
      <grid-item :link="{ path: '/goverment/zfDetail/second'}">
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">下属信息</span>
      </grid-item>
      <grid-item link="/goverment/zfDetail/third">
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">拜访信息</span>
      </grid-item>
      <grid-item link="/goverment/zfDetail/fourth">
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">合作信息</span>
      </grid-item>
      <grid-item link="/goverment/zfDetail/fifth">
        <img slot="icon" src="../../assets/sight.jpg">
        <span slot="label">商机信息</span>
      </grid-item>
    </grid>
    <div class="decorate1"></div>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data(){
    return{
        value1:[
          {key:'政府名称',value:'上海市人民政府'},
          {key:'所属一级客户',value:'上海市人民政府'},
          {key:'统一社会信用代码',value:'1211000079210056X1'},
          {key:'管理类型',value:'省属企业'},
          {key:'所在地域',value:'北京市北京市辖区'},
          {key:'网站',value:'www.example.com'},
        ],
        value2:[
          {key:'联系电话',value:'--'},
          {key:'邮箱',value:'--'},
          {key:'传真',value:'--'},
          {key:'客户地址',value:'--'},
          {key:'邮编',value:'--'}
        ]
    }
  },
  methods:{
    go(){
      this.$router.push({path:'/goverment/tree'})
    }
  }
}
</script>

<style lang="less" scoped>
.contain{
  background:white;
  .decorate1{
    height:10px;
    background:rgb(218, 218, 236);
  }
}
header{
  padding:0.3rem;
  background:#333d46;
  span{
    color:white;
    font-size: 0.8rem;
  }
  .book{
    float:left;
    width:6%;
    margin-top:0.15rem;
  }
  .star{
    width:7%;
    margin-top:0.1rem;
    margin-left:2rem;
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
.weui-grids{
  padding:0.2rem 0;
  clear:both;
}
</style>
<style>
.weui-grid__label{
  overflow:visible !important;
  font-size:0.6rem !important;
}
</style>
