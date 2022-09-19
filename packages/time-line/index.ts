import { App } from 'vue'
import TimeLine from './src/index.vue'
export default (app: App): void => {
  app.component(TimeLine.name, TimeLine)
}
