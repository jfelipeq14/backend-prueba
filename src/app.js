const express = require("express")

const config = require("./config")


const clientes = require("./modules/cliente/routes")
const app = express()

// config
app.set("port", config.app.port)

//routes
app.use("/api/clientes", clientes)

module.exports = app