const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const server = express()

mongoose.connect('mongodb+srv://vlaskz:vlaskz@cluster0-darf9.mongodb.net/tindev?retryWrites=true&w=majority', {useNewUrlParser:true})

server.use(express.json())
server.use(routes)

server.listen(3333)