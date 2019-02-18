import { overlap } from './helpers'

export default class State {
  constructor(level, actors, status) {
    this._level = level
    this._actors = actors
    this._status = status
  }

  static start(level) {
    return new State(level, level.startActors, 'playing')
  }

  update(time, keys) {
    let actors = this._actors.map(actor => actor.update(time, this, keys))
    let newState = new State(this._level, actors, this._status)

    if (newState.status !== 'playing') return newState

    let player = newState.player
    if (this._level.touches(player.pos, player.size, 'lava')) {
      return new State(this._level, actors, 'lost')
    }

    actors.forEach(actor => {
      if (actor != player && overlap(actor, player)) {
        newState = actor.collide(newState)
      }
    })
    return newState
  }

  get player() {
    return this._actors.find(actor => actor.type === 'player')
  }

  get actors() {
    return this._actors
  }

  get status() {
    return this._status
  }

  get level() {
    return this._level
  }
}
