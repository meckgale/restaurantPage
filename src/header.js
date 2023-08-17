import _ from 'lodash'

function headerComponent() {
    const header = document.createElement('header')
    const strBtn = document.createElement('button')
    const mCBtn = document.createElement('button')
    const drkBtn = document.createElement('button')

    header.classList.add('buttons')

    
    strBtn.innerHTML = _.join(['Starters'])
    strBtn.classList.add('startersBtn')

    mCBtn.innerHTML = _.join(['Main', 'Course'], ' ')
    mCBtn.classList.add('main-courseBtn')

    drkBtn.innerHTML = _.join(['Drinks'])
    drkBtn.classList.add('drinksBtn')

    header.appendChild(strBtn)
    header.appendChild(mCBtn)
    header.appendChild(drkBtn)
 
 
    return header
  }

  export {headerComponent};