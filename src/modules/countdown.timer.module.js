import { Module } from '../core/module'
import { timeInterval } from '../utils'

export class CountdownTimerModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.timer = document.querySelector('#timer')
    this.timerId = document.querySelector('#id-time')


    if (!this.timerId) {
      this.timerId = document.createElement('div')
      this.timerId.style.display = 'none'
      this.timerId.id = 'id-time'
      this.timerId.textContent = 42
      document.body.append(this.timerId)
    }

    if (!this.timer) {
      this.timer = document.createElement('div')
      this.timer.style.display = 'none'
      this.timer.id = 'timer'
      document.body.append(this.timer)
    }
  }


  createTimerElementInDOM() {
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

    if (!this.timer.hasChildNodes()) {
      this.createTimerElementInDOM()
    }

    if (document.querySelector('#timer')) {
      document.querySelector('#timer').style.display = 'block'
    }

    this.timerId.textContent = timeInterval()

  }
}