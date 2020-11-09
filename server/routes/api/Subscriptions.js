const { Router } = require('express')
const SubscriptionTag = require('../../models/Subscription')
const { userVerify } = require('./Auth')

const router = Router()

router.get('/', userVerify, async (req, res) => {
    try {
        const subscriptionModel = await SubscriptionTag.find()
        if (!subscriptionModel) throw new Error('No Stream')
        const sorted = subscriptionModel.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', userVerify, async (req, res) => {
    const subscriptionModel = new SubscriptionTag(req.body)
    try {
        const newSubscription = await subscriptionModel.save()
        console.log(newSubscription)
        if (!newSubscription) throw new Error('No Stream')
        const sorted = newSubscription.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json({ message: 'done' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router