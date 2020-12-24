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
            <div class="srnr">输入内容：</div>

            <div class="wbk">
              <el-input v-model="srnr" placeholder="输入轮播图标题......"></el-input>
            </div>
          </div>

          <div class="srss">
            <div class="srnr2">输入内容：</div>

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

          <div class="srss">
            <div class="us450">
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
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="first">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
            >
              <el-table-column type="selection" width="85"></el-table-column>

              <el-table-column prop="lbname" label="订单编号" width="100"></el-table-column>

              <el-table-column prop="msms" label="用户微信昵称" width="110"></el-table-column>
              <el-table-column prop="name" label="用户手机号码" width="110"></el-table-column>
              <el-table-column prop="kcmc" label="课程名称" width="100"></el-table-column>
              <el-table-column prop="kcbh" label="课程编号" width="100"></el-table-column>
              <el-table-column prop="ddje" label="订单金额（元）" width="100"></el-table-column>
              <el-table-column prop="ddzt" label="订单状态" width="100"></el-table-column>
              <el-table-column label="提交时间" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template>
                  <el-button size="mini">查看订单</el-button>
                  <el-button size="mini" :plain="true" @click="open2">取消订单</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="second">
            <el-table
              ref="multipleTable"
              :data="tableData2"
              tooltip-effect="dark"
              style="width: 100%"
            >
              <el-table-column type="selection" width="85"></el-table-column>

              <el-table-column prop="lbname" label="订单编号" width="100"></el-table-column>

              <el-table-column prop="msms" label="用户微信昵称" width="110"></el-table-column>
              <el-table-column prop="name" label="用户手机号码" width="110"></el-table-column>
              <el-table-column prop="kcmc" label="课程名称" width="100"></el-table-column>
              <el-table-column prop="kcbh" label="课程编号" width="100"></el-table-column>
              <el-table-column prop="ddje" label="订单金额（元）" width="100"></el-table-column>
              <el-table-column prop="ddzt" label="订单状态" width="100"></el-table-column>
              <el-table-column label="提交时间" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template>
                  <el-button size="mini">查看订单</el-button>
                  <el-button size="mini" :plain="true" @click="open2">取消订单</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="学习中" name="third">
            <el-table
              ref="multipleTable"
              :data="tableData3"
              tooltip-effect="dark"
              style="width: 100%"
            >
              <el-table-column type="selection" width="85"></el-table-column>

              <el-table-column prop="lbname" label="订单编号" width="100"></el-table-column>

              <el-table-column prop="msms" label="用户微信昵称" width="110"></el-table-column>
              <el-table-column prop="name" label="用户手机号码" width="110"></el-table-column>
              <el-table-column prop="kcmc" label="课程名称" width="100"></el-table-column>
              <el-table-column prop="kcbh" label="课程编号" width="100"></el-table-column>
              <el-table-column prop="ddje" label="订单金额（元）" width="100"></el-table-column>
              <el-table-column prop="ddzt" label="订单状态" width="100"></el-table-column>
              <el-table-column label="提交时间" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template>
                  <el-button size="mini">查看订单</el-button>
                  <el-button size="mini" :plain="true" @click="open2">取消订单</el-button>
                  <el-button class="jsck" size="mini" :plain="true" @click="open2">结束课程</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已完成" name="fourth">
            <el-table
              ref="multipleTable"
              :data="tableData4"
              tooltip-effect="dark"
              style="width: 100%"
            >
              <el-table-column type="selection" width="85"></el-table-column>

              <el-table-column prop="lbname" label="订单编号" width="100"></el-table-column>

              <el-table-column prop="msms" label="用户微信昵称" width="110"></el-table-column>
              <el-table-column prop="name" label="用户手机号码" width="110"></el-table-column>
              <el-table-column prop="kcmc" label="课程名称" width="100"></el-table-column>
              <el-table-column prop="kcbh" label="课程编号" width="100"></el-table-column>
              <el-table-column prop="ddje" label="订单金额（元）" width="100"></el-table-column>
              <el-table-column prop="ddzt" label="订单状态" width="100"></el-table-column>
              <el-table-column label="提交时间" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template>
                  <el-button size="mini">查看订单</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已关闭" name="ygb">
            <el-table
              ref="multipleTable"
              :data="tableData5"
              tooltip-effect="dark"
              style="width: 100%"
            >
              <el-table-column type="selection" width="85"></el-table-column>

              <el-table-column prop="lbname" label="订单编号" width="100"></el-table-column>

              <el-table-column prop="msms" label="用户微信昵称" width="110"></el-table-column>
              <el-table-column prop="name" label="用户手机号码" width="110"></el-table-column>
              <el-table-column prop="kcmc" label="课程名称" width="100"></el-table-column>
              <el-table-column prop="kcbh" label="课程编号" width="100"></el-table-column>
              <el-table-column prop="ddje" label="订单金额（元）" width="100"></el-table-column>
              <el-table-column prop="ddzt" label="订单状态" width="100"></el-table-column>
              <el-table-column label="提交时间" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template>
                  <el-button size="mini">查看订单</el-button>
                  <el-button size="mini" :plain="true" @click="open2">删除订单</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
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
      btmag: "订单管理",
      srnr: "",
      value1: "",
      activeName: "first",
      tableData: [
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "学习中"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "已完成"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "已关闭"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        }
      ],
      tableData2: [
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        }
      ],
      tableData3: [
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "学习中"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "学习中"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "学习中"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "学习中"
        }
      ],
      tableData4: [
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        }
      ],
      tableData5: [
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "18541263699",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "Cassy",
          kcmc: "幼儿英语入门课程",
          kcbh: "201920236",
          ddje: "2399.00",
          ddzt: "待付款"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
.jsck {
  margin-top: 10px;
  margin-left: 0px;
}
.fys {
  position: absolute;
  top: 900px;
  right: 400px;
  float: right;
}
.typebege {
  margin-left: 20px;
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
  height: 137px;
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