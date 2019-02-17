import '@babel/polyfill'
import css from './../styles/styles.css'

import { simpleLevelPlan } from './Level/levels'
import DOMDisplay from './Display/DOMDisplay'
import Level from './Level/Level'
import Player from './Actors/Player'
import Lava from './Actors/Lava'
import Vec from './modules/Vec'
import { drawGrid } from './Display/drawing'
import State from './modules/State'

let simpleLevel = new Level(simpleLevelPlan)
let display = new DOMDisplay(document.body, simpleLevel)
display.syncState(State.start(simpleLevel))
