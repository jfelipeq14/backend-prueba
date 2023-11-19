exports.success = (req, res, message, status) => {
    res.status(status).send({
        error: false,
        status, status,
        body: message
    })
}

exports.error = (req, res, message, status) => {
    res.status(status).send({
        error: false,
        status, status,
        body: message
    })
}