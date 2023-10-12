const express = require('express')
const Step = require("../Models/steps")
const router = new express.Router()

// Get By Offer ID
router.get('/steps/:offerId',async (req, res) => {
    try {
        const offerId = req.params.offerId
        
        if(!offerId) return res.status(400).send("Offer Id is Required")
        const steps = await Step.getByOfferId(offerId)

        if(!steps) return res.status(404).send("This Offer ID Doesn't Exist")
        
        return res.send(steps)
    }catch(e) {
        res.status(500).send(e.message)
    }
})


module.exports = router