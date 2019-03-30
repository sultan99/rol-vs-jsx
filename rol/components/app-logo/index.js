import λ from 'react-on-lambda'

const appLogo = text => (
  λ.div({class: `app-logo`},
    λ.img({src: `./assets/logo.svg`}),
    λ.span(text)
  )
)

export default appLogo
