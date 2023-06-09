const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const auth = require('./routes/auths')
const assets = require('./routes/assets')
const wakaf = require('./routes/wakafs')
const distributions = require('./routes/distributions')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(auth, assets, wakaf, distributions)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
