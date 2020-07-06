import '../styles/styles.css'
import MobMenu from './modules/MobMenu'

let mobileMenu = new MobMenu();

if(module.hot) {
  module.hot.accept();
}
