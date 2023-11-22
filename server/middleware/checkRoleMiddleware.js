const ApiError = require("../error/ApiError")
const jwt = require('jsonwebtoken');


module.exports = function (role){
    return function (req,res,next){
    if(req.method==="OPTIONS"){
        next();
    }

    try{
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            next(ApiError.unauthorized("Не авторизован"))
        }
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        const findRole = decoded.roleId.array.find(item=>item==Number(role));
        console.log(findRole);
        if(findRole !== role){
            return next(ApiError.forbidden("Доступ запрещен"))
        }
        req.user = decoded;
        next();
    }
    catch (e){
        return next(ApiError.unauthorized("Не авторизован"))
    }
}}