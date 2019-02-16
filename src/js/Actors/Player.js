import Vec from './../modules/Vec'
import Actor from './Actor'

export default class Player extends Actor {
  constructor(pos, speed) {
    super(pos, new Vec(0.8, 1.5))
    this._speed = speed
  }

  get type() {
    return 'player'
  }

  get speed() {
    return this._speed
  }

  set speed(v) {
    this._speed = v
  }

  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0))
  }
}
