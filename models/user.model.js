const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: { type: String, required: true },
    issuedBooks: [{}],
    requestedBooks: [{}],
  },
  {
    timestamps: true,
  }
)

const user = mongoose.model('Users', userSchema)
module.exports = user
