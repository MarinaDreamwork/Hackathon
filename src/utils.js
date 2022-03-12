// рандомное число от min до max
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

// Функция для фона страницы
export function randomColor() {
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
  },
  {
    type: 'close',
    text: 'Закрыть текущую вкладку'
  },
  {
    type: 'reload',
    text: 'Обновить страницу'
  },
  {
    type: 'timer',
    text: 'До завершения Хакатона осталось...'
  }
]