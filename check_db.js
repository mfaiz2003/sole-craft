const mongoose = require("mongoose");
const Solecraft = require("./model/solecraft");

mongoose.connect("mongodb://127.0.0.1:27017/solecraft")
    .then(async () => {
        console.log("Connected to DB");
        const count = await Solecraft.countDocuments();
        console.log("Document count:", count);
        const docs = await Solecraft.find();
        console.log("Documents:", docs);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
