import {startDiv as starters, mainDiv as mainCourse, drinkDiv as drinks} from './body.js'

function tab() {
const startersBtn = document.querySelector('.startersBtn')
const mainCourseBtn = document.querySelector('.main-courseBtn')
const drinksBtn = document.querySelector('.drinksBtn')

startersBtn.addEventListener('click', function() {
starters.classList.add('visible')
mainCourse.classList.remove('visible')
drinks.classList.remove('visible')
})

mainCourseBtn.addEventListener('click', function() {
mainCourse.classList.add('visible')
starters.classList.remove('visible')
drinks.classList.remove('visible')
})

drinksBtn.addEventListener('click', function() {
drinks.classList.add('visible')
starters.classList.remove('visible')
mainCourse.classList.remove('visible')
})
}

export {tab}

