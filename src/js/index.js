import '@babel/polyfill'
import { simpleLevelPlan } from './Level/levels'
import Level from './Level/Level'
import Player from './Actors/Player'
import Lava from './Actors/Lava'
import Vec from './modules/Vec'

let simpleLevel = new Level(simpleLevelPlan)
console.log(`${simpleLevel.width} by ${simpleLevel.height}`)

let player = Player.create(new Vec(1, 1))
console.log(player.pos)

let lava = Lava.create(new Vec(1, 1), 'v')
console.log(lava.reset)
