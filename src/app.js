import { Module } from './core/module'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { MessageModule } from './modules/message'
import { ShapeModule } from './modules/shape.module'
import { ClicksModule } from './modules/clicks.module'
import './styles.css'

const items = [
  {
    module: new BackgroundModule('background', 'Поменять цвет фона')
  },
  {
    module: new ClicksModule('clicks', 'Считать клики (за 3 секунды)')
  },
  // {
  //   module: new ShapeModule('shape', 'Создать фигуру')
  // },

  {
    module: new MessageModule('message', 'Вызвать сообщение')
  }
]

export const contextMenu = new ContextMenu('#menu', items)
console.log('contextMenu', contextMenu);

items.forEach((item) => {
  const itemList = item.module
  contextMenu.add(itemList)
})
