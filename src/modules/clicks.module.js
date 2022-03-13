import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.singleCounterSum = -1
    this.dblCounterSum = 0

    document.addEventListener('click', () => {
      this.singleCounterSum++
    })

    document.addEventListener('dblclick', () => {
      this.dblCounterSum++
    })
  }

  trigger() {
    setTimeout(() => {
      const textForAlert = `
      ***********************************************
      Вы сделали одинарных кликов - ${this.singleCounterSum} раз (а).
      Вы сделали двойных кликов - ${this.dblCounterSum} раз (а).
      ************************************************`
      alert(textForAlert)
    }, 3000);
    // сбрасываем счетчик после отработки вызова alert, чтобы кол-во кликов не копилось в глобальной переменной
    this.singleCounterSum = -1
    this.dblCounterSum = 0
  }
}