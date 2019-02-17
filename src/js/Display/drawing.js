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
    ...actors.map(actor =>
      createElem('div', {
        class: `actor ${actor.type}`,
        style: {
          height: `${actor.size.y * scale}px`,
          width: `${actor.size.x * scale}px`,
          left: `${actor.pos.x}`,
          top: `${actor.pos.y}`
        }
      })
    )
  )
}

export { drawActors, drawGrid }
