require("dotenv").config()

function validateEnvVar(variable, defaultValue) {
    const value = process.env[variable] || defaultValue
    if (value === undefined) {
        throw new Error(`Environment variable ${variable} is missing`)
    }
    return value
}

module.exports = {
    app: {
        port: validateEnvVar('PORT', 4000)
    },
    mysql: {
        host: validateEnvVar('MYSQL_HOST', 'localhost'),
        user: validateEnvVar('MYSQL_USER', 'root'),
        password: validateEnvVar('MYSQL_PASSWORD', ''),
        database: validateEnvVar('MYSQL_DB', 'tienda')
    }
}