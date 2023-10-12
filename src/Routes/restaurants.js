const express = require('express')
const Restaurant = require("../Models/restaurant")
const router = new express.Router()

router.get('/restaurants', async (req, res) => {
    try {
        const start = req.body.start;
        const count = req.body.count;
        const search = req.body.search.toLowerCase().trim();

        if(!start || !count) {
            return res.status(400).send({error: 'start and count are required'});
        }

        const restaurant = await Restaurant.getAll(search, start, count);
        
        return res.status(400).send({restaurant});
    } catch (e) {
        console.log(e);
        return res.status(500).send({error: e.message});
    }
})

module.exports = router