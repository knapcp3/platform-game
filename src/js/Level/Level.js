import Vec from './../modules/Vec'
import levelChars from './levelChars'

export default class Level {
  constructor(plan) {
    let rows = plan
      .trim()
      .split('\n')
      .map(line => [...line])
    this._height = rows.length
    this._width = rows[0].length
    this._startActors = []

    this._rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch]
        if (typeof type === 'string') return type
        this.startActors.push(type.create(new Vec(x, y), ch))
        return 'empty'
      })
    })
  }

  get height() {
    return this._height
  }

  get width() {
    return this._width
  }

  get startActors() {
    return this._startActors
  }

  get rows() {
    return this._rows
  }
}
