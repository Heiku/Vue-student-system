<template>
    <div id="">
        <el-collapse v-for="item in grade" v-model="activeName" accordion="">
            <el-collapse-item :title="item.className">
                <el-tag class="info-tag">{{ item.teacherName }}</el-tag>
                <el-tag class="info-tag" type="primary">{{ item.theoryClass }}</el-tag>
                <el-tag class="info-tag" type="primary">{{ item.testClass }}</el-tag>
                <el-table :data="item.data" style="width:100%">
                  <el-table-column prop="sort" label="平时成绩来源" width="180"></el-table-column>
                  <el-table-column prop="percentage" label="占总评成绩百分比" width="180"></el-table-column>
                  <el-table-column prop="max" label="最高分" width="150"></el-table-column>
                  <el-table-column prop="grade" label="成绩" width="150"></el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
    </div>     
</template>


<script>
    export default {
    props: {
      grade:{
        type: Array,
        default: []
      }
    },
    data() {
      return {
        activeName: ''
      };
    },
    methods: {
    },
    computed: {
      
    }
  };
</script>

<style scoped>

  .info-tag{
    margin-bottom: 10px;
  }
</style>
