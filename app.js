const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/solecraft")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema); // Collection = products

// GET all products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        console.log("Products fetched:", products);
        res.json(products);
    } catch (err) {
        console.error("MongoDB fetch error:", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// POST a new product
app.post("/products", async (req, res) => {
    try {
        const { name, price, brand, category, image, rating } = req.body;
        const newProduct = new Product({ name, price, brand, category, image, rating });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.error("MongoDB insert error:", err);
        res.status(500).json({ error: "Failed to add product" });
    }
});

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
