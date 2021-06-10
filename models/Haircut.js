const mongoose = require('mongoose');

const HaircutSchema = new mongoose.Schema({
    name: String,
    groomingEffort: String,
    length: String,
    description: String,
    imageUrl: String,
    bend: String,
    quantity: Number,
},
    { timestamps: true }
    );

const Haircut = mongoose.model("Haircut", HaircutSchema);

module.exports = Haircut;