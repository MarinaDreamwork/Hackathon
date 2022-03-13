import './styles.css'
import { Module } from './core/module'
import { ContextMenu } from './menu'
import { modulesList } from './utils'
import { Module } from './core/module'

const contexMenu = new ContextMenu('#menu', modulesList)

modulesList.forEach((item) => {
  item.module instanceof Module ? contexMenu.add(item.module) : null
})
