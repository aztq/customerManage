<template>
<el-tree
  :data="data"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]">
</el-tree>
</template>
<script>
export default {
  data() {
      return {
        data: [{
          id: 1,
          label: '上海市投资建设局',
          children: [{
            id: 3,
            label: '上海市宝钢'
           }, {
            id: 2,
            label: '中山',
            children: [{
              id: 6,
              label: '有限公司'
             }, {
              id: 7,
              label: '麻醉',
            }]
           }, {
             id: 4,
             label: '上海港口',
             children:[
               {
                id:'5',
                label:'医疗'
               }
             ]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
}
</script>
<style lang="less" scoped>
.el-tree{
  position:absolute;
  width:100% !important;
  height:100%;
  background:white;
}

</style>
<style>

</style>
