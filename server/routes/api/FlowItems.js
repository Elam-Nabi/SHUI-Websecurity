const { Router } = require('express')
const FlowItemModel = require('../../models/FlowItem')
const { userVerify } = require('./Auth')
require('dotenv/config')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.SECRET)

const router = Router()

router.get('/', userVerify, async (req, res) => {
    try {
        const FlowItemModels = await FlowItemModel.find()
        if (!FlowItemModels) throw new Error('No Stream')
        const sorted = FlowItemModels.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', userVerify, async (req, res) => {
    const encryptedDescription = cryptr.encrypt(req.body.description)
    const flowItemModel = new FlowItemModel({
        description: encryptedDescription,
        tags: req.body.tags
    })
    try {
        const newFlowItem = await flowItemModel.save()
        console.log(newFlowItem)
        if (!newFlowItem) throw new Error('Something went wrong saving the Stream')

        res.status(200).json({
            date: newFlowItem.date,
            description: cryptr.decrypt(newFlowItem.description),
            tags: newFlowItem.tags
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await FlowItemModel.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router