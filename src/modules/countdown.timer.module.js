import { Module } from '../core/module'

export class CountdownTimer extends Module {
  constructor(type, text) {
    super(type, text)
    this.timer = document.querySelector('#timer')
    this.intervalId
    if (!this.timer)
      this.timer = document.createElement('div')
    this.timer.id = 'timer'
    document.body.append(this.timer)
  }

  createTimerElementInDOM() {
    const textTimer = document.createElement('p')
    textTimer.textContent = 'До окончания Хакатона осталось:'
    const countDown = document.createElement('div')
    countDown.id = 'countdown'
    this.timer.append(textTimer, countDown)
  }

  trigger() {
    if (document.querySelector('.container'))
      document.querySelector('.container').remove()

    if (!this.timer.hasChildNodes())
      this.createTimerElementInDOM()

    const startDate = new Date('Mar 13, 2022, 23:59:59').getTime()
    this.intervalId = setInterval(function() {
      const now = new Date().getTime()
      const diff = (startDate - now)

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      document.getElementById('countdown').innerHTML = days + "д " + hours + "ч " + minutes + "м " + seconds + "с "

      if (diff < 0) {
        clearInterval(this.intervalId)
        document.getElementById('countdown').innerHTML = 'Хакатон завершился'
      }
    }, 1000)
  }
}