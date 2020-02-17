const express = require('express')
const router = express.Router()

router.get('/data', (req, res) => {
    const data = require('../data/data.json')
    res.send(data)
})

module.exports = router