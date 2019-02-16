import Vec from './../modules/Vec'
import levelChars from './levelChars'

export default class Level {
  constructor(plan) {
    let rows = plan
      .trim()
      .split('\n')
      .map(line => [...line])
    this.height = rows.length
    this.width = rows[0].length
    this.startActors = []

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch]
        if (typeof type === 'string') return type
        this.startActors.push(type.create(new Vec(x, y), ch))
        return 'empty'
      })
    })
  }
}
