const db = require("../../DB/mysql")

const TABLA = "cliente"

function all() {
    return db.getAll(TABLA)
}

function byId(id) {
    return db.getById(TABLA, id)
}

function create(body) {
    return db.create(TABLA, body)
}

function remove(body) {
    return db.remove(TABLA, body)
}

module.exports = {
    all,
    byId,
    create,
    remove
}