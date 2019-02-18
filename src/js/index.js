import '@babel/polyfill'
import css from './../styles/styles.css'

import DOMDisplay from './Display/DOMDisplay'
import Level from './Level/Level'
import Player from './Actors/Player'
import Lava from './Actors/Lava'
import Vec from './modules/Vec'
import { drawGrid } from './Display/drawing'
import State from './modules/State'
import { runGame } from './modules/run'
import { GAME_LEVELS, simpleLevelPlan } from './Level/game-levels'

// let simpleLevel = new Level(simpleLevelPlan)
// let display = new DOMDisplay(document.body, simpleLevel)
// display.syncState(State.start(simpleLevel))

runGame(GAME_LEVELS, DOMDisplay)
