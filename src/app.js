const express = require("express")
const morgan = require("morgan")
const config = require("./config")

const clientes = require("./modules/cliente/routes")
const usuarios = require("./modules/usuario/routes")
const error = require("./middleware/errors")

const app = express()

//middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config
app.set("port", config.app.port)

//routes
app.use("/api/clientes", clientes)
app.use("/api/usuarios", usuarios)

// Handle 404
app.use((req, res, next) => {
    res.status(404).send({ error: "Not Found", status: 404 })
})

app.use(error)

module.exports = app