// Selecting elements
const renderContainer = document.querySelector('#renderProducts');
const cartBadge = document.getElementById('cartLength');

// Helpers
const getProds = () => JSON.parse(localStorage.getItem('B81')) || [];
const saveProds = (data) => localStorage.setItem('B81', JSON.stringify(data));
const getCart = () => JSON.parse(localStorage.getItem('Cart81')) || [];
const saveCart = (data) => localStorage.setItem('Cart81', JSON.stringify(data));

// 1. Render Function
function displayUI(customList) {
    const list = customList || getProds();
    
    if (list.length === 0) {
        renderContainer.innerHTML = `<div class="text-center mt-5"><p class="text-muted">Bhai, koi product nahi mil raha!</p></div>`;
        return;
    }

    renderContainer.innerHTML = list.map(p => `
        <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0 rounded-4">
                <div class="card-body">
                    <span class="category-badge">${p.category}</span>
                    <h5 class="fw-bold mt-2">${p.title}</h5>
                    <p class="text-muted small">${p.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="price-tag">₹${p.price}</span>
                        <button class="btn btn-primary btn-sm rounded-3" onclick="addToCart(${p.id})">
                            <i class="fas fa-plus me-1"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 2. Add New Product
function AddNewProduct() {
    const newProd = {
        id: Date.now(),
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        category: document.getElementById('category').value,
        price: Number(document.getElementById('price').value)
    };

    if(!newProd.title || !newProd.price) return alert("Pehle data bharo!");

    const current = getProds();
    current.push(newProd);
    saveProds(current);
    
    displayUI();
    bootstrap.Modal.getInstance(document.getElementById('addProduct')).hide();
    
    // Clear fields
    ['title', 'description', 'price'].forEach(id => document.getElementById(id).value = '');
}

// 3. Search & Filter
function filterProducts() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const cat = document.getElementById('filterCategory').value;
    const sort = document.getElementById('sortPrice').value;

    let filtered = getProds().filter(p => {
        return (p.title.toLowerCase().includes(search)) && (cat === 'all' || p.category === cat);
    });

    if(sort === 'low') filtered.sort((a,b) => a.price - b.price);
    if(sort === 'high') filtered.sort((a,b) => b.price - a.price);

    displayUI(filtered);
}

// 4. Add to Cart (Mam's Logic)
function addToCart(id) {
    const cart = getCart();
    const products = getProds();
    const prod = products.find(p => p.id === id);

    const index = cart.findIndex(c => c.product_id === id);
    if(index === -1) {
        cart.push({
            id: Date.now(),
            product_id: prod.id,
            product_name: prod.title,
            product_price: prod.price,
            quantity_inCart: 1
        });
    } else {
        cart[index].quantity_inCart += 1;
    }

    saveCart(cart);
    updateBadge();
}

function updateBadge() {
    const cart = getCart();
    cartBadge.textContent = cart.reduce((total, item) => total + item.quantity_inCart, 0);
}

window.addEventListener('DOMContentLoaded', () => {
    displayUI();
    updateBadge();
});