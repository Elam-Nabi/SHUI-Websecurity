const { Router } = require('express')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
require('dotenv/config')
const { userVerify } = require('./Auth')

const router = Router()

router.post('/', async (req, res) => {
    try {
        const UserModel = await User.findOne({ username: req.body.username }).exec()
        const token = jwt.sign({
            userID: UserModel._id,
            username: UserModel.username
        }, process.env.SECRET)
        res.status(200).json({
            username: UserModel.username,
            token
        })
        console.log(UserModel)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/', userVerify, async (req, res) => {
    console.log(req.user.userID)
    try {
        const removedUser = await User.findByIdAndDelete({ _id: req.user.userID }).exec()
        res.status(200).json(removedUser)
        console.log(UserModel)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router