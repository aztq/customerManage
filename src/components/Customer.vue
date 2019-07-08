<template>
  <div class="hello">
    <header>
      <input type="text" placeholder="搜索客户">
      <icon type="search"></icon>
      <img src="../assets/筛选.png" width=6% alt="">
      <span @click='change()'>筛选</span>
    </header>
    <div class="contain" v-for='(item,index) in list' :key=index>
      <div class="sub">
        <div class="top">
        <router-link :to=item.to>
          <li class='company'>{{item.name}}</li>
        </router-link>
        <img class='symbol' @click='changeImg(item.collect)' :src="item.collect?item.src1:item.src2" width=5%>
        <li>{{item.boss}}|</li>
        <li>{{item.date}}|</li>
        <li>{{item.money}}</li>
        <br>
        <span class='first'>中央总部</span>
        <span class='second'>汽车制造</span>
      </div>
      <hr>
      <div class="bottom">
        <span>联系地址：吉林省长春</span>
      </div>
      </div>
    </div>
    

    <div class='selection'>
      <popup v-model="show" position="top">
      <section>
      <h4>管理类型</h4>
      <flexbox :gutter="0" wrap="wrap">
       <flexbox-item v-for='(item,index) in manage' :key=index :span=item.amount>
        <div class='common' :class="{choose:index===manageJudge}" @click='notice1(index)'>{{item.value}}</div>
       </flexbox-item>
      </flexbox>

      <el-collapse>
        <el-collapse-item title='所属行业'>
          <flexbox :gutter="0" wrap="wrap">
            <flexbox-item v-for='(item,index) in work' :key=index :span=item.amount>
              <div class='common' :class="{choose:index===workJudge}" @click='notice2(index)'>{{item.value}}</div>
            </flexbox-item>
          </flexbox>
          </el-collapse-item>
      </el-collapse>
      

      <el-collapse>
        <el-collapse-item title="所在地区" name="1">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item v-for='(item,index) in area' :key=index :span=item.amount>
            <div class='common' :class="{choose:index===areaJudge}" @click='notice3(index)'>{{item.value}}</div>
          </flexbox-item>
        </flexbox>
        </el-collapse-item>
      </el-collapse>     
      <hr>
        <span @click='reset()'>恢复默认</span> <button @click='exit()'>确认</button>
      </section>
      </popup>
    </div>

 </div>
</template>

<script>
import { Flexbox ,FlexboxItem } from 'vux'
import { Popup } from 'vux'
export default {
  components:{
    Flexbox,
    FlexboxItem,
    Popup,
  },
  data () {
    return {
      list:[
        {collect:true,to:"/goverment/zfDetail",src1:'/static/star.png',id:'1',src2:'/static/star-d.png',name:'去政府详情',boss:'xx',date:'1953-07-15',money:'354000万元'},
        {collect:false,to:"/business/personal",src1:'/static/star.png',id:'2',src2:'/static/star-d.png',name:'企业详情',boss:'xx',date:'1953-07-15',money:'354000万元'},
        {collect:true,to:"/",src1:'/static/star.png',id:'3',src2:'/static/star-d.png',name:'无跳转',boss:'xx',date:'1953-07-15',money:'354000万元'},
        {collect:false,to:"/",src1:'/static/star.png',id:'4',src2:'/static/star-d.png',name:'无跳转',boss:'xx',date:'1953-07-15',money:'354000万元'}
      ],
      img1:"../assets/star.png",
      img2:"../assets/star-d.png",
      manage:[
        {value:'全部',amount:1/4},
        {value:'央企总部',amount:1/4},
        {value:'央企子公司',amount:1/4},
        {value:'省属企业',amount:1/4},
        {value:'央企省级机构',amount:1/3},
        {value:'民营企业',amount:1/4}
      ],
      work:[
        {value:'全部',amount:1/4},
        {value:'汽车制造业',amount:1/4},
        {value:'新能源',amount:1/4},
        {value:'交通运输',amount:1/4},
        {value:'行业4',amount:1/4},
        {value:'行业4',amount:1/4},
        {value:'行业4',amount:1/4},
      ],
      area:[
        {value:'全部',amount:1/4},
        {value:'北京市',amount:1/4},
        {value:'上海市',amount:1/4},
        {value:'天津市',amount:1/4},
        {value:'省份',amount:1/4},
        {value:'省份',amount:1/4},
        {value:'省份',amount:1/4},
        {value:'省份',amount:1/4},
      ],
      show:false,
      manageJudge:0,
      workJudge:0,
      areaJudge:0,
    }
  },
  methods:{
    change(){
      this.show=!this.show;
    },
    changeImg(collect){
      console.log(collect)
      return collect=!collect;
      console.log(collect)
    },
    notice1(index){
      //alert('index='+index)
      this.manageJudge=index;
      //alert(this.manageJudge)
    },
    notice2(index){
      this.workJudge=index;
    },
    notice3(index){
      this.areaJudge=index;
    },
    reset(){
      this.manageJudge=0;
      this.workJudge=0;
      this.areaJudge=0;
    },
    exit(){
      this.show=false;
    }
  }
}
</script>

