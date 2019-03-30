import λ from 'react-on-lambda'
import header from 'components/header'

const app = (
  λ.div(
    header,
    λ.br(),
    λ.p({class: `instructions`},
      λ.h2({class: `title`}, `Chrome`),
      λ.ol(
        λ.li(`Open DevTools by pressing F12`),
        λ.li(`Click tab Console`),
        λ.li(`Wait till it finish`),
        λ.li(`For more accuracy repeat several times (F5)`),
      ),
      λ.p(`The same procedure do with '/dist/jsx/index.html'`)
    )
  )
)

export default app
