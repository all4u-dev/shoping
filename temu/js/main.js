// Sample product list
const products = [
    { id: 1, name: "Men's T-Shirt", category: "Fashion", price: 3500, image: "https://www.bing.com/th/id/OIP.z7k8YaW7XZuNoXNFVjh5qAHaIV?w=152&h=185&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2" },
    { id: 2, name: "Bluetooth Speaker", category: "Electronics", price: 15000, image: "https://th.bing.com/th/id/OIP.TPp7UhAmDyrtMaXAEeVGKwHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7" },
    { id: 3, name: "Organic Rice", category: "Groceries", price: 2500, image: "data:image/jpeg;base64,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" },
    { id: 4, name: "Ladies Handbag", category: "Fashion", price: 6500, image: "https://th.bing.com/th/id/OIP.lXULWv3zhaUIlIvlrxaFOQHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7" },
    { id: 5, name: "Smartwatch", category: "Electronics", price: 22000, image: "https://th.bing.com/th/id/OIP.nKWuDIRXnP_UBnWcGzkPRAHaFj?w=239&h=180&c=7&r=0&o=5&pid=1.7" },
  ];
  
  // Cart state
  let cart = [];
  
  // Load products
  function loadProducts(filter = "All") {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";
  
    const filtered = filter === "All" ? products : products.filter(p => p.category === filter);
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>₦${product.price.toLocaleString()}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      grid.appendChild(card);
    });
  }
  
  // Add to cart
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
  }
  
  // Update cart panel
  function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
  
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      total += item.price;
      const div = document.createElement("div");
      div.innerHTML = `${item.name} - ₦${item.price.toLocaleString()} <button onclick="removeFromCart(${index})">x</button>`;
      cartItems.appendChild(div);
    });
  
    cartTotal.textContent = total.toLocaleString();
    cartCount.textContent = cart.length;
  }
  
  // Remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  // Toggle cart panel
  document.getElementById("cartBtn").addEventListener("click", () => {
    document.getElementById("cartPanel").classList.add("show");
  });
  
  document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartPanel").classList.remove("show");
  });
  
  // Category filtering
  document.querySelectorAll(".categories button").forEach(btn => {
    btn.addEventListener("click", () => {
      loadProducts(btn.dataset.category);
    });
  });
  
  // Search
  document.getElementById("searchInput").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(value));
    displayFiltered(filtered);
  });
  
  function displayFiltered(filtered) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";
  
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>₦${product.price.toLocaleString()}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      grid.appendChild(card);
    });
  }
  
  // Initial load
  loadProducts();