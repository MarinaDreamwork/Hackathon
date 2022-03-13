import { Module } from '../core/module'

export class CloseWindowModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    setTimeout(() => {
      if (confirm('Вы действительно хотите закрыть страницу?'))
        window.close()
      else
        return
    }, 0)
  }
}