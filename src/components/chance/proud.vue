<template>
 <div id="all">
  <header>
    <icon type="search"></icon>
    <input type="text" placeholder="search">
    <span @click='change()'>筛选</span>
  </header>
  <div id="container">
    <div class='show' v-for='(item,index) in list' :key=index>
      <aside class="right">
        <h4>{{item.sub}}</h4>
        <span><li style='margin:0.4rem 0 0 0'>{{item.company}}</li><button style='float:right;color:white;border:0px;font-size:0.65rem;'>{{item.situation}}</button></span><br><br>
        <span><li>所在地</li><li style='margin:0 0 0 1rem'>{{item.where}}</li>
         <li style='float:right;margin:0 0.3rem 0 0'>{{item.date}}</li></span>
      </aside>
      <aside class="left">
        <span>{{item.title}}</span>
      </aside>
    </div>
   </div>
    
  <div>
  <popup v-model="show" position="top">
    <section>
      <h4>商机类型</h4>
      <flexbox :gutter="0" wrap="wrap">
       <flexbox-item v-for='(item,index) in businessType' :key=index>
        <div class='common' :class="{choose:index===businessJudge}" @click='notice1(index)'>{{item}}</div>
       </flexbox-item>
      </flexbox>

      <h4>紧急程度</h4>
      <flexbox :gutter="0" wrap="wrap">
       <flexbox-item v-for='(item,index) in emergency' :key=index>
        <div class='common' :class="{choose:index===emergencyJudge}" @click='notice2(index)'>{{item}}</div>
       </flexbox-item>
      </flexbox>
      
      <h4>所在地</h4>
      <flexbox :gutter="0" wrap="wrap">
       <flexbox-item v-for='(item,index) in district' :key=index>
        <div class='common' :class="{choose:index===districtJudge}" @click='notice3(index)'>{{item}}</div>
       </flexbox-item>
      </flexbox>
      <div class="mad">
        <span class='left' @click='reset()'>恢复默认</span>
        <span class='right' @click='exit()'>确认</span>
      </div>
    </section>
    </popup>
    </div>
 </div>
</template>
<script>
import { Flexbox ,FlexboxItem ,Popup} from 'vux'
export default {
  components:{
    Flexbox,FlexboxItem,Popup
  },
  data(){
    return {
     list:[
      {title:'商机类型',sub:'融资5000万',company:'安徽汽车',where:'四川-成都',situation:'特急',date:'2018-01-04'},
      {title:'第三方资金',sub:'融资5000万',company:'安徽汽车',where:'四川-成都',situation:'特急',date:'2018-01-04'}
      ],
      businessType:['全部','类型','类型','类型'],
      emergency:['全部','类型','类型','类型'],
      district:['全部','北京市','上海市','天津市'],
      show:false,
      businessJudge:0,
      emergencyJudge:0,
      districtJudge:0
    }
  },
  methods:{
    change(){
      this.show=!this.show;
    },
    notice1(index){
      //alert('index='+index)
      this.businessJudge=index;
      //alert(this.manageJudge)
    },
    notice2(index){
      this.emergencyJudge=index;
    },
    notice3(index){
      this.districtJudge=index;
    },
    reset(){
      this.businessJudge=0;
      this.emergencyJudge=0;
      this.districtJudge=0;
      console.log(this.businessJudge)
    },
    exit(){
      this.show=false;
    }
  } 
}
</script>
<style lang="less" scoped>
#all{
  background:white;
}
header{
  padding:0.5rem;
  background:#f3f3f3;
  font-size:0.7rem;
  input{
    border:1px #dfdfe1 solid;
    border-radius:15px;
    background:#dfdfe1;
    padding-left:1.5rem;
    height:30px;
    margin-left:0.5rem;
    width:60%;
  }
  span{
    margin-left:1rem;
  }
  i{
    margin:0.5rem 0 0 1rem;
    position:absolute;
  }
}
#container{
  background:white;
}
.show{
  height:100px !important;
  background:#989898;    
  overflow:hidden;
  margin:1rem 0;
  .left{
  width:6%;
  padding:0.4rem 0.5rem 0 0.8rem;;
  position:absolute;
  font-size:0.7rem;
  height:70px;
  }
  .right{
  float:left;
  width:85%;
  margin:0 0 0 2rem;
  border:1px blue solid;
  border-radius:10px 0 0 10px;
  padding:0.4rem 1rem 0 0.5rem;
  font-size:0.7rem;
  height:90px;
  background:white;
  button{
    background:rgb(241, 90, 90);
    padding:0.1rem 0.5rem;
    font-size:0.5rem;
    margin-right:0.3rem;
  }
  li{
    float:left;
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
}
.mad{
  font-size:0.7rem;
  color:blue;
  height:1rem;
  .left{
    float:left;
  }
  .right{
    float:right;
  }
}
</style>
