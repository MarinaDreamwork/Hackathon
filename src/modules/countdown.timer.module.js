import { Module } from '../core/module'
import { timerInterval } from '../utils'

export class CountdownTimerModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.timer = document.querySelector('#timer')

    if (!this.timer) {
      this.timer = document.createElement('div')
      this.timer.id = 'timer'
    }
  }

  createTimerElementInDOM() {
    document.body.append(this.timer)
    const textTimer = document.createElement('p')
    textTimer.textContent = 'До окончания Хакатона осталось:'
    const countDown = document.createElement('div')
    countDown.id = 'countdown'
    this.timer.append(textTimer, countDown)
  }

  trigger() {
    if (document.querySelector('.container')) {
      document.querySelector('.container').style.display = 'none'
    }

    // if (!this.timer.hasChildNodes()) {
    //   this.createTimerElementInDOM()
    // }

    // timerInterval()

  }
}