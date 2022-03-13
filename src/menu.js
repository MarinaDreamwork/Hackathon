import { Menu } from './core/menu'

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

        this.open()
      }
    })

    this.el.addEventListener('click', (event) => {

      this.modules.forEach(module => {
        event.target.dataset.type === module.module.type ? module.module.trigger() : null
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

  add(moduleItem) {
    this.el.insertAdjacentHTML('beforeend', moduleItem.toHTML())
  }
}