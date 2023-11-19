const express = require("express")

const responses = require("../../red/responses")

const router = express.Router()

router.get("/", (req, res) => {
    responses.success(req, res, "Customers", 200)
})

module.exports = router