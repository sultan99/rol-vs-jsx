import './styles.scss'
import {render} from 'react-dom'

const benchmark = (project, app) => {
  const results = JSON.parse(
    localStorage.getItem(project) || `[]`
  )
  const start = performance.now()
  render(
    app,
    document.getElementById(`app`)
  )
  const end = performance.now()
  results.push(end - start)

  const average = results.reduce(
    (acc, value) => acc + value
  ) / results.length

  console.info(
    `%c🎉 ${project.toUpperCase()}: average took ${average} milliseconds.`,
    `font-size: 18px`
  )
  if (results.length >= 10) {
    localStorage.setItem(project, JSON.stringify([]))
    return
  }
  localStorage.setItem(project, JSON.stringify(results))
  setTimeout(() => location.reload(), 1000)
}

export default benchmark
