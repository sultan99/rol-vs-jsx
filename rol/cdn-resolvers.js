const moduleToCdn = require(`module-to-cdn`)

const resolve = (name, version) => {
  const list = {
    'react-on-lambda': {
      name: `react-on-lambda`,
      var: `λ`,
      url: `https://unpkg.com/react-on-lambda@${version}/dist/react-on-lambda.min.js`,
      version
    },
  }
  return list[name]
}

module.exports = (name, version, opts) => (
  moduleToCdn(name, version, opts) ||
  resolve(name, version)
)
