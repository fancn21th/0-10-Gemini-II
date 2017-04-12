import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config.dev'
import Express from 'express'

const app = new Express()
const port = 8081

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))

app.get('/*', (req, res) => {
  console.error(__dirname)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error)
  } else {
    console.info(
      '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    )
  }
  /* eslint-enable no-console */
})
