<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl" /></div>
        <div v-for="size in sizeList" :key="size" class="block">
          <el-avatar :size="size" :src="circleUrl" />
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl" /></div>
        <div v-for="size in sizeList" :key="size" class="block">
          <el-avatar shape="square" :size="size" :src="squareUrl" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
export default {
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small'],
    }
  },
}
</script>


<style scoped>
.demo-avatar .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #8492a6;
  text-align: center;
}
.demo-avatar.demo-basic .demo-basic--circle,
.demo-avatar.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-avatar.demo-basic .demo-basic--circle .block:not(:last-child),
.demo-avatar.demo-basic .demo-basic--square .block:not(:last-child) {
  flex: 1;
  border-right: 1px solid rgba(224,230,237,.5);
  text-align: center;
}
</style>
