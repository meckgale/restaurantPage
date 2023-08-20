import _ from 'lodash'
import { imgTomato } from './images'
import { imgLentil } from './images'
import { imgMushroom } from './images'
import { imgCaesar } from './images'
import { imgMediterranean } from './images'
import { imgSeason } from './images'
import { imgMeatball } from './images'
import { imgSteak } from './images'
import { imgKebab } from './images'
import { imgSchnitzel } from './images'
import { imgChickenBasket } from './images'
import { imgRoastChicken } from './images'
import { imgCoffee } from './images'
import { imgSoda } from './images'
import { imgWater } from './images'
import { imgBeer } from './images'
import { imgWine } from './images'
import { imgSangria } from './images'

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
    const imgSoups = [imgTomato, imgLentil, imgMushroom]
    for(let i = 0; i < soupLi.length; i++){
        let list = document.createElement('li')
        list.innerText = soupLi[i]
        list.classList.add('soup')
        soups.appendChild(list)
        imgSoups[i].classList.add('img')
        list.appendChild(imgSoups[i])
    }

    const saladLi = ['Caesar Salad', 'Mediterranean Salad', 'Season Salad']
    const imgSalads = [imgCaesar, imgMediterranean, imgSeason]
    for(let i = 0; i < saladLi.length; i++){
        let list = document.createElement('li')
        list.innerText = saladLi[i]
        list.classList.add('salad')
        salads.appendChild(list)
        imgSalads[i].classList.add('img')
        list.appendChild(imgSalads[i])
    }

    const meatLi = ['Meatball', 'Steak', 'Kebab']
    const imgMeats = [imgMeatball, imgSteak, imgKebab]
    for(let i = 0; i < meatLi.length; i++){
        let list = document.createElement('li')
        list.innerText = meatLi[i]
        list.classList.add('meat')
        meats.appendChild(list)
        imgMeats[i].classList.add('img')
        list.appendChild(imgMeats[i])
    }

    const chickenLi = ['Schnitzel', 'Chicken Basket', 'Roast Chicken']
    const imgChickens = [imgSchnitzel, imgChickenBasket, imgRoastChicken]
    for(let i = 0; i < chickenLi.length; i++){
        let list = document.createElement('li')
        list.innerText = chickenLi[i]
        list.classList.add('chicken')
        chickens.appendChild(list)
        imgChickens[i].classList.add('img')
        list.appendChild(imgChickens[i])
    }

    const nonAlLi = ['Coffee', 'Soda', 'Water']
    const imgNonAls = [imgCoffee, imgSoda, imgWater]
    for(let i = 0; i < nonAlLi.length; i++){
        let list = document.createElement('li')
        list.innerText = nonAlLi[i]
        list.classList.add('nonAl')
        nonAls.appendChild(list)
        imgNonAls[i].classList.add('img')
        list.appendChild(imgNonAls[i])
    }

    const alLi = ['Beer', 'Wine', 'Sangria']
    const imgAls = [imgBeer, imgWine, imgSangria]
    for(let i = 0; i < alLi.length; i++){
        let list = document.createElement('li')
        list.innerText = alLi[i]
        list.classList.add('al')
        als.appendChild(list)
        imgAls[i].classList.add('img')
        list.appendChild(imgAls[i])
    }
 
    return bodyPart
  }

  export {bodyPartComponent, startDiv, mainDiv, drinkDiv}