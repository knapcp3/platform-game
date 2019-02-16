import Vec from './../modules/Vec'
import Actor from './Actor'

export default class Coin extends Actor {
  constructor(pos, basePos, wobble) {
    super(pos, new Vec(0.6, 0.6))
    this._basePos = basePos
    this._wobble = wobble
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
