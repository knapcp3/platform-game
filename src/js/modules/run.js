import State from './State'
import Level from './../Level/Level'
import Notification from './Notification'

export const MAX_LIVES = 3

function trackKeys(keys) {
  let down = Object.create(null)
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == 'keydown'
      event.preventDefault()
    }
  }
  window.addEventListener('keydown', track)
  window.addEventListener('keyup', track)
  return down
}

const arrowKeys = trackKeys(['ArrowLeft', 'ArrowRight', 'ArrowUp'])

function runAnimation(frameFunc) {
  let lastTime = null
  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000
      if (frameFunc(timeStep) === false) return
    }
    lastTime = time
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

function runLevel(level, Display) {
  let display = new Display(document.querySelector('.game-wrapper'), level)
  let state = State.start(level)
  let ending = 1
  let isPaused = false
  return new Promise(resolve => {
    function escapeHandler(event) {
      if (event.key === 'Escape') {
        isPaused = !isPaused
        if (!isPaused) runAnimation(animFunc)
      }
    }

    function animFunc(time) {
      if (isPaused) return false

      state = state.update(time, arrowKeys)
      display.syncState(state)
      if (state.status === 'playing') {
        return true
      } else if (ending > 0) {
        ending -= time

        return true
      } else {
        display.clear()
        window.removeEventListener('keydown', escapeHandler)
        resolve(state.status)
        return false
      }
    }

    window.addEventListener('keydown', escapeHandler)

    runAnimation(animFunc)
  })
}

async function runGame(plans, Display) {
  let lives = MAX_LIVES
  let gameWrapNode = document.querySelector('.game-wrapper')
  Notification.mainNotify(`${lives} lives left!`, gameWrapNode)
  for (let level = 0; level < plans.length; ) {
    let status = await runLevel(new Level(plans[level]), Display)

    if (status === 'won') level++
    else if (status === 'lost') lives--
    if (lives === 0) {
      level = 0
      lives = MAX_LIVES
      Notification.mainNotify('Game over!', gameWrapNode)
    } else {
      Notification.mainNotify(`${lives} lives left!`, gameWrapNode)
    }
  }
  Notification.mainNotify("You've won!", gameWrapNode)
}

export { runGame }
