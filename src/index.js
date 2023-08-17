import './styles/reset.css'
import './styles/main.css'
import {test} from './test.js'
import {headerComponent} from './header.js'
import {tab} from './tab.js'
import './images.js'

// const header = document.body.appendChild(headerComponent())
// console.log(header)
document.body.appendChild(headerComponent())
tab()
console.log(test())



