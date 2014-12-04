var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
        title: String,
        image: String,
        favourite: Boolean,
        link: String,
        added: { type: Date, default: Date.now },
        worn: [Date],
        category: String,
        colors: [String],
        price: Number,
        seasons: [String]
});

module.exports = mongoose.model('Image', ImageSchema);