const mysql = require("mysql")

const config = require("../config")

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion

function conMysql() {
    conexion = mysql.createConnection(dbconfig)
    conexion.connect((err) => {
        if (err) {
            console.error(err);
            setTimeout(conMysql, 200)
        } else {
            console.log("Conectada");
        }
    })

    conexion.on("error", err => {
        console.error(err);
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            conMysql()
        } else {
            throw err
        }
    })
}

conMysql()


function getAll(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            if (error) return reject(error);
            resolve(result)
        })
    })
}

function getById(tabla, id) {

}

function insert(tabla, data) {

}

function remove(tabla, id) {

}

module.exports = {
    getAll,
    getById,
    insert,
    remove
}