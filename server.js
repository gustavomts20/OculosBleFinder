import { dbConnect } from './dbConnection.js'

import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var con = dbConnect()

app.post('/api/updateoculos', function (req, res) {
  const date = new Date();
  const geolat = req.body.lat
  const geolng = req.body.lng
  const status_device = req.body.status_device
  const deviceinfo = req.body.deviceinfo

  var sql =
    "INSERT INTO inf_oculos (geolat, geolng, status_device, deviceinfo, updatedat) VALUES ( '" +
    geolat +
    "', '" +
    geolng +
    "', '" +
    status_device +
    "', '" +
    deviceinfo +
    "', now() " +
    ")"

    console.log(sql);
    
  con.query(sql, function (err, result) {
    if (err) {
      throw err
    }
    console.log('1 record inserted')
  })

  res.send({
    geolat: geolat,
    geolng: geolng,
    status_device: status_device
  })
})

app.listen(port)
console.log('Server started at http://localhost:' + port)
