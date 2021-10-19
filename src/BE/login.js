const express = require('express')
const app = express()
const port = 8002

app.get('/getData', (req, res, next)     => {
    var listData = {
        data:[
            {
                name: 'admin',
                pass: 'admin',
            }
        ]
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  res.json(listData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})