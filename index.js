const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.get('/', (req, res) => {
  res.send('hello node')
})

app.post('/upload', cors(), (req, res) => {
  let result = {
    req,
    res
  }
  res.send(result)
  // res.send(req.file.filename)
})
let port = process.env.PORT || 3000
app.listen(port)