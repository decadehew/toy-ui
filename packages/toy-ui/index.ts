import type { App } from 'vue'
import ElButton from '@toy-ui/button'
import ElBadge from '@toy-ui/badge'

export {
  ElButton,
  ElBadge
}

export default function install(app: App) {
  ElButton(app)
  ElBadge(app)
}
