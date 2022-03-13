import { Module } from '../core/module'
import { createHTMLForMessageBlock } from '../utils'

export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text)
 
  }
  trigger() {
    createHTMLForMessageBlock();
    const closeBtn = document.querySelector('.message-element-close')

    closeBtn.addEventListener('click', event => {
      const { target } = event
      const parent = target.closest('.message-element-container')
      parent.remove()
    })

  }
}