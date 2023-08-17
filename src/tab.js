startersBtn = document.querySelector('.startersBtn')
mainCourseBtn = document.querySelector('.main-courseBtn')
drinksBtn = document.querySelector('.drinksBtn')

const starters = document.querySelector('.starters')
const mainCourse = document.querySelector('.main-course')
const drinks = document.querySelector('.drinks')

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

