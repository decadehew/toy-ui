import type { App } from 'vue'
import ElButton from '@toy-ui/button'
import ElBadge from '@toy-ui/badge'
import ElTag from '@toy-ui/tag'
import ElDivider from '@toy-ui/divider'
import ElCard from '@toy-ui/card'
import ElTimeLine from '@toy-ui/time-line'

export {
  ElButton,
  ElBadge,
  ElTag,
  ElDivider,
  ElCard,
  ElTimeLine,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElTag(app)
  ElDivider(app)
  ElCard(app)
  ElTimeLine(app)
}
