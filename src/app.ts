import http from "http"
import express from "express"
import cors from "cors"
import { Server } from "colyseus"
import { monitor } from "@colyseus/monitor"

import { QuizRoom } from "./rooms/QuizRoom"

const port = Number(process.env.PORT || 2567)
const app = express()
const db = require('./db')

app.use(cors())
app.use(express.json())

const server = http.createServer(app)
const gameServer = new Server({ server })

// Register room handlers
gameServer.define('quiz', QuizRoom)

// Register colyseus monitor AFTER registering room handlers
app.use('/colyseus', monitor())

gameServer.listen(port)
console.log(`Listening on ws://localhost:${ port }`)
