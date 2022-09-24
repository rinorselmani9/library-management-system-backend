const express = require('express')
const router = express.Router()
const bookModel = require('../models/books.model')

router.post('/add-book', async(req,res) => {
    const result =  await bookModel.create(req.body)
    res.json(result)
})

module.exports = router