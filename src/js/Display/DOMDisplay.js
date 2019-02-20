import { createElem } from './../modules/helpers'
import { drawGrid, drawActors, scale } from './drawing'

export default class DOMDisplay {
  constructor(parent, level) {
    this._dom = createElem('div', { class: 'game' }, drawGrid(level))
    this._actorLayer = null
    parent.appendChild(this._dom)
  }

  syncState(state) {
    if (this._actorLayer) this._actorLayer.remove()
    this._actorLayer = drawActors(state.actors)
    this._dom.appendChild(this._actorLayer)
    this._dom.className = `game ${state.status}`
    this.scrollPlayerIntoView(state)
  }

  scrollPlayerIntoView(state) {
    let width = this._dom.clientWidth
    let height = this._dom.clientHeight
    let margin = width / 3

    let player = state.player
    let center = player.pos.plus(player.size.times(0.5)).times(scale)

    let left = this._dom.scrollLeft
    let right = left + width
    let top = this._dom.scrollTop
    let bottom = top + height

    if (center.x - left < margin) {
      this._dom.scrollLeft = center.x - margin
    } else if (right - center.x < margin) {
      this._dom.scrollLeft = center.x + margin - width
    }

    if (bottom - center.y < margin) {
      this._dom.scrollTop = center.y + margin - height
    } else if (center.y - top < margin) {
      this._dom.scrollTop = center.y - margin
    }
  }

  get dom() {
    return this._dom1
  }

  clear() {
    this._dom.remove()
  }
}
