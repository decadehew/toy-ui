import type { App } from 'vue'
import ElButton from '@toy-ui/button'
import ElBadge from '@toy-ui/badge'
import ElTag from '@toy-ui/tag'

export {
  ElButton,
  ElBadge,
  ElTag,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElTag(app)
}
