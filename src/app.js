import { ContextMenu } from './menu'
import './styles.css'

const items = [{
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

const contexMenu = new ContextMenu('#menu', items)
contexMenu.add()

document.addEventListener('contextmenu', function(event) {
  event.preventDefault()
  contexMenu.open(event.x, event.y)
})