exports.success = (req, res, message = "", status = 200) => {
    res.status(status).send({
        error: false,
        status, status,
        body: message
    })
}

exports.error = (req, res, message = "Error interno", status = 500) => {
    res.status(status).send({
        error: false,
        status, status,
        body: message
    })
}