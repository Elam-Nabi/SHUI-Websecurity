const { Router } = require('express')
const FlowTagModel = require('../../models/FlowTag')
const { userVerify } = require('./Auth')

const router = Router()

router.get('/', userVerify, async (req, res) => {
    try {
        const flowTagModel = await FlowTagModel.find({ userID: req.user.userID })
        if (!flowTagModel) throw new Error('No Stream')
        const sorted = flowTagModel.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', userVerify, async (req, res) => {
    const flowTagModel = new FlowTagModel({
        tag: req.body.value,
        userID: req.user.userID
    })
    try {
        const newFlowTag = await flowTagModel.save()
        console.log(newFlowTag)
        if (!newFlowTag) throw new Error('Something went wrong saving the Stream')

        res.status(200).json({
            tag: newFlowTag.tag
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', userVerify, async (req, res) => {
    try {
        const removed = await FlowTagModel.findByIdAndDelete({ _id: req.params.id })
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router