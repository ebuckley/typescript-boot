function component() {
  let element = document.createElement('div')
  element.innerHTML = `
    <h1>A warm hello to:</h1>
    <ol>
      <li>Babel</li>
      <li>Typescript</li>
      <li>Webpack</li>
    </ol>
  `
  return element;
}

document.body.appendChild(component())