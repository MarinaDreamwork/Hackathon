import { Module } from '../core/module'

export class ShapeModule extends Module {

  constructor(type, text) {
    super(type, text)

    this.parentElem = document.querySelector('.container')

    if (!this.parentElem) {
      this.parentElem = document.createElement('div')
      this.parentElem.classList.add('container')
      document.body.append(this.parentElem)
    }
  }

  // container() {
  //   const parentElem = document.createElement('div')
  //   parentElem.classList.add('container')
  //   return parentElem
  // }

  triangle() {
    const triangleElem = document.createElement('div')
    triangleElem.classList.add('triangle')
    this.parentElem.append(triangleElem)
  }

  trigger() {
    this.triangle()
  }


}