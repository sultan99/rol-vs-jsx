import λ from 'react-on-lambda'
import appLogo from 'components/app-logo'
import navBar from 'components/nav-bar'

const header = (
  λ.div({class: `header`},
    appLogo(`React on Lambda`),
    navBar([
      `Docs`,
      `Addons`,
      `Community`,
      `Use cases`,
      `SupportTeam`
    ]),
  )
)

export default header
