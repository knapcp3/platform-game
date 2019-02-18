import { createElem } from './../modules/helpers'

export const scale = 20

function drawGrid(level) {
  return createElem(
    'table',
    {
      class: 'background',
      style: `width: ${level.width * scale}px`
    },
    ...level.rows.map(row =>
      createElem(
        'tr',
        { style: `height: ${scale}px` },
        ...row.map(type => createElem('td', { class: type }))
      )
    )
  )
}

function drawActors(actors) {
  return createElem(
    'div',
    {},
    ...actors.map(actor => {
      let rect = createElem('div', { class: `actor ${actor.type}` })
      rect.style.width = `${actor.size.x * scale}px`
      rect.style.height = `${actor.size.y * scale}px`
      rect.style.left = `${actor.pos.x * scale}px`
      rect.style.top = `${actor.pos.y * scale}px`
      return rect
    })
  )
}

export { drawActors, drawGrid }
