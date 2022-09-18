import type { App } from 'vue'
import ButtonInstall from '@toy-ui/button/index'
import TagInstall from '@toy-ui/tag/index'

export const installAll = (app: App): void => {
  ButtonInstall(app)
  TagInstall(app)
}
