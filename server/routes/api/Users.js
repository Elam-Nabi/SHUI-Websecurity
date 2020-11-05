const { Router } = require('express')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
require('dotenv/config')

const router = Router()

router.post('/', async (req, res) => {
    try {
        const UserModel = await User.findOne({ username: req.body.username }).exec()
        const token = jwt.sign(UserModel.username, process.env.SECRET)
        res.status(200).json({
            username: UserModel.username,
            token
        })
        console.log(UserModel)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router