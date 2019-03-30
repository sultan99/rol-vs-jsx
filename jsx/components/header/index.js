import React from 'react'
import AppLogo from 'components/app-logo'
import NavBar from 'components/nav-bar'

const Header = () => (
  <div className="header">
    <AppLogo>React on Lambda</AppLogo>
    <NavBar>
      {[
        `Docs`,
        `Addons`,
        `Community`,
        `Use cases`,
        `SupportTeam`
      ]}
    </NavBar>
  </div>
)

export default Header
