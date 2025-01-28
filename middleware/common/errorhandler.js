const createError = require('http-errors')

function notFoundHandler(req, res, next){
    next(createError(404, 'page not found'))
}

function errorHandler(err, req, res, next){
    
}



module.exports = {
    notFoundHandler,

}