import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.singlCcounter = -1
    this.dblCounter = 0

    document.addEventListener('click', (event) => {
      this.singlCcounter += 1
    })
    document.addEventListener('dblclick', (event) => {
      this.dblCounter += 1
    })
  }

  trigger() {
    setTimeout(() => {
      const textForAlert = `
      ***********************************************
      Вы сделали одинарных кликов - ${this.singlCcounter} раз (а).
      Вы сделали двойных кликов - ${this.dblCounter} раз (а).
      ************************************************`
      alert(textForAlert)
    }, 3000);
  }
}