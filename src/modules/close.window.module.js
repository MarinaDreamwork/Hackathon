import { Module } from '../core/module'
import { ContextMenu } from '../menu'

export class CloseWindow extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    // new ContextMenu('#menu', []).close()
    document.querySelector('#menu').classList.remove('open')
    setTimeout(() => {
      if (confirm('Вы действительно хотите закрыть страницу?'))
        window.close()
      else
        return
    }, 0)
  }
}