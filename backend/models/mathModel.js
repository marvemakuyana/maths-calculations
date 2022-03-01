const mongoose = require('mongoose')

const mathsSchema = mongoose.Schema({
    numbers: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Maths', mathsSchema)