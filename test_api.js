fetch("http://localhost:4000/api/products")
    .then(res => res.json())
    .then(data => console.log("Fetched products:", data))
    .catch(err => console.error("Fetch error:", err));
