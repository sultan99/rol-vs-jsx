import React from 'react'
import Header from 'components/header'

const App = () => (
  <div>
    <Header/>
    <br/>
    <p className="instructions">
      <h2 className="title">Chrome</h2>
      <ol>
        <li>Open DevTools by pressing F12</li>
        <li>Click tab Console</li>
        <li>Wait till it finish</li>
        <li>For more accuracy repeat several times F5</li>
      </ol>
      <p>The same procedure do with '/dist/rol/index.html'</p>
    </p>
  </div>
)

export default App
