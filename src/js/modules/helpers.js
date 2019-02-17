function createElem(name, attributes, ...children) {
  let el = document.createElement(name)
  for (let [attr, value] of Object.entries(attributes)) {
    el.setAttribute(attr, value)
  }
  children.forEach(child => el.appendChild(child))
  return el
}

export { createElem }
