const mongoose = require('mongoose')
const connection = mongoose.connect("mongodb://localhost:8080")

module.exports = connection
