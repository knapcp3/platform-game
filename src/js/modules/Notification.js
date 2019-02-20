import { createElem } from './../modules/helpers'

export default class Notification {
  constructor() {}

  static mainNotify(text, gameDOM, time = 2000) {
    let notNode = createElem('div', { class: 'notification' })
    notNode.textContent = text
    gameDOM.appendChild(notNode)
    setTimeout(() => {
      notNode.remove()
    }, time)
  }
}
