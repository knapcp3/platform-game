export default class State {
  constructor(level, actors, status) {
    this._level = level
    this._actors = actors
    this._status = status
  }

  static start(level) {
    return new State(level, level.startActors, 'playing')
  }

  get player() {
    return this._actors.find(actor => actor.type === 'player')
  }

  get actors() {
    return this._actors
  }
}
