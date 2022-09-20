export { default as BasicUsage } from './basic.vue'
export { default as FitAvatarContainer } from './fit-container.vue'
export default {
  title: 'Avatar',
}

export const differentAvatarTypes = () => `
<div class="demo-type">
  <div>
    <el-avatar icon="el-icon-user-solid"></el-avatar>
  </div>
  <div>
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
  </div>
  <div>
    <el-avatar> user </el-avatar>
  </div>
</div>
`
export const fallbackWhenImageLoadsError = () => `
<div class="demo-type">
  <el-avatar :size="60" src="https://empty">
    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
  </el-avatar>
</div>
`
