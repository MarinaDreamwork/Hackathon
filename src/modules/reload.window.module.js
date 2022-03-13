import { Module } from '../core/module'

export class ReloadWindowModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    setTimeout(() => {
      if (confirm('Вы действительно хотите обновить страницу?'))
        window.location.reload()
      else
        return
    }, 0)
  }
}