function sendResponse(req, res, message, status, error) {
    res.status(status).send({
        error,
        status,
        body: message
    })
}

exports.success = (req, res, message = "", status = 200) => {
    sendResponse(req, res, message, status, false)
}

exports.error = (req, res, message = "Error interno", status = 500) => {
    sendResponse(req, res, message, status, true)
}