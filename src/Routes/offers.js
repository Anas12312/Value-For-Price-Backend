const express = require('express')
const Offer = require("../Models/offer")
const router = new express.Router()

// Get All
router.post('/offers', async (req,res) => {
    try {
        const start = req.body.start
        const count = req.body.count
        const search = req.body.search?.toLowerCase().trim()
        if(!start || !count) {
            return res.status(401).send({
                message:"start and count are required"
            })
        }
        const offers = await Offer.getAll(search, start, count)
        return res.send(offers.concat(offers))

    }catch(e) {
        console.log(e.message)
        res.status(500).send({
            message: e.message
        })
    }
})

// Get By Tag ID
router.post('/offers/tag/:tagId', async (req, res) => {
    try {
        const start = req.body.start
        const count = req.body.count
        const tagId = req.params.tagId

        if(!start || !count) {
            return res.status(400).send("start and count are required")
        }
        const offers = await Offer.getByTagId(tagId, start, count)
        return res.send(offers)

    }catch(e) {
        res.status(500).send(e.message)
    }
})

// Get By Rest ID
router.post('/offers/rest/:restaurantId', async (req, res) => {
    try {
        const start = req.body.start
        const count = req.body.count
        const restaurantId = req.params.restaurantId

        if(!start || !count) {
            return res.status(400).send("start and count are required")
        }
        const offers = await Offer.getByResturantId(restaurantId, start, count)
        return res.send(offers)

    }catch(e) {
        res.status(500).send(e.message)
    }
})
module.exports = router