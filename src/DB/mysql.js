const mysql = require("mysql")
const config = require("../config")

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let pool = mysql.createPool(dbconfig)

function query(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

function getAll(tabla) {
    return query(`SELECT * FROM ??`, [tabla])
}

function getById(tabla, id) {
    return query(`SELECT * FROM ?? WHERE id = ?`, [tabla, id])
}

function create(tabla, data) {
    if (data && data.id == 0) {
        return insert(tabla, data)
    } else {
        return update(tabla, data)
    }
}

function insert(tabla, data) {
    return query(`INSERT INTO ?? SET ?`, [tabla, data])
}

function update(tabla, data) {
    const { id, ...fields } = data
    return query(`UPDATE ?? SET ? WHERE id = ?`, [tabla, fields, id])
}

function remove(tabla, id) {
    return query(`DELETE FROM ?? WHERE id = ?`, [tabla, id])
}

module.exports = {
    getAll,
    getById,
    create,
    remove
}