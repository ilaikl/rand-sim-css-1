const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const api = require( './server/routes/api' )
const port = 3000


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use( '/api', api )


app.listen( port, () => console.log( `Running server on port ${ port }` ) )