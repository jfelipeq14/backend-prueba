const express = require("express")

const responses = require("../../red/responses")
const controller = require("./controller")

const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/", create)
router.put("/", remove)


async function getAll(req, res, next) {
    try {
        const items = await controller.all()
        responses.success(req, res, items, 200)
    } catch (error) {
        next(error)

    }
}

async function getById(req, res, next) {
    try {
        const items = await controller.byId(req.params.id)
        responses.success(req, res, items, 200)
    } catch (error) {
        next(error)

    }
}

async function create(req, res, next) {
    try {
        const items = await controller.byId(req.params.id)
        if (req.body.id == 0) {
            mensaje = "Item agregado con exito"
        } else {
            mensaje = "Item actualizado con exito"
        }
        responses.success(req, res, mensaje, 201)
    } catch (error) {
        next(error)
    }
}

async function remove(req, res, next) {
    try {
        const items = await controller.byId(req.params.id)
        responses.success(req, res, "item eliminado con exito", 200)
    } catch (error) {
        next(error)
    }
}





module.exports = router