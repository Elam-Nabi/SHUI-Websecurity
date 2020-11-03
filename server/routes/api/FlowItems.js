const { Router } = require('express');
const FlowItemModel = require('../../models/FlowItem')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const FlowItemModels = await FlowItemModel.find()
        if (!FlowItemModels) throw new Error('No FlowItemModels')
        const sorted = FlowItemModels.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const newFlowItemModel = new FlowItemModel(req.body)
    try {
        const FlowItemModel = await newFlowItemModel.save()
        if (!FlowItemModel) throw new Error('Something went wrong saving the FlowItemModels')
        res.status(200).json(FlowItemModel)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await FlowItemModel.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/id:', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await FlowItemModel.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router