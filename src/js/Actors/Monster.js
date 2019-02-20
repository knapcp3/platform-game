import Vec from './../modules/Vec'
import Actor from './Actor'
import State from '../modules/State'
import params from './actors-params'

const { gravity } = params
const monsterXSpeed = 3

export default class Monster extends Actor {
  constructor(pos, speed) {
    super(pos, new Vec(1.2, 2))
    this._speed = speed
  }

  static create(pos) {
    return new Monster(pos.plus(new Vec(0, -1)), new Vec(monsterXSpeed, 0))
  }

  update(time, state) {    
    let speedX = this._speed.x
    let newPos = new Vec(super.pos.x, super.pos.y)
    let movedX = newPos.plus(new Vec(speedX, 0).times(time))
    
    const downElems = state.level.downElements(movedX, super.size)
    const touchesWall = state.level.touches(movedX, super.size, 'wall')

    if (touchesWall || downElems.includes('empty')) {
      speedX = -speedX
    } else {
      newPos = movedX
    }
    
    return new Monster(newPos, new Vec(speedX, 0))
  }

  collide(state) {
    return new State(state.level, state.actors, 'lost')
  }

  get type() {
    return 'monster'
  }

  get speed() {
    return this._speed
  }

  set speed(v) {
    this._speed = v
  }
}
