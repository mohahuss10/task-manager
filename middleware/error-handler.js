const {CustomApiError} = require('../errors/custom-errors')
const errorHandlerMiddleware = (err,rew,res,next)=>{
    if (err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:'something went wrong,please try again'})
}

module.exports = errorHandlerMiddleware