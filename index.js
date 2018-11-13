const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.get('/', (req, res) => {
  res.send('hello node')
})
let port = process.env.PORT
app.listen(port || 3000)