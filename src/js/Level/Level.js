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

  touches(position, size, type) {
    let xStart = Math.floor(position.x)
    let xEnd = Math.ceil(position.x + size.x)
    let yStart = Math.floor(position.y)
    let yEnd = Math.ceil(position.y + size.y)
    for (let y = yStart; y < yEnd; y++) {
      for (let x = xStart; x < xEnd; x++) {
        let isOutside = x < 0 || x >= this._width || y < 0 || y >= this._height
        let here = isOutside ? 'wall' : this._rows[y][x]
        if (here == type) return true
      }
    }
    return false
  }

  downElements(position, size) {
    let xStart = Math.floor(position.x)
    let xEnd = Math.ceil(position.x + size.x)
    let y = Math.ceil(position.y + size.y)
    let elems = []
    for (let x = xStart; x < xEnd; x++) {
      let isOutside = x < 0 || x >= this._width || y < 0 || y >= this._height
      let elem = isOutside ? 'wall' : this._rows[y][x] 
      elems.push(elem)
    }
    return elems
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
