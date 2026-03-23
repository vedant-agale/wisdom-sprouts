// Selections
const titleElmt = document.querySelector('#title');
const descriptionElmt = document.querySelector('#description');
const categoryElmt = document.querySelector('#category');
const brandElmt = document.querySelector('#brand');
const priceElmt = document.querySelector('#price');
const quantityElmt = document.querySelector('#quantity');
const cartLengthElmt = document.getElementById('cartLength');
const renderProductsElmt = document.querySelector('#renderProducts');

// Helpers
const saveToLocal = (p) => localStorage.setItem('B81', JSON.stringify(p));
const getFromLocal = () => JSON.parse(localStorage.getItem('B81')) || [];
const saveCartToLocal = (c) => localStorage.setItem('Cart81', JSON.stringify(c));
const getCartFromLocal = () => JSON.parse(localStorage.getItem('Cart81')) || [];

// 🚀 RENDER LOGIC (Fixed naming collision)
function renderProductsOnUI(productsToDisplay) {
    const list = productsToDisplay || getFromLocal();
    renderProductsElmt.innerHTML = list.map((prod) => `
        <div class='col-12 col-md-6 col-lg-4'>
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                    <h4 class="card-title fw-bold">${prod.title}</h4>
                    <p class="text-muted small">${prod.description}</p>
                    <p class="badge bg-light text-dark border">${prod.category}</p>
                    <h5>Price : ₹<span>${prod.price}</span></h5>
                    <button class="btn btn-primary w-100 mt-2" onclick="addToCart(${prod.id})">Add To Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// 🚀 SEARCH & FILTER LOGIC
function filterAndSort() {
    let allProds = getFromLocal();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('filterSelect').value;
    const sortType = document.getElementById('sortSelect').value;

    // 1. Filter by Search & Category
    let filtered = allProds.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || p.category === category;
        return matchesSearch && matchesCategory;
    });

    // 2. Sort by Price
    if (sortType === 'lowToHigh') filtered.sort((a, b) => a.price - b.price);
    if (sortType === 'highToLow') filtered.sort((a, b) => b.price - a.price);

    renderProductsOnUI(filtered);
}

function AddNewProduct() {
    const newProduct = {
        id: Date.now(),
        title: titleElmt.value,
        description: descriptionElmt.value,
        category: categoryElmt.value,
        brand: brandElmt.value,
        price: Number(priceElmt.value),
        quantity: Number(quantityElmt.value)
    };

    let getProd = getFromLocal();
    getProd.push(newProduct);
    saveToLocal(getProd);
    renderProductsOnUI();
    
    // Clear & Hide Modal
    bootstrap.Modal.getInstance(document.getElementById('addProduct')).hide();
}

// 🚀 MAM'S UPDATED CART LOGIC
function addToCart(id) {
    const cart = getCartFromLocal();
    const products = getFromLocal();
    const targetProd = products.find(p => p.id == id);

    const indexInCart = cart.findIndex(p => p.product_id == id);

    if (indexInCart == -1) {
        const newCartItem = {
            id: Date.now(),
            product_id: targetProd.id,
            product_name: targetProd.title,
            product_price: targetProd.price,
            quantity_inCart: 1
        };
        cart.push(newCartItem);
    } else {
        cart[indexInCart].quantity_inCart += 1;
    }

    saveCartToLocal(cart);
    updateCartCount();
    alert("Added to cart!");
}

function updateCartCount() {
    const cart = getCartFromLocal();
    cartLengthElmt.textContent = cart.reduce((sum, item) => sum + item.quantity_inCart, 0);
}

window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('B81')) saveToLocal([]);
    renderProductsOnUI();
    updateCartCount();
});