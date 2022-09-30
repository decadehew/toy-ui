import type { App } from 'vue'
import ElButton from '@toy-ui/button'
import ElBadge from '@toy-ui/badge'
import ElTag from '@toy-ui/tag'
import ElDivider from '@toy-ui/divider'
import ElCard from '@toy-ui/card'
import ElTimeline from '@toy-ui/timeline'
import ElLayout from '@toy-ui/layout'
import ElProgress from '@toy-ui/progress'
import ElAvatar from '@toy-ui/avatar'
import ElBreadcrumb from '@toy-ui/breadcrumb'
import ElIcon from '@toy-ui/icon'
import ElLink from '@toy-ui/link'
import ElRate from '@toy-ui/rate'
import ElSwitch from '@toy-ui/switch'
import ElContainer from '@toy-ui/container'
import ElNotification from '@toy-ui/notification'
import ElBacktop from '@toy-ui/backtop'
import ElPageHeader from '@toy-ui/page-header'
import ElRadio from '@toy-ui/radio'
import ElCollapse from '@toy-ui/collapse'

export {
  ElButton,
  ElBadge,
  ElTag,
  ElDivider,
  ElCard,
  ElTimeline,
  ElLayout,
  ElProgress,
  ElAvatar,
  ElBreadcrumb,
  ElIcon,
  ElLink,
  ElRate,
  ElSwitch,
  ElContainer,
  ElNotification,
  ElBacktop,
  ElPageHeader,
  ElRadio,
  ElCollapse,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElTag(app)
  ElDivider(app)
  ElCard(app)
  ElTimeline(app)
  ElLayout(app)
  ElProgress(app)
  ElAvatar(app)
  ElBreadcrumb(app)
  ElIcon(app)
  ElLink(app)
  ElRate(app)
  ElSwitch(app)
  ElContainer(app)
  ElNotification(app)
  ElBacktop(app)
  ElPageHeader(app)
  ElRadio(app)
  ElCollapse(app)
}
