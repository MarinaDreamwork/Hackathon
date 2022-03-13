import { random, shapes } from '../utils'
import { Module } from '../core/module'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.parentElem = document.querySelector('.container')
   

   
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
      const closeBtn = document.createElement('span')
      closeBtn.classList.add('close')
      clean.classList.add('clear')
      clean.textContent = 'Clear'
      closeBtn.textContent = 'Close'
      clean.addEventListener('click', this.clean)

      closeBtn.addEventListener('click', () => {
        this.parentElem.remove()
      })
      
      this.parentElem.append(clean, this.closeBtn)
      document.body.append(this.parentElem)
    // } else {
    //   console.log('this.closeBtn', this.closeBtn);
    //   this.closeBtn.addEventListener('click', () => {
    //   this.parentElem.remove()
    // })
  }
    
  

    const count = random(1, shapes.length - 1)
    shapes[count](this.parentElem)

    if(document.querySelector('#timer')) {
      document.querySelector('#timer').remove()
    }


    
  }
}