import './styles.css'
import { Module } from './core/module'
import { ContextMenu } from './menu'
import { modulesList } from './utils'

const contextMenu = new ContextMenu('#menu', modulesList)

modulesList.forEach((item) => {
  item.module instanceof Module ? contextMenu.add(item.module) : null
})
