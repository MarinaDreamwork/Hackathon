import { random, shapes } from '../utils'
import { Module } from '../core/module'
import { ContextMenu } from '../menu'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)

    this.parentElem = document.querySelector('.container')

    if (!this.parentElem) {
      this.parentElem = document.createElement('div')
      this.parentElem.classList.add('container')
      const clean = document.createElement('span')
      clean.classList.add('clear')
      clean.textContent = 'Clear'
      clean.addEventListener('click', this.clean)
      this.parentElem.append(clean)
      document.body.append(this.parentElem)
    }
  }

  clean() {
    const shapes = document.querySelectorAll('.shape')
    shapes.forEach(el => el.remove())
  }

  trigger() {
    const count = random(1, shapes.length - 1)
    shapes[count](this.parentElem)
    document.querySelector('#menu').classList.remove('open')
    if (document.querySelector('#timer')) {
      document.querySelector('#timer').remove()
    }
  }
}