<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary">按钮</el-button>
    <el-button type="success">按钮</el-button>
    <el-button type="warning">按钮</el-button>
    <el-button>按钮</el-button>
     <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </el-date-picker>

     <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
     <el-select multiple v-model="value55" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <Table :tableData="tableData" :dataArr="dataArr">
      <template slot="girl" slot-scope="props">
      <div class="namexxx ellipsis">
        {{props.text}}
      </div> 
        </template>
    </Table>
  </div>
  
</template>


<script>
import Table from 'views/common/Table'
export default {
  data() {
    return {
      value2:'',
      value55:[],
      dataArr: [
        { name: "姓名", code: "name", fixed: "left" },
        { name: "地址", code: "date" },
        { name: "地址", type: "girl", code: "address" },
        { name: "日期", code: "address" }
      ],
      tableData:[{name:121,date:5656},{name:121,date:5656}],
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    };
  },components:{
    Table
  }
};
</script>


<style scoped lang="stylus">
h1 {
  color: red;
}
</style>