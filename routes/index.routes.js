const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model')

router.post('/register', (req,res) => {
  const result = userModel.create(req.body)
  res.json(result)
})

module.exports = router;
