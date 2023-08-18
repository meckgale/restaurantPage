import './styles/reset.css'
import './styles/main.css'
import {headerComponent} from './header.js'
import {tab} from './tab.js'
import { bodyPartComponent } from './body.js'

const content = document.querySelector('#content')

content.appendChild(headerComponent())
content.appendChild(bodyPartComponent())
tab()



