import { random, shapes } from '../utils'
import { Module } from '../core/module'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.parentElem = document.querySelector('.container');
    this.closeBtn = document.createElement('span')
       this.closeBtn.addEventListener('click', (event) => {
        console.log('event', event);
        const {target} = event
        const container = target.closest('.container')
        container.remove()
      })
    //
  }

  clean() {
    const shapes = document.querySelectorAll('.shape')
    shapes.forEach(el => el.remove())
  }

  trigger() {
    
    if(!this.parentElem) {
     
      this.parentElem = document.createElement('div')
      this.parentElem.classList.add('container')
      const clean = document.createElement('span')
      
      this.closeBtn.classList.add('close')
      clean.classList.add('clear')
      clean.textContent = 'Clear'
      this.closeBtn.textContent = 'Close'
      clean.addEventListener('click', this.clean)
      
      this.parentElem.append(clean, this.closeBtn)
      document.body.append(this.parentElem)
  }
    
  

    const count = random(1, shapes.length - 1)
    shapes[count](this.parentElem)

    if(document.querySelector('#timer')) {
      document.querySelector('#timer').remove()
    }

    
    
  }
}