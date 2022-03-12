import { Module } from './core/module'
import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { ClicksModule } from './modules/clicks.module'
import { CloseWindow } from './modules/close.window.module'
import { ReloadWindow } from './modules/reload.window.module'
import { CountdownTimer } from './modules/countdown.timer.module'


export class ContextMenu extends Menu {
  constructor(selector, modules) {
    super(selector)
    this.modules = modules

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      this.el.style.left = event.x + 'px'
      this.el.style.top = event.y + 'px'
      this.open()
    })

    this.el.addEventListener('click', (event) => {
      switch (event.target.dataset.type) {
        case 'background':
          new BackgroundModule('background', 'Поменять цвет фона').trigger()
          break
        case 'shape':
          new ShapeModule('shape', 'Создать фигуру').trigger()
          break
        case 'message':
          new Message('message', 'Вызвать сообщение').trigger()
          break
        case 'clicks':
          new ClicksModule('clicks', 'Считать клики (за 3 секунды)').trigger()
          break
        case 'close':
          new CloseWindow('close', 'Закрыть текущую вкладку').trigger()
          break
        case 'reload':
          new ReloadWindow('reload', 'Обновить страницу').trigger()
          break
        case 'timer':
          new CountdownTimer('timer', 'Таймер отсчета').trigger()
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

  add() {
    this.modules.forEach(elem => {
      const module = new Module(elem.type, elem.text)
      this.el.insertAdjacentHTML('beforeend', module.toHTML())
    })
  }
}