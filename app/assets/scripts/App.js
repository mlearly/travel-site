import '../styles/styles.css'
import MobMenu from './modules/MobMenu'
import RevealOnScroll from './modules/RevealOnScroll'

let mobileMenu = new MobMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

if(module.hot) {
  module.hot.accept();
}
