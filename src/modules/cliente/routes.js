const express = require("express")

const responses = require("../../red/responses")
const controller = require("./controller")

const router = express.Router()

router.get("/", (req, res) => {
    const all = controller.all()
        .then((items) => {
            responses.success(req, res, items, 200)
        })
})

module.exports = router