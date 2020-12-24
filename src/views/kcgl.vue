<template>
  <div class="sydiv">
    <div class="hsh1">
      <h1>{{btmag}}</h1>
    </div>
    <div>
      <div class="tosoto">
        <div class="jytoto">
          <div class="jyimg">
            <img src="../assets/u453.png" alt />
          </div>
          <div class="jygk">
            <p>筛选</p>
          </div>
        </div>

        <div class="bdnr">
          <div class="srss">
            <div class="srnr">课程状态*：</div>

            <div class="wbk">
              <el-select v-model="xxka" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>

          <div class="srss">
            <div class="srnr2">上传时间：</div>

            <div class="wbk">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
          </div>
        </div>
        <div>
          <div class="srss">
            <div class="srnr">输入搜索：</div>

            <div class="wbk">
              <el-input v-model="srnr" placeholder="输入课程标题关键字......"></el-input>
            </div>
          </div>
          <div class="srss">
            <div class="us4502">
              <img src="../assets/u450.png" alt />
              筛选
            </div>
            <div class="qksxtj">清空筛选条件</div>
          </div>
        </div>
      </div>
    </div>
    <div class="jyggkk2">
      <div class="jytoto">
        <div class="jyimg">
          <img src="../assets/u434.png" alt />
        </div>
        <div class="jygk">
          <p>轮播图列表</p>
        </div>
        <div class="xzlbt2">
          <img src="../assets/u441.png" alt /> 回收站
        </div>
        <div class="xzlbt">
          <img src="../assets/u438.png" alt /> 新增轮播图
        </div>
      </div>

      <div class="typebege">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="85"></el-table-column>

          <el-table-column prop="lbname" label="编号" width="100"></el-table-column>
          <el-table-column prop="lbname" label="课程名称" width="100"></el-table-column>
          <el-table-column prop="name" label="列表图" width="100">
            <img style="width: 97px;
    height: 54px;" src="../assets/u999.png" alt />
          </el-table-column>
          <el-table-column prop="name" label="课程上架" width="100"></el-table-column>
          <el-table-column prop="name" label="报名费（元）" width="100"></el-table-column>
          <el-table-column prop="name" label="销量" width="100"></el-table-column>
          <el-table-column prop="name" label="上传人" width="100"></el-table-column>
          <el-table-column label="上传时间" width="100">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template>
              <el-button size="mini">编辑</el-button>
              <el-button size="mini" :plain="true" @click="open2">加入回收站</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="fys">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btmag: "课程管理",
      srnr: "",
      value1: "",

      tableData: [
        {
          date: "201-01-25 10:55",
          lbname: "banner",
          name: "Daisy",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "201-01-25 10:55",
          lbname: "banner",
          name: "Daisy",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "201-01-25 10:55",
          lbname: "banner",
          name: "Daisy",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "201-01-25 10:55",
          lbname: "banner",
          name: "Daisy",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "201-01-25 10:55",
          lbname: "banner",
          name: "Daisy",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      options: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "上架"
        },
        {
          value: "选项3",
          label: "下架"
        }
      ],
      xxka: "全部"
    };
  },
  methods: {
    open2() {
      this.$message({
        message: "   加入回收站成功！",
        type: "success"
      });
    }
  }
};
</script>
<style scoped>
.fys {
  margin-top: 40px;
  margin-right: 50px;
  float: right;
}
.typebege {
  margin-top: 30px;
}
.xzlbt2 {
  width: 87px;
  text-align: center;
  height: 32px;
  line-height: 32px;
  background: inherit;
  background-color: rgba(22, 155, 213, 0);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(145, 55, 243, 1);
  border-radius: 3px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 12px;
  color: #9137f3;
  float: right;
  margin-left: 20px;
  margin-right: 20px;
}
.xzlbt2 img {
  padding-left: 10px;
}
.xzlbt {
  width: 107px;
  text-align: center;
  height: 32px;
  line-height: 32px;
  background: inherit;
  background-color: rgba(22, 155, 213, 0);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(145, 55, 243, 1);
  border-radius: 3px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 12px;
  color: #9137f3;
  float: right;
}
.xzlbt img {
  padding-left: 10px;
}
.jyggkk2 {
  border-width: 0px;
  margin-top: 20px;
  width: 1100px;
  height: 655px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(228, 228, 228, 1);
  border-radius: 5px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.qksxtj {
  float: left;
  margin-left: 20px;
  color: rgba(145, 55, 243, 1);
  font-size: 14px;
}
.us4502 {
  float: left;
  width: 98px;
  height: 36px;
  background: inherit;
  background-color: rgba(145, 55, 243, 1);
  border: none;
  border-radius: 3px;

  margin-left: 50px;
  line-height: 36px;
  color: white;
  font-size: 14px;
}
.us4502 img {
  padding-left: 20px;
}
.us450 {
  float: left;
  width: 98px;
  height: 36px;
  background: inherit;
  background-color: rgba(145, 55, 243, 1);
  border: none;
  border-radius: 3px;
  margin-top: 20px;
  margin-left: 50px;
  line-height: 36px;
  color: white;
  font-size: 14px;
}
.us450 img {
  padding-left: 20px;
}
.bdnr {
  height: 100px;
  line-height: 70px;
}
.srss {
  float: left;
}
.srnr2 {
  padding-left: 60px;
  padding-right: 10px;
  font-size: 13px;
  float: left;
}
.srnr {
  padding-left: 20px;
  padding-right: 10px;
  font-size: 13px;
  float: left;
}
.wbk {
  float: left;
}
.jytoto {
  padding-left: 16px;
  padding-top: 16px;
  height: 20px;
  line-height: 20px;
}
.jygk {
  font-size: 14px;
  color: #606266;
  float: left;
}
.jyimg {
  padding-right: 10px;
  float: left;
}
.jyimg img {
  width: 16px;
  height: 16px;
}
.tosoto {
  border-width: 0px;
  margin-top: 20px;
  width: 1100px;
  height: 197px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(228, 228, 228, 1);
  border-radius: 2px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hsh1 {
  margin-top: 10px;
  color: #9137f3;
}
.sydiv {
  width: 75%;
  height: 900px;
  background: #fbfbfb;
  padding-left: 25%;
}
</style>