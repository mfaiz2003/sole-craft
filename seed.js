const mongoose = require("mongoose");
const Solecraft = require("./model/solecraft");

mongoose.connect("mongodb://127.0.0.1:27017/solecraft")
    .then(async () => {
        console.log("Connected to DB for seeding");
        await Solecraft.deleteMany({});
        await Solecraft.insertMany(products);
        console.log("Database seeded successfully");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
