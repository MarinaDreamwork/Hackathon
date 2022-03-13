import { random, shapes } from '../utils'
import { Module } from '../core/module'
import { is } from 'core-js/core/object'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.parentElem = document.querySelector('.container')

    if (!this.parentElem) {
      this.parentElem = document.createElement('div')
      this.parentElem.classList.add('container')
      this.parentElem.style.display = 'none'
      const clean = document.createElement('span')

      const closeBtn = document.createElement('span')
      closeBtn.classList.add('close')
      closeBtn.textContent = 'Close'

      clean.classList.add('clear')
      clean.textContent = 'Clear'

      clean.addEventListener('click', this.clean)

      closeBtn.addEventListener('click', () => {
        this.parentElem.style.display = 'none'
        this.clean()
      })

      this.parentElem.append(clean, closeBtn)
      document.body.append(this.parentElem)
    }
  }

  clean() {
    const shapes = document.querySelectorAll('.shape')
    shapes.forEach(el => el.remove())
  }

  trigger() {
    this.parentElem.style.display = 'flex'
    const count = random(1, shapes.length - 1)
    shapes[count](this.parentElem)

    isTimer()
  }
}