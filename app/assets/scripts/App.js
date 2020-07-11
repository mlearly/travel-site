import '../styles/styles.css'
import 'lazysizes'
import MobMenu from './modules/MobMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

// React Related code start
import React from 'react'
import ReactDom from 'react-dom'

// Import React compontents
import MyReactComponent from './modules/MyReactComponent'

ReactDom.render(<MyReactComponent />, document.querySelector('#react-example'))
// React Related code end

new ClientArea();
new StickyHeader();
new MobMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
let modal

document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();

    if(typeof modal == 'undefined') {
      import(/* webpackChunkName: "Modal" */'./modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openModal(), 20)
      }).catch(() => console.log('there was a problem'));
    } else {
      modal.openModal();
    }
  })
})

if(module.hot) {
  module.hot.accept();
}
