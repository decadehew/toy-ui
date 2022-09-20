import type { App } from 'vue'
import ElButton from '@toy-ui/button'
import ElBadge from '@toy-ui/badge'
import ElTag from '@toy-ui/tag'
import ElDivider from '@toy-ui/divider'
import ElCard from '@toy-ui/card'
import ElTimeLine from '@toy-ui/time-line'
import ElLayout from '@toy-ui/layout'
import ElProgress from '@toy-ui/progress'

export {
  ElButton,
  ElBadge,
  ElTag,
  ElDivider,
  ElCard,
  ElTimeLine,
  ElLayout,
  ElProgress,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElTag(app)
  ElDivider(app)
  ElCard(app)
  ElTimeLine(app)
  ElLayout(app)
  ElProgress(app)
}
