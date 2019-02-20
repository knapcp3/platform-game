import '@babel/polyfill'
import css from './../styles/styles.css'

import DOMDisplay from './Display/DOMDisplay'
import Level from './Level/Level'
import { runGame, runLevel } from './modules/run'
import { GAME_LEVELS } from './Level/game-levels'

runGame(GAME_LEVELS, DOMDisplay)

// runLevel(
//   new Level(`
// ..................................
// .################################.
// .#..............................#.
// .#..............................#.
// .#..............................#.
// .#...........................o..#.
// .#..@...........................#.
// .##########..............########.
// ..........#..o..o..o..o..#........
// ..........#...........M..#........
// ..........################........
// ..................................
// `),
//   DOMDisplay
// )
