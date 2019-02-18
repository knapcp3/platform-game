function createElem(name, attributes, ...children) {
  let el = document.createElement(name)
  for (let [attr, value] of Object.entries(attributes)) {
    el.setAttribute(attr, value)
  }
  children.forEach(child => el.appendChild(child))
  return el
}

function overlap(actor1, actor2) {
  return (
    actor1.pos.x + actor1.size.x > actor2.pos.x &&
    actor1.pos.x < actor2.pos.x + actor2.size.x &&
    actor1.pos.y + actor1.size.y > actor2.pos.y &&
    actor1.pos.y < actor2.pos.y + actor2.size.y
  )
}

export { createElem, overlap }
