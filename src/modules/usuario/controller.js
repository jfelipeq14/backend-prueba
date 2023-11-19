const db = require("../../DB/mysql")

const TABLA = "usuario"

class UserController {
    constructor(dbInjected) {
        this.db = dbInjected || db
    }

    async all() {
        try {
            return await this.db.getAll(TABLA)
        } catch (error) {
            throw new Error(`Error al obtener todos los usuarios: ${error.message}`)
        }
    }

    async byId(id) {
        try {
            return await this.db.getById(TABLA, id)
        } catch (error) {
            throw new Error(`Error al obtener el usuario con id ${id}: ${error.message}`)
        }
    }

    async create(body) {
        try {
            return await this.db.create(TABLA, body)
        } catch (error) {
            throw new Error(`Error al crear el usuario: ${error.message}`)
        }
    }

    async remove(body) {
        try {
            return await this.db.remove(TABLA, body)
        } catch (error) {
            throw new Error(`Error al eliminar el usuario: ${error.message}`)
        }
    }
}

module.exports = UserController