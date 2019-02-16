export default class Actor {
  constructor(pos, size) {
    this._pos = pos
    this._size = size
  }

  get pos() {
    return this._pos
  }

  set pos(v) {
    this._pos = v
  }

  get size() {
    return this._size
  }
}
