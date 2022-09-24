import { App } from 'vue'
import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'
import Footer from './src/footer.vue'


export default (app: App): void => {
  app.component(Container.name, Container)
  app.component(Aside.name, Aside)
  app.component(Header.name, Header)
  app.component(Main.name, Main)
  app.component(Footer.name, Footer)
}
