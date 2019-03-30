import React from 'react'

const Menu = ({children}) => (
  <ul>
    {children.map((item, key) =>
      <li key={key}>{item}</li>
    )}
  </ul>
)

export default Menu
