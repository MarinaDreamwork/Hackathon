import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { Message } from './modules/message'
import { ClicksModule } from './modules/clicks.module'
import { contextMenu } from './app'


export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()

      if(this.el.hasChildNodes()) {
        const {clientX: x, clientY: y} = event;

        this.el.style.left = `${x}px`
        this.el.style.top = `${y}px`
    
        contextMenu.open()
      } 
    })

    this.el.addEventListener('click', (e) => {
      this.close()

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


  open() {
    this.el.classList.add('open')
  }

  close() {
    this.el.classList.remove('open')
  }

  add(module) {
    this.el.insertAdjacentHTML('beforeend', module.toHTML())
  }
}