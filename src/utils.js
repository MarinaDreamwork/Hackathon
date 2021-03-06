import { BackgroundModule } from "./modules/background.module"
import { ClicksModule } from "./modules/clicks.module"
import { CloseWindowModule } from "./modules/close.window.module"
import { CountdownTimerModule } from "./modules/countdown.timer.module"
import { MessageModule } from "./modules/message.module"
import { ReloadWindowModule } from "./modules/reload.window.module"
import { ShapeModule } from "./modules/shape.module"
import { UniversitiesOfUKModule } from "./modules/universitiesOfUK.module"

// рандомное число от min до max
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

// Функция для фона страницы
export function getRandomColor() {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[random(0, 9)]
  }
  return color
}

// начало функций фигур (их 11)
function triangle(container) {
  const triangleElem = document.createElement('div')
  triangleElem.classList.add('triangle', 'shape')
  container.append(triangleElem)
}

function square(container) {
  const squareElem = document.createElement('div')
  squareElem.classList.add('square', 'shape')
  container.append(squareElem)
}

function rectangle(container) {
  const rectangleElem = document.createElement('div')
  rectangleElem.classList.add('rectangle', 'shape')
  container.append(rectangleElem)
}

function circle(container) {
  const circleElem = document.createElement('div')
  circleElem.classList.add('circle', 'shape')
  container.append(circleElem)
}

function oval(container) {
  const ovalElem = document.createElement('div')
  ovalElem.classList.add('oval', 'shape')
  container.append(ovalElem)
}

function triangleDown(container) {
  const triangleDown = document.createElement('div')
  triangleDown.classList.add('triangle-down', 'shape')
  container.append(triangleDown)
}

function triangleLeft(container) {
  const triangleLeft = document.createElement('div')
  triangleLeft.classList.add('triangle-left', 'shape')
  container.append(triangleLeft)
}

function parallelogram(container) {
  const parallelogram = document.createElement('div')
  parallelogram.classList.add('parallelogram', 'shape')
  container.append(parallelogram)
}

function trapezoid(container) {
  const trapezoid = document.createElement('div')
  trapezoid.classList.add('trapezoid', 'shape')
  container.append(trapezoid)
}

function star(container) {
  const star = document.createElement('div')
  star.classList.add('star-six', 'shape')
  container.append(star)
}

function pent(container) {
  const pent = document.createElement('div')
  pent.classList.add('pentagon', 'shape')
  container.append(pent)
}
// конец функций фигур (их 11)


// Массив функций фигур
export const shapes = [oval, circle, rectangle, triangle, square, triangleDown, triangleLeft, parallelogram, trapezoid, star, pent]


// Массив наших модулей
export const modulesList = [{
    module: new ClicksModule('clicks', 'Считать клики (за 3 секунды)')
  },
  {
    module: new ShapeModule('shape', 'Создать фигуру')
  },
  {
    module: new BackgroundModule('background', 'Поменять цвет фона')
  },
  {
    module: new MessageModule('message', 'Показать текущую дату')
  },
  {
    module: new CloseWindowModule('close', 'Закрыть текущую вкладку')
  },
  {
    module: new ReloadWindowModule('reload', 'Обновить страницу')
  },
  {
    module: new CountdownTimerModule('timer', 'До завершения Хакатона осталось...')
  },
  {
    module: new UniversitiesOfUKModule('weather', 'Показать информацию о унивеситетах в UK')
  }
]

export function isTimer(id) {
  if (document.querySelector('#timer')) {
    document.querySelector('#timer').remove()
    clearInterval(id)
  }
}

export function timeInterval() {
  const startDate = new Date('Mar 13, 2022, 23:59:59').getTime()
  const intervalId = setInterval(function() {
    const now = new Date().getTime()
    const diff = (startDate - now)

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    document.getElementById('countdown').innerHTML = days + "д " + hours + "ч " + minutes + "м " + seconds + "с "

    if (diff < 0) {
      clearInterval(intervalId)
      document.getElementById('countdown').innerHTML = 'Хакатон завершился'
    }
  }, 1000)

  return intervalId
}
export function createHTMLForMessageBlock() {
  const containerElement = document.createElement('div')
  containerElement.classList.add('message-element-container')

  const closeBtn = document.createElement('span')
  closeBtn.classList.add('message-element-close')
  closeBtn.innerText = 'Close it'

  const textElement = document.createElement('p')
  
  textElement.classList.add('message-element-text')
  textElement.innerText = 'Сегодня:'

  const dateElement = document.createElement('p')

  containerElement.append(closeBtn, textElement, dateElement)

  dateElement.classList.add('message-element-date')
  dateElement.innerText = getDayToday()

  document.body.append(containerElement)
  return containerElement
}

function getDayToday() {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  const year = new Date().getFullYear();
  const day = new Date().getDate()
  const month = months[new Date().getMonth()]

  const todayDate = `${day} ${month} ${year} год`
  return todayDate
}