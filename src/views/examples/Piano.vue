<template>
  <div class="piano">

    <div class="control">
      <el-popover ref="popover" placement="bottom" width="600" trigger="click" v-model="visible">
        <el-row class="songlist" :gutter="20">
          <el-col :span="6" v-for="item in songData" :key="item.id">
            <el-button type="text" @:click="chooseSong">{{ item.id}}.{{ item.name}}</el-button>
          </el-col>
        </el-row>
      </el-popover>
      <!-- <el-button v-popover:popover type="text">看谱弹琴
                <i class="el-icon-caret-bottom"></i>
            </el-button> -->
      <el-checkbox v-model="full">完整键盘</el-checkbox>
    </div>
    <div class="keyboard">
      <group :group="0" :activateKey="activateKey" v-show="full"></group>
      <group :group="1" :activateKey="activateKey" v-show="full"></group>
      <group :group="2" :activateKey="activateKey"></group>
      <group :group="3" :activateKey="activateKey"></group>
      <group :group="4" :activateKey="activateKey"></group>
      <group :group="5" :activateKey="activateKey" v-show="full"></group>
      <group :group="6" :activateKey="activateKey" v-show="full"></group>
    </div>
    <div class="music">
      <h3>
        <span class="title">小星星</span>
      </h3>
      <div id="opern-info">
        <dl class="number">
          <dt>乐谱</dt>
          <dd>1</dd>
          <dd>1</dd>
          <dd>5</dd>
          <dd>5</dd>
          <dd>6</dd>
          <dd>6</dd>
          <dd>5</dd>
          <dd class="empty-pat"></dd>
          <dd>4</dd>
          <dd>4</dd>
          <dd>3</dd>
          <dd>3</dd>
          <dd>2</dd>
          <dd>2</dd>
          <dd>1</dd>
          <dd class="empty-pat"></dd>
          <dd>5</dd>
          <dd>5</dd>
          <dd>4</dd>
          <dd>4</dd>
          <dd>3</dd>
          <dd>3</dd>
          <dd>2</dd>
          <dd class="empty-pat"></dd>
          <dd>5</dd>
          <dd>5</dd>
          <dd>4</dd>
          <dd>4</dd>
          <dd>3</dd>
          <dd>3</dd>
          <dd>2</dd>
          <dd class="empty-pat"></dd>
          <dd>1</dd>
          <dd>1</dd>
          <dd>5</dd>
        </dl>
        <dl class="letter">
          <dt>键盘弹奏</dt>
          <dd>A</dd>
          <dd>A</dd>
          <dd>G</dd>
          <dd>G</dd>
          <dd>H</dd>
          <dd>H</dd>
          <dd>G</dd>
          <dd class="empty-pat"></dd>
          <dd>F</dd>
          <dd>F</dd>
          <dd>D</dd>
          <dd>D</dd>
          <dd>S</dd>
          <dd>S</dd>
          <dd>A</dd>
          <dd class="empty-pat"></dd>
          <dd>G</dd>
          <dd>G</dd>
          <dd>F</dd>
          <dd>F</dd>
          <dd>D</dd>
          <dd>D</dd>
          <dd>S</dd>
          <dd class="empty-pat"></dd>
          <dd>G</dd>
          <dd>G</dd>
          <dd>F</dd>
          <dd>F</dd>
          <dd>D</dd>
          <dd>D</dd>
          <dd>S</dd>
          <dd class="empty-pat"></dd>
          <dd>A</dd>
          <dd>A</dd>
          <dd>G</dd>
        </dl>
        <dl class="number">
          <dt>乐谱</dt>
          <dd>5</dd>
          <dd>6</dd>
          <dd>6</dd>
          <dd>5</dd>
          <dd class="empty-pat"></dd>
          <dd>4</dd>
          <dd>4</dd>
          <dd>3</dd>
          <dd>3</dd>
          <dd>2</dd>
          <dd>2</dd>
          <dd>1</dd>
        </dl>
        <dl class="letter">
          <dt>键盘弹奏</dt>
          <dd>G</dd>
          <dd>H</dd>
          <dd>H</dd>
          <dd>G</dd>
          <dd class="empty-pat"></dd>
          <dd>F</dd>
          <dd>F</dd>
          <dd>D</dd>
          <dd>D</dd>
          <dd>S</dd>
          <dd>S</dd>
          <dd>A</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from 'vue'
