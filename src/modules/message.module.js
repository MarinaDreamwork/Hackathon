import { Module } from '../core/module'

export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    alert('Message');
  }
}