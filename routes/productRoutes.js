const express = require("express");
const router = express.Router();
const Solecraft = require("../model/solecraft");

// EJS Page Route
router.get("/products", async (req, res) => {
    try {
        const data = await Solecraft.find();
        res.render("products", { products: data });
    } catch (error) {
        console.log(error);
        res.send("Error fetching products");
    }
});

router.get("/api/products", async (req, res) => {
    try {
        const data = await Solecraft.find();
        console.log("data-=-=-=-=-=-=-=-====================>", data)
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching products" });
    }
});

module.exports = router;
