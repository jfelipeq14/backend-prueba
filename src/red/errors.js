const response = require("./responses")

function errors(err, req, res, next) {
    console.error(err);

    const message = err.message || "Error interno"

    const status = err.statusCode | 500

    response.error(req, res, message, status)
}

module.exports = errors