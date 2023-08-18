import _ from 'lodash'
import { imgTomato } from './images'

const startDiv = document.createElement('div')
const mainDiv = document.createElement('div')
const drinkDiv = document.createElement('div')

function bodyPartComponent() {

    const bodyPart = document.createElement('div')
    const startH1 = document.createElement('h1')
    startH1.innerText = 'Starters'
    const soupH3 = document.createElement('h3')
    soupH3.innerText = 'Soups'
    const soups = document.createElement('ul')
    soups.classList.add('soups')
    const saladH3 = document.createElement('h3')
    saladH3.innerText = 'Salads'
    const salads = document.createElement('ul')
    salads.classList.add('salads')

    const maintH1 = document.createElement('h1')
    const meatH3 = document.createElement('h3')
    meatH3.innerText = 'Meat'
    const meats = document.createElement('ul')
    meats.classList.add('meats')
    const chickenH3 = document.createElement('h3')
    chickenH3.innerText = 'Chicken'
    const chickens = document.createElement('ul')
    chickens.classList.add('chickens')

    const drinkH1 = document.createElement('h1')
    const nonAlH3 = document.createElement('h3')
    nonAlH3.innerText = 'Non-Alcoholic Beverage'
    const nonAls = document.createElement('ul')
    nonAls.classList.add('nonAls')
    const alH3 = document.createElement('h3')
    alH3.innerText = 'Alcoholic Beverage'
    const als = document.createElement('ul')
    als.classList.add('als')

    startDiv.classList.add('visible', 'section', 'starters')
    mainDiv.classList.add('section', 'main-course')
    drinkDiv.classList.add('section', 'drinks')

    bodyPart.append(startDiv, mainDiv, drinkDiv)

    startDiv.append(startH1, soupH3, soups, saladH3, salads)

    mainDiv.append(maintH1, meatH3, meats, chickenH3, chickens)

    drinkDiv.append(drinkH1, nonAlH3, nonAls, alH3, als)

    const soupLi = ['Tomato Soup', 'Lentil Soup', 'Mushroom Soup']
    for(let i = 0; i < soupLi.length; i++){
        let list = document.createElement('li')
        list.innerText = soupLi[i]
        list.classList.add('soup')
        soups.appendChild(list)
        list.appendChild(imgTomato)
    }

    const saladLi = ['Caesar Salad', 'Mediterranean Salad', 'Season Salad']
    for(let i = 0; i < saladLi.length; i++){
        let list = document.createElement('li')
        list.innerText = saladLi[i]
        list.classList.add('salad')
        salads.appendChild(list)
    }

    const meatLi = ['Meatball', 'Steak', 'Kebab']
    for(let i = 0; i < meatLi.length; i++){
        let list = document.createElement('li')
        list.innerText = meatLi[i]
        list.classList.add('meat')
        meats.appendChild(list)
    }

    const chickenLi = ['Schnitzel', 'Chicken Basket', 'Roast Chicken']
    for(let i = 0; i < chickenLi.length; i++){
        let list = document.createElement('li')
        list.innerText = chickenLi[i]
        list.classList.add('chicken')
        chickens.appendChild(list)
    }

    const nonAlLi = ['Coffee', 'Soda', 'Water']
    for(let i = 0; i < nonAlLi.length; i++){
        let list = document.createElement('li')
        list.innerText = nonAlLi[i]
        list.classList.add('nonAl')
        nonAls.appendChild(list)
    }

    const alLi = ['Beer', 'Wine', 'Sangria']
    for(let i = 0; i < alLi.length; i++){
        let list = document.createElement('li')
        list.innerText = alLi[i]
        list.classList.add('al')
        als.appendChild(list)
    }
 
    return bodyPart
  }

  export {bodyPartComponent, startDiv, mainDiv, drinkDiv}