const jwt = require('jsonwebtoken')
require('dotenv/config')
module.exports = {
    async userVerify(req, res, next) {
        const bearer = req.headers.authorization
        if (typeof bearer !== 'undefined') {
            const token = bearer.replace('Bearer ', "")
            console.log(token)
            if (token === false) res.status(401)
            const verify = jwt.verify(token, process.env.SECRET)
            req.user = verify
            next()
        } else {
            res.status(401)
        }
    }
}