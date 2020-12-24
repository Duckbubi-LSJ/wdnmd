<template>
  <div class="sydiv">
    <div class="hsh1">
      <h1>{{btmag}}</h1>
    </div>
    <div class="jyggkk">
      <div class="jytoto">
        <div class="jygk">
          <p>经营概况</p>
        </div>
        <div class="jyimg">
          <img src="../assets/u358.png" alt />
        </div>
      </div>
      <div>
        <div class="dygums">
          <div class="lmdtp">
            <img src="../assets/u340.png" alt />
          </div>
          <div class="lmdwz">
            <p>今日参加活动人次</p>
            <div>18</div>
          </div>
        </div>

        <div class="deg">
          <div class="lmdtp2">
            <img src="../assets/u345.png" alt />
          </div>
          <div class="lmdwz2">
            <p>今日活动收入</p>
            <div>￥2330.00</div>
          </div>
        </div>

        <div class="dygums2">
          <div class="lmdtp">
            <img src="../assets/u340.png" alt />
          </div>
          <div class="lmdwz">
            <p>今日参加活动人次</p>
            <div>18</div>
          </div>
        </div>

        <div class="deg2">
          <div class="lmdtp2">
            <img src="../assets/u345.png" alt />
          </div>
          <div class="lmdwz2">
            <p>今日活动收入</p>
            <div>￥2330.00</div>
          </div>
        </div>
      </div>
    </div>
    <div class="jyggkk">
      <div class="jytoto">
        <div class="jygk">
          <p>经营概况</p>
        </div>
        <div class="jyimg">
          <img src="../assets/u358.png" alt />
        </div>
      </div>
      <div>
        <div class="dsu37s">
          <div class="dus1">
            <img src="../assets/u373.png" alt />
          </div>
          <div class="dus2">
            <p>12</p>
            <div>待付款订单</div>
          </div>
        </div>

        <div class="dsu37s">
          <div class="dus1">
            <img src="../assets/u368.png" alt />
          </div>
          <div class="dus2">
            <p>12</p>
            <div>待付款订单</div>
          </div>
        </div>
        <div class="dsu37s">
          <div class="dus1">
            <img src="../assets/u378.png" alt />
          </div>
          <div class="dus22">
            <p>14</p>
            <div>待回复客户</div>
          </div>
        </div>
      </div>
    </div>

    <div class="jyggkk2">
      <div class="jytoto">
        <div class="jygk">
          <p>收入趋势</p>
        </div>
        <div class="jyimg">
          <img src="../assets/u323.png" alt />
        </div>
      </div>
      <div id="tjt" style="width:100%; height:300px;"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btmag: "首页"
    };
  },
  mounted() {
    this.drawl();
  },
  methods: {
    drawl() {
      const echarts = require("echarts");
      let myChart = echarts.init(document.getElementById("tjt"));
      myChart.setOption({
        title: {
          text: "销量趋势图",
          x: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["销量"],
          x: "right"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",

          boundaryGap: false,
          data: [
            "08-1",
            "08-2",
            "08-3",
            "08-4",
            "08-5",
            "08-6",
            "08-7",
            "08-8",
            "08-9",
            "08-10",
            "08-11",
            "08-12"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "销量",
            type: "line",
            // 设置折线图颜色
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#4876FF"
                }
              }
            },
            stack: "总量",
            data: [1.3, 1.4, 1.9, 3, 5, 6, 7, 6, 5, 3, 2, 1.5]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.dus1 {
  float: left;
}
.dus22 {
  padding-left: 20px;
  margin-top: 10px;
  width: 170px;
  text-align: left;
  float: left;
}
.dus22 p {
  font-size: 20px;
  font-weight: 800;
}
.dus22 div {
  padding-top: 10px;
  font-size: 14px;
  color: #606266;
}

.dus2 {
  padding-left: 20px;
  margin-top: 10px;
  width: 170px;
  text-align: left;
  float: left;
  border-right: 0.5px solid #c0c4cc;
}
.dus2 p {
  font-size: 20px;
  font-weight: 800;
}
.dus2 div {
  padding-top: 10px;
  font-size: 14px;
  color: #606266;
}
.dsu37s {
  padding: 40px;
  float: left;
}
.lmdtp2 {
  float: left;
  padding: 20px;
  padding-right: 10px;
  padding-left: 10px;
}
.lmdwz2 {
  padding: 20px;
  color: white;
}
.lmdwz2 p {
  font-size: 10px;
}
.lmdwz2 div {
  padding-top: 10px;
  font-size: 20px;
  font-weight: 800;
}

.lmdwz {
  padding: 20px;
  color: white;
}
.lmdwz p {
  font-size: 10px;
}
.lmdwz div {
  padding-top: 10px;
  font-size: 27px;
  font-weight: 800;
}
.lmdtp {
  float: left;
  padding: 20px;
}
.deg2 {
  margin-top: 30px;
  margin-left: 50px;
  border-width: 0px;
  float: left;
  width: 210px;
  height: 103px;
  background: -webkit-linear-gradient(
    225deg,
    rgba(144, 247, 236, 1) 0%,
    rgba(144, 247, 236, 1) 0%,
    rgba(50, 204, 188, 1) 100%,
    rgba(50, 204, 188, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    rgba(144, 247, 236, 1) 0%,
    rgba(144, 247, 236, 1) 0%,
    rgba(50, 204, 188, 1) 100%,
    rgba(50, 204, 188, 1) 100%
  );
  background: linear-gradient(
    225deg,
    rgba(144, 247, 236, 1) 0%,
    rgba(144, 247, 236, 1) 0%,
    rgba(50, 204, 188, 1) 100%,
    rgba(50, 204, 188, 1) 100%
  );
  border: none;
  border-radius: 6px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.deg {
  float: left;
  border-width: 0px;
  margin-top: 30px;
  margin-left: 50px;
  width: 210px;
  height: 103px;
  background: -webkit-linear-gradient(
    125deg,
    rgba(255, 102, 153, 1) 0%,
    rgba(255, 102, 153, 1) 0%,
    rgba(255, 204, 153, 1) 100%,
    rgba(255, 204, 153, 1) 100%
  );
  background: -moz-linear-gradient(
    325deg,
    rgba(255, 102, 153, 1) 0%,
    rgba(255, 102, 153, 1) 0%,
    rgba(255, 204, 153, 1) 100%,
    rgba(255, 204, 153, 1) 100%
  );
  background: linear-gradient(
    325deg,
    rgba(255, 102, 153, 1) 0%,
    rgba(255, 102, 153, 1) 0%,
    rgba(255, 204, 153, 1) 100%,
    rgba(255, 204, 153, 1) 100%
  );
  border: none;
  border-radius: 6px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.dygums2 {
  float: left;
  border-width: 0px;
  margin-top: 30px;
  margin-left: 50px;
  width: 210px;
  height: 103px;
  background: -webkit-linear-gradient(
    225deg,
    rgba(255, 204, 102, 1) 0%,
    rgba(255, 204, 102, 1) 0%,
    rgba(248, 216, 0, 1) 100%,
    rgba(248, 216, 0, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    rgba(255, 204, 102, 1) 0%,
    rgba(255, 204, 102, 1) 0%,
    rgba(248, 216, 0, 1) 100%,
    rgba(248, 216, 0, 1) 100%
  );
  background: linear-gradient(
    225deg,
    rgba(255, 204, 102, 1) 0%,
    rgba(255, 204, 102, 1) 0%,
    rgba(248, 216, 0, 1) 100%,
    rgba(248, 216, 0, 1) 100%
  );
  border: none;
  border-radius: 6px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.dygums {
  float: left;
  border-width: 0px;
  margin-top: 30px;
  margin-left: 50px;
  width: 210px;
  height: 103px;
  background: -webkit-linear-gradient(
    125deg,
    rgba(153, 0, 255, 1) 0%,
    rgba(153, 0, 255, 1) 0%,
    rgba(153, 153, 255, 1) 100%,
    rgba(153, 153, 255, 1) 100%
  );
  background: -moz-linear-gradient(
    325deg,
    rgba(153, 0, 255, 1) 0%,
    rgba(153, 0, 255, 1) 0%,
    rgba(153, 153, 255, 1) 100%,
    rgba(153, 153, 255, 1) 100%
  );
  background: linear-gradient(
    325deg,
    rgba(153, 0, 255, 1) 0%,
    rgba(153, 0, 255, 1) 0%,
    rgba(153, 153, 255, 1) 100%,
    rgba(153, 153, 255, 1) 100%
  );
  border: none;
  border-radius: 6px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
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
  padding-left: 10px;
  float: left;
}
.jyggkk2 {
  border-width: 0px;
  margin-top: 20px;
  width: 1100px;
  height: 355px;
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
.jyggkk {
  border-width: 0px;
  margin-top: 20px;
  width: 1100px;
  height: 215px;
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