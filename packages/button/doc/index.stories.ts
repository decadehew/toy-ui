// import ElButton from '../index'

export default {
  title: 'Button',
  // component: ElButton
}

export const NormalButton = (): string => {
  // return {
  //   template: '<el-button>With Text</el-button>',
  //   installer: ElButton
  // }

  return '<el-button>With Text</el-button>'
}

export const ButtonTwo = (): string => {
  // return {
  //   template: '<el-button>button two</el-button>',
  //   installer: ElButton
  // }

  return '<el-button>button two</el-button>'
}

export const ButtonGroup = (): string => `<el-button-group>
<el-button type="primary" icon="el-icon-arrow-left">Left</el-button>
<el-button type="primary">Right<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>`
