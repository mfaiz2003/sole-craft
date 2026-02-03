const mongoose = require("mongoose");

const solecraftSchema = new mongoose.Schema({
    name: String,
    rate: String,
    image: String
});

module.exports = mongoose.model("solecraft", solecraftSchema);