import λ from 'react-on-lambda'

const menu = λ.compose(
  λ.ul({class: `navigation`}),
  λ.mapKey(λ.li)
)

export default menu
