const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
});

module.exports = mongoose.model('Quotes', quoteSchema);
