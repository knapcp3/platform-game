export default class Vec {
  constructor(x, y) {
    this._x = x
    this._y = y
  }

  plus(other) {
    return new Vec(this._x + other.x, this._y + other.y)
  }

  times(factor) {
    return new Vec(this._x * factor, this._y * factor)
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }
}
