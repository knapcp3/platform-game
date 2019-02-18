import Vec from './../modules/Vec'
import Actor from './Actor'
import State from './../modules/State'

const wobbleSpeed = 8,
  wobbleDist = 0.07

export default class Coin extends Actor {
  constructor(pos, basePos, wobble) {
    super(pos, new Vec(0.6, 0.6))
    this._basePos = basePos
    this._wobble = wobble
  }

  collide(state) {
    let filtered = state.actors.filter(a => a != this)
    let status = state.status
    if (!filtered.some(a => a.type === 'coin')) status = 'won'
    return new State(state.level, filtered, status)
  }

  update(time) {
    let wobble = this._wobble + time * wobbleSpeed
    let wobblePos = Math.sin(wobble) * wobbleDist
    return new Coin(
      this._basePos.plus(new Vec(0, wobblePos)),
      this._basePos,
      wobble
    )
  }

  get type() {
    return 'coin'
  }

  get basePos() {
    return this._basePos
  }

  get wobble() {
    return this._wobble
  }

  set wobble(v) {
    this._wobble = v
  }

  static create(pos) {
    let basePos = pos.plus(new Vec(0.2, 0.1))
    return new Coin(basePos, basePos, Math.random() * Math.PI * 2)
  }
}
