"use client";

import { useState, useEffect } from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  brand: string;
  category: string;
  image: string;
  rating: number;
};

export default function NikePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h1>Nike Products</h1>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 justify-center md:px-20 px-4">
        {products.map((p) => (
          <div key={p._id} className="w-full border text-center">
            <img src={p.image} alt={p.name} className="w-full md:h-64 h-38 object-cover" />
            <div className="md:h-38 h-24 overflow-hidden">
              <h6>{p.name}</h6>
              <p>Brand: {p.brand}</p>
              <p>Category: {p.category}</p>
              <p>Price: Rs.{p.price}</p>
              <p>Rating: {p.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
