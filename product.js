const products = [
  { name: "Laptop", category: "Electronics", price: 60000, rating: 4.5 },
  { name: "Bluetooth Headphones", category: "Electronics", price: 2500, rating: 4.2 },
  { name: "Book - JavaScript Mastery", category: "Books", price: 550, rating: 4.8 },
  { name: "Smartphone", category: "Electronics", price: 30000, rating: 4.6 },
  { name: "Book - HTML & CSS Design", category: "Books", price: 400, rating: 4.7 },
  { name: "T-Shirt - Black", category: "Clothing", price: 800, rating: 4.3 },
  { name: "Wireless Mouse", category: "Electronics", price: 700, rating: 4.4 },
  { name: "Book - React Basics", category: "Books", price: 600, rating: 4.9 },
  { name: "Jeans - Blue", category: "Clothing", price: 1500, rating: 4.1 },
  { name: "Smartwatch", category: "Electronics", price: 5000, rating: 4.5 },
];

function displayProducts(items) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p><strong>Category:</strong> ${p.category}</p>
      <p><strong>Price:</strong> ₹${p.price}</p>
      <p><strong>Rating:</strong> ${p.rating} ⭐</p>
    `;
    container.appendChild(div);
  });
}

function filterAndSort() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortOption").value;

  let filtered = products.slice();
  if (category !== "All") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "ratingHighLow") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Initial display
displayProducts(products);
