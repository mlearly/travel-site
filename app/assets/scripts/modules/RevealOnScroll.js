import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
  constructor(elements, thresholdPercent) {
    this.itemsToReveal = elements;
    this.thresholdPercent = thresholdPercent;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 300).bind(this);
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
    window.addEventListener('resize', debounce(() => {
      // console.log('Resized just ran');
      this.browserHeight = window.innerHeight;
    }, 300))
  }

  calcCaller() {
    // console.log('scroll function ran');
    this.itemsToReveal.forEach(el => {
      if(el.isRevealed == false) {
        this.calculateIfScrolledTo(el)
      }
    });
  }

  calculateIfScrolledTo(el) {
    if(window.scrollY + this.browserHeight > el.offsetTop) {
      // console.log('element was calculated');
      let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
      if(scrollPercent < this.thresholdPercent) {
        el.classList.add('reveal-item--is-visible');
        if(el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => {
      el.classList.add('reveal-item');
      el.isRevealed = false;
    })
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll;
