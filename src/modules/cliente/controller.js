const db = require("../../DB/mysql")

const TABLA = "cliente"

function all() {
    return db.getAll(TABLA)
}

module.exports = {
    all
}