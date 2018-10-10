function component() {
  let element = document.createElement('div')
  element.innerHTML = `
    <h1>Hello from your friend</h1>
    <p> Welcome </p>
    <ol>
      <li>Babel</li>
      <li>Typescript</li>
      <li>Webpack</li>
    </ol>
    <i><b>Yours</b>, <br/>
    the frontend</i>
  `
  return element;
}

console.log('Hello world!')
document.body.appendChild(component())