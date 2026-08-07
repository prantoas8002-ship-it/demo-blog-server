const checkUser = async (req , res, next)=>{
    const header = await req.headers.authorization;
    if(!header)
    {
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
    next();
}

module.exports = {checkUser};