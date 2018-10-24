function component() {
  let element = document.createElement('div')
  element.innerHTML = `
    <h1>A warm hello to:</h1>
    <ol>
      <li>Babel</li>
      <li>Typescript</li>
      <li>Webpack</li>
    </ol>

    <h2> WHile you're here.</h2>
    <marquee scrollamount="1">Let the good time rolls feind...</marquee>
  `
  return element;
}

document.body.appendChild(component())
