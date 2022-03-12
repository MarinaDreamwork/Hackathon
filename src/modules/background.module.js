import { Module } from '../core/module'
import { ContextMenu } from '../menu'
import { randomColor } from '../utils'

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    document.body.style.background = randomColor()
    new ContextMenu('#menu', []).close()
  }
}