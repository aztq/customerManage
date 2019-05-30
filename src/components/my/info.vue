<template>
  <div class="container">
    <header>
      <img src="../../assets/tuohai.jpg" width=30% alt="" srcset=""><br>
      <span style='font-weight:700;color:#007AFF;font-size:0.9rem;'>张军华</span><br>
      <span style='color:grey;font-size:0.6rem;'>工号：ABCD</span>
    </header>
    <main>
      <div class="noway"><li class="special"></li><span class="content">我的信息</span></div>
      <table v-for='(item,index) in value1' :key=item.key>
      <tr>
        <td class='left'>{{item.key}}</td>
        <td class='right'>{{item.value}}</td>
      </tr>
    </table>
    </main>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value1:[
          {key:'邮箱',value:'example@outlook.com'},
          {key:'手机',value:'188-888-888'},
          {key:'部门',value:'GID'},
          {key:'职务',value:'PM'},
        ]
    }
  },
  components:{
    
  }
}
</script>
<style lang="less" scoped>
header{
  text-align:center;
  padding:0.5rem 0.5rem 1rem 0.5rem;
  img{
    z-index:1;
    margin:1rem 0 0.5rem 0;
  }
}
table{
  tr{
    border-top:1px rgb(238, 209, 209) solid;
    width:100%;
  }
  .left{
    width:6rem;
    padding:0.5rem 0;
    font-size:0.6rem;
    opacity: 0.8;
    text-align:center;
    color:grey;
  }
  .right{
    padding-left:0.9rem;
    font-size:0.75rem;
    width:73%;
  }
}
main{
  background:white;
  min-height:80vh;
}
</style>
