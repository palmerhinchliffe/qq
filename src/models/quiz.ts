const mongo = require('mongoose')
const Schema = mongo.Schema

const Quiz = new Schema ({
  name: { type: String, required: true },
  category: { type: String, required: true }
})

module.exports = mongo.model('Quiz', Quiz)