<style lang='less' scoped>
@import '~vux/src/styles/close.less';
header{
  padding:0.4rem 0.2rem 0.4rem 0.8rem;
  background:white;
  input{
    border:1px #989898 solid;
    border-radius:15px;
    padding:0.4rem 2rem;
    font-size:0.65rem;
    width:50%;
  }
  i{
    position:absolute;
    top:0.9rem;
    left:1.5rem;
    }
  img{
    position:absolute;
    top:0.65rem;
    right:2.1rem;
  }
  span{
    float:right;
    margin:0.4rem 0.5rem 0 0;
    font-size:0.6rem;
  }
}
.contain{
  background:#f3f3f3;
  padding:0.3rem 0.4rem;
  hr{
    width:99%;
    margin:0.3rem 0.1rem 0 0.1rem;
    color:#d7d7d7;
  }
  .sub{
    background:white;
    h2{
      margin:0.3rem 0;
    }
  }
  .top{
    padding:0.2rem;
    span{
      font-size:0.6rem;
      letter-spacing:0.1rem;
      margin:0 0.1rem 0.1rem 0.2rem;
      border-radius:2px;
      padding:0.1rem 0.2rem;
    }
    .symbol{
      float:right;
      margin-right:0.5rem;
    }
    .first{
      color:#006cde;
      padding:0.1rem;
      border:1px #006cde solid;
      border-radius:5px;
    }
    .second{
      color:#ff5a00;
      padding:0.1rem;
      border:1px #ff5a00 solid;
      border-radius:5px;
    }
    .company{
      font-size:0.7rem;
      float:none;
      font-weight:bold;
      color:black;
      margin:0.2rem 0 0.2rem 0.1rem;
    }
    li{
      float:left;
      font-size:0.6rem;
      letter-spacing:0.1rem;
      color:rgb(95, 91, 91);
      margin:0.2rem 0.1rem 0.1rem 0.1rem;
    }
  }
}
.bottom{
  padding-left:0.3rem;
  padding-bottom:0.3rem;
 span{
  font-size:0.6rem;
  padding:0 0 0 0.1rem;
}
} 
section{
  padding:0.5rem;
  background:white;
  h4{
    font-size:0.75rem;
  }
  div{
    .common{
      border:1px rgb(187, 187, 194) solid;
      font-size:0.6rem;
      padding:0.3rem 0;
      margin:0.2rem 0.1rem 0.5rem 0.1rem;
      text-align:center;
    }
    .choose{
      color:white;
      background:#007bff;
    }
  }
    span{
      font-size:0.6rem;
      color:blue;
    }
    button{
      float:right;
      color:red;
      border:1px red solid;
      border-radius: 5px;
      background:white;
      padding:0.2rem 0.8rem;
      margin:0.3rem 0 0 0;
      font-size:0.6rem
    }
}

</style>

<style>
.el-collapse{
  border:0px;
}
.el-collapse-item__header{
  height:1.5rem;
  font-size:0.75rem;
  font-weight:bold;
  border:0px;
}
.el-collapse-item__content{
  padding-bottom:0px;
}
</style>

