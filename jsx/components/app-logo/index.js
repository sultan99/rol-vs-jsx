import React from 'react'

const AppLogo = ({children}) => (
  <div className="app-logo">
    <img src="./assets/logo.svg"/>
    <span>{children}</span>
  </div>
)

export default AppLogo
