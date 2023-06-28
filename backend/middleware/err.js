const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;//if err.statusCode is not happen then 500
    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({
        success: false,
        // message: err.stack,//for seen the full location of error
        message: err.message,
    });

}