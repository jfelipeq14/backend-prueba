const db = require("../../DB/mysql")

const TABLA = "cliente"

class ClienteController {
    constructor(dbInjected) {
        this.db = dbInjected || db
    }

    async all() {
        try {
            return await this.db.getAll(TABLA)
        } catch (error) {
            throw new Error(`Error al obtener todos los clientes: ${error.message}`)
        }
    }

    async byId(id) {
        try {
            return await this.db.getById(TABLA, id)
        } catch (error) {
            throw new Error(`Error al obtener el cliente con id ${id}: ${error.message}`)
        }
    }

    async create(body) {
        try {
            return await this.db.create(TABLA, body)
        } catch (error) {
            throw new Error(`Error al crear el cliente: ${error.message}`)
        }
    }

    async remove(body) {
        try {
            return await this.db.remove(TABLA, body)
        } catch (error) {
            throw new Error(`Error al eliminar el cliente: ${error.message}`)
        }
    }
}

module.exports = ClienteController