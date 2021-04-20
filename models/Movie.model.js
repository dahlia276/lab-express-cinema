const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const movieschema = new Schema ({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
}, {
    timestamps: true
});

module.exports = model ("movie", movieschema)
