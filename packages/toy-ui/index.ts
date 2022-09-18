import type { App } from 'vue'
import ElButton from '@toy-ui/button'
import ElBadge from '@toy-ui/badge'
import ElTag from '@toy-ui/tag'
import ElDivider from '@toy-ui/divider'

export {
  ElButton,
  ElBadge,
  ElTag,
  ElDivider,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElTag(app)
  ElDivider(app)
}
