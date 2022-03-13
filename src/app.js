import { Module } from './core/module'
import { ContextMenu } from './menu'
import './styles.css'

const items = [
  {
    type: 'clicks',
    text: 'Считать клики (за 3 секунды)'
  },
  {
    type: 'shape',
    text: 'Создать фигуру'
  },
  {
    type: 'background',
    text: 'Поменять цвет фона'
  },
  {
    type: 'message',
    text: 'Вызвать сообщение'
  }
]

export const contextMenu = new ContextMenu('#menu')

items.forEach((item) => {
  const itemList = new Module(item.type, item.text)
  contextMenu.add(itemList)
})
