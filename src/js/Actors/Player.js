import Vec from './../modules/Vec'
import Actor from './Actor'

const playerXSpeed = 7
const gravity = 30
const jumpSpeed = 17

export default class Player extends Actor {
  constructor(pos, speed) {
    super(pos, new Vec(0.8, 1.5))
    this._speed = speed
  }

  update(time, state, keys) {
    let xSpeed = 0
    if (keys.ArrowLeft) xSpeed -= playerXSpeed
    if (keys.ArrowRight) xSpeed += playerXSpeed
    let pos = super.pos
    let movedX = pos.plus(new Vec(xSpeed * time, 0))
    if (!state.level.touches(movedX, super.size, 'wall')) {
      pos = movedX
    }

    let ySpeed = this.speed.y + time * gravity
    let movedY = pos.plus(new Vec(0, ySpeed * time))
    if (!state.level.touches(movedY, super.size, 'wall')) {
      pos = movedY
    } else if (keys.ArrowUp && ySpeed > 0) {
      ySpeed = -jumpSpeed
    } else {
      ySpeed = 0
    }
    return new Player(pos, new Vec(xSpeed, ySpeed))
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
