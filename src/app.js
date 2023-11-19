const express = require("express")

const config = require("./config")


const customers = require("./modules/customers/routes")
const app = express()

// config
app.set("port", config.app.port)

//routes
app.use("/api/customers", customers)

module.exports = app