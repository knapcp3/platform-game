import Vec from './../modules/Vec'
import Actor from './Actor'
import State from './../modules/State'

export default class Lava extends Actor {
  constructor(pos, speed, reset) {
    super(pos, new Vec(1, 1))
    this._speed = speed
    this._reset = reset
  }

  collide(state) {
    return new State(state.level, state.actors, 'lost')
  }

  update(time, state) {
    let newPos = super.pos.plus(this._speed.times(time))
    if (!state.level.touches(newPos, super.size, 'wall')) {
      return new Lava(newPos, this._speed, this._reset)
    } else if (this._reset) {
      return new Lava(this._reset, this._speed, this._reset)
    } else {
      return new Lava(super.pos, this._speed.times(-1))
    }
  }

  get type() {
    return 'lava'
  }

  get speed() {
    return this._speed
  }

  set speed(v) {
    this._speed = v
  }

  get reset() {
    return this._reset
  }

  static create(pos, ch) {
    if (ch === '=') {
      return new Lava(pos, new Vec(2, 0))
    } else if (ch === '|') {
      return new Lava(pos, new Vec(0, 2))
    } else if (ch === 'v') {
      return new Lava(pos, new Vec(0, 3), pos)
    }
  }
}
