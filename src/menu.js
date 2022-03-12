import { Module } from './core/module'
import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { Message } from './modules/message'
import { ClicksModule } from './modules/clicks.module'


export class ContextMenu extends Menu {
  constructor(selector, itemsOfList) {
    super(selector)
    this.items = itemsOfList
    this.el.addEventListener('click', (e) => {
      switch (e.target.dataset.type) {
        case 'background':
          new BackgroundModule('background', 'text').trigger()
          break
        case 'shape':
          new ShapeModule('shape', 'text').trigger()
          break
        case 'message':
          new Message('message', 'text').trigger()
          break
        case 'clicks':
          new ClicksModule('clicks', 'text').trigger()
          break
        default:
          break
      }
    })
  }


  open(x, y) {
    this.el.classList.add('open')
    this.el.style.left = x + 'px'
    this.el.style.top = y + 'px'
  }

  close() {
    this.el.classList.remove('open')
  }

  add() {
    this.items.forEach(elem => {
      const itemList = new Module(elem.type, elem.text)
      this.el.insertAdjacentHTML('beforeend', itemList.toHTML())
    })

  }
}