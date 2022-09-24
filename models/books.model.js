const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    genre:{type:String,required:true},
    issued: [{}],
  },
  {
    timestamps: true,
  }
)

const book = mongoose.model('Books',bookSchema)

module.exports = book