// import { DropdownMenu, Dropdown, DropdownItem } from "element-ui";
// Vue.use(DropdownMenu);
// Vue.use(Dropdown);
// Vue.use(DropdownItem);
//Vue.use(Row)
import { notes } from "@/assets/notes.js";
import Group from "@/components/Group";
const prefix = "data:audio/mpeg;base64,";
const groupKeys = 12;
const base = 2;
export default {
  components: {
    Group
  },
  data() {
    return {
      full: false,
      activateKey: 0,
      visible: false,
      song: {},
      songData: [
        {
          id: 1,
          name: "小星星",
          music: [
            "1,1,5,5,6,6,5",
            "4,4,3,3,2,2,1",
            "5,5,4,4,3,3,2",
            "5,5,4,4,3,3,2",
            "1,1,5",
            "5,6,6,5",
            "4,4,3,3,2,2,1"
          ],
          letter: [
            "AAGGHHG",
            "FFDDSSA",
            "GGFFDDS",
            "GGFFDDS",
            "AAG",
            "GHHG",
            "FFDDSSA"
          ]
        },
        {
          id: 2,
          name: "茉莉花"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "光阴的故事"
        },
        {
          id: 4,
          name: "找朋友"
        }
      ]
    };
  },
  methods: {
    chooseSong(id) {
      visible = false;
      //this.song = songData[id+1]
    },
    play(keyCode) {
      let keys = [
        90,
        88,
        67,
        86,
        66,
        78,
        77,
        65,
        83,
        68,
        70,
        71,
        72,
        74,
        81,
        87,
        69,
        82,
        84,
        89,
        85,
        49,
        50,
        51,
        52,
        53,
        54,
        55
      ];

      if (keys.indexOf(keyCode) < 0) {
        return;
      }
      let whites = [2, 4, 5, 7, 9, 11,12];
      let index =
        //base +
        2 * groupKeys +
        whites[keys.indexOf(keyCode) % 7] +
        parseInt(keys.indexOf(keyCode) / 7) * groupKeys;

      this.activateKey = index;
      console.log(this.activateKey);
      
      let audio = new Audio(prefix + notes[index]);
      audio.play();
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.body.addEventListener("keydown", e => {
        this.play(e.keyCode);
      });
    });
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
}
.keyboard {
  display: flex;
  margin: 20px;
  margin-top: 0px;
}
.control {
  text-align: right;
  padding-right: 30px;
}
.el-checkbox {
  vertical-align: middle;
}
.music {
  padding: 30px;
  padding-top: 0px;
  h3 {
    z-index: 1;
    position: relative;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
    color: #656565;
    background: #fbfbfb;
  }
  .number {
    margin-top: -1px;
    padding-top: 10px;
    border-top: 1px dotted #ddd;
    dd {
      color: #47b902;
    }
  }
  .letter {
    padding-bottom: 10px;
  }

  dl {
    overflow: hidden;
    zoom: 1;
    margin: 0 auto;
    width: 84%;
  }
  dt {
    display: inline;
    float: left;
    width: 56px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #989898;
  }
  dd {
    display: inline;
    position: relative;
    float: left;
    margin-left: 12px;
    width: 10px;
    height: 26px;
    line-height: 26px;
    font-size: 18px;
    font-family: arial;
    color: #7a7a7a;
  }
}
.piano-key {
  overflow: hidden;
  height: 38px;
  li {
    position: relative;
    float: left;
    width: 106px;
    line-height: 46px;
    font-size: 20px;
    text-align: center;
    font-family: arial;
    color: #e0e0e0;
  }
  .high-pat:after {
    position: absolute;
    top: -14px;
    left: 50%;
    margin-left: -3px;
    width: 5px;
    height: 5px;
    content: "•";
    font-size: 14px;
  }
}
</style>