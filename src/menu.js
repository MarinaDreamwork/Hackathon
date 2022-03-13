import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { Message } from './modules/message'
import { ClicksModule } from './modules/clicks.module'
import { contextMenu } from './app'


export class ContextMenu extends Menu {
  constructor(selector, modules) {
    super(selector)
    this.modules = modules

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
     
      this.modules.forEach((module) => {
        e.target.dataset.type === module.module.type ? module.module.trigger() : null
      })

       this.close()
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
    console.log(module);
  }
}