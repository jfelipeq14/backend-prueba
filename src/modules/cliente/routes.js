const express = require("express")

const responses = require("../../red/responses")
const controller = require("./controller")
const clientesController = new controller()


const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", remove)

async function getAll(req, res, next) {
    try {
        const items = await clientesController.all()
        responses.success(req, res, items, 200)
    } catch (error) {
        next(new Error(`Error al obtener todos los items: ${error.message}`))
    }
}

async function getById(req, res, next) {
    try {
        const items = await clientesController.byId(req.params.id)
        responses.success(req, res, items, 200)
    } catch (error) {
        next(new Error(`Error al obtener el item con id ${req.params.id}: ${error.message}`))
    }
}

async function create(req, res, next) {
    try {
        const items = await clientesController.create(req.body)
        responses.success(req, res, "Item agregado con exito", 201)
    } catch (error) {
        next(new Error(`Error al crear el item: ${error.message}`))
    }
}

async function update(req, res, next) {
    try {
        const items = await clientesController.update(req.body)
        responses.success(req, res, "Item actualizado con exito", 200)
    } catch (error) {
        next(new Error(`Error al actualizar el item con id ${req.params.id}: ${error.message}`))
    }
}

async function remove(req, res, next) {
    try {
        const items = await clientesController.remove(req.params.id)
        responses.success(req, res, "Item eliminado con exito", 200)
    } catch (error) {
        next(new Error(`Error al eliminar el item con id ${req.params.id}: ${error.message}`))
    }
}

module.exports = router