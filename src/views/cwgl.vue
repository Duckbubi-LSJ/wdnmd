<template>
  <div class="sydiv">
    <div class="hsh1">
      <h1>{{btmag}}</h1>
    </div>
    <div>
      <div class="tosoto">
        <div class="jytoto">
          <div style="height:40px;">
            <div class="jyimg">
              <img src="../assets/u4958.png" alt />
            </div>
            <div class="jygk">
              <p>财务统计</p>
            </div>
          </div>
          <div class="ddzes">
            <div class="zzzzdd">
              订单总额：¥
              <span>322000.00</span>
            </div>
            <div class="yyyyzs">
              订单总数：
              <span>322</span>
            </div>
          </div>
          <div class="jyimg">
            <img src="../assets/u453.png" alt />
          </div>

          <div class="jygk">
            <p>筛选</p>
          </div>
        </div>

        <div class="bdnr">
          <div class="ddzt">
            订单状态：
            <el-checkbox>待支付</el-checkbox>
            <el-checkbox>已关闭</el-checkbox>
            <el-checkbox>学习中</el-checkbox>
            <el-checkbox>已完成</el-checkbox>
          </div>
          <div class="ddfl">
            订单分类：
            <el-checkbox>课程订单</el-checkbox>
            <el-checkbox>活动订单</el-checkbox>
          </div>
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
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="85"></el-table-column>

          <el-table-column prop="lbname" label="订单编号" width="150"></el-table-column>

          <el-table-column prop="msms" label="订单分类" width="150"></el-table-column>
          <el-table-column prop="name" label="标题" width="150"></el-table-column>
          <el-table-column prop="ddje" label="订单金额" width="150"></el-table-column>
          <el-table-column prop="ddzt" label="订单状态" width="150"></el-table-column>
          <el-table-column label="上传时间" width="150">
            <template slot-scope="scope">{{ scope.row.date }}</template>
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
      btmag: "财务管理",
      srnr: "",
      value1: "",
      tableData: [
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "幼儿英语课程",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "课程订单",
          ddje: "￥2366.00",
          ddzt: "待支付"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "幼儿英语课程",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "课程订单",
          ddje: "￥2366.00",
          ddzt: "待支付"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "幼儿英语课程",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "课程订单",
          ddje: "￥2366.00",
          ddzt: "待支付"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "幼儿英语课程",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "课程订单",
          ddje: "￥2366.00",
          ddzt: "待支付"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "幼儿英语课程",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "课程订单",
          ddje: "￥2366.00",
          ddzt: "待支付"
        },
        {
          date: "201-01-25 10:55",
          lbname: "2019030102369669",
          name: "幼儿英语课程",
          address: "上海市普陀区金沙江路 1518 弄",
          msms: "课程订单",
          ddje: "￥2366.00",
          ddzt: "待支付"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {}
};
</script>
<style scoped>
.ddzes {
  height: 50px;
}
.zzzzdd {
  float: left;
  font-size: 14px;
}
.zzzzdd span {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-size: 16px;
  color: #ff0000;
}
.yyyyzs {
  margin-left: 30px;
  float: left;
  font-size: 14px;
}
.yyyyzs span {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-size: 16px;
  color: #ff0000;
}
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
.us450 {
  float: left;
  width: 98px;
  height: 36px;
  background: inherit;
  background-color: rgba(145, 55, 243, 1);
  border: none;
  border-radius: 3px;
  margin-top: 7px;
  margin-left: 50px;
  line-height: 36px;
  color: white;
  font-size: 14px;
}
.us450 img {
  padding-left: 20px;
}
.ddzt {
  margin-left: 20px;
  font-size: 14px;
}
.ddfl {
  font-size: 14px;
  margin-left: 20px;
}
.bdnr {
  margin-top: 100px;
  height: 100px;
  line-height: 50px;
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
  height: 337px;
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
  height: 1200px;
  background: #fbfbfb;
  padding-left: 25%;
}
</style>