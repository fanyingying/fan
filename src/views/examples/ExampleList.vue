<template>
  <div>
      <div class="fan-title">
        <h1>
          <a href="/">Fan's Works</a>
        </h1>
        <p class="subtitle">前端作品库</p>
      </div>
      <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
      <div class="ex-list">
        <el-row :gutter="20">
          <el-col :sm="12" :md="8" :lg="6" v-for="item in exampleList" :key="item.id">
            <div class="thumbnail">
              <a :href="item.url" :title="item.name" target="_blank">
                <img class="lazy" :src="''+item.img" width="300" height="150" :alt="item.name">
              </a>
              <div class="caption">
                <h3>
                  <a :href="item.url" :title="item.name" target="_blank">
                    {{ item.name }}
                  </a>
                </h3>
                <p>{{ item.subtitle }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      </div>
</template>
<script>
import {exampleList} from '@/utils/exampleList.js'
export default {
  data() {
    return {
      exampleList:exampleList,
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" >
body {
  background-color: #eee;
}
.header {
  display: none;
}
.tabs {
  display: none;
}
.fan-title {
  text-align: center;
  border-bottom: 1px solid #cec7c7;
  width: 60%;
  margin: 0 auto;
  padding-bottom: 10px;
  padding-top: 20px;
  h1 {
    font-size: 40px;
    line-height: 50px;
    margin: 0;
    a {
      font-weight: 400;
      color: #333;
      font-family: "Nixie One", sans-serif;
      &:hover {
        color: #337ab7;
      }
    }
  }
  .subtitle {
    font-size: 16px;
    line-height: 30px;
  }
}

.ex-list {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.thumbnail {
  display: block;
  height: 300px;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 310px;
  margin-bottom: 30px;
  border-radius: 0;
  img {
    max-width: 100%;
    height: auto;
  }
  .caption {
    padding: 9px;
    height: 200px;
    overflow-y: hidden;
    color: #555;
    h3 a {
      font-size: 24px;
      color: #337ab7;
    }
    p{
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
