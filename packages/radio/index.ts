import { App } from 'vue'
import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'
export default (app: App): void => {
  app.component(Radio.name, Radio)
  app.component(RadioButton.name, RadioButton)
  app.component(RadioGroup.name, RadioGroup)
}
