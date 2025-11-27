// celly.js

// Product data with detailed information
const products = {
    choc1: {
        name: "Belgian Dark Chocolate Truffles",
        price: 850.00,
        category: "chocolates",
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop",
        description: "Indulge in the rich, velvety smoothness of our premium Belgian dark chocolate truffles. Each piece is handcrafted with the finest cocoa beans from Belgium, creating an exquisite melting experience.",
        materials: ["Premium Belgian Cocoa", "Fresh Cream", "Butter", "Natural Vanilla Extract"],
        size: "Box of 12 pieces",
        weight: "180g",
        shelfLife: "3 months",
        origin: "Belgium",
        allergens: "Contains dairy, may contain traces of nuts"
    },
    choc2: {
        name: "Ruby Chocolate Hearts",
        price: 1200.00,
        category: "chocolates",
        image: "https://images.unsplash.com/photo-1623660053974-9f0c1a37e2ab?w=400&h=300&fit=crop",
        description: "Experience the unique taste of ruby chocolate - naturally pink with a delightful berry flavor. Shaped into beautiful hearts, perfect for special occasions.",
        materials: ["Ruby Cocoa Beans", "Cocoa Butter", "Milk Powder", "Sugar"],
        size: "Box of 16 hearts",
        weight: "200g",
        shelfLife: "4 months",
        origin: "Switzerland",
        allergens: "Contains milk"
    },
    choc3: {
        name: "Artisan Milk Chocolate Bars",
        price: 450.00,
        category: "chocolates",
        image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=400&h=300&fit=crop",
        description: "Smooth and creamy milk chocolate bars made from ethically sourced cocoa beans. Perfect for everyday indulgence.",
        materials: ["Single-origin Cocoa", "Whole Milk", "Organic Sugar", "Cocoa Butter"],
        size: "Pack of 3 bars",
        weight: "270g total",
        shelfLife: "6 months",
        origin: "Philippines",
        allergens: "Contains milk"
    },
    choc4: {
        name: "White Chocolate Strawberries",
        price: 680.00,
        category: "chocolates",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop",
        description: "Fresh strawberries dipped in premium white chocolate and decorated with delicate patterns. A perfect blend of fruity and sweet.",
        materials: ["Fresh Strawberries", "Premium White Chocolate", "Edible Decorations"],
        size: "Box of 12 pieces",
        weight: "250g",
        shelfLife: "1 week refrigerated",
        origin: "Local farms",
        allergens: "Contains dairy"
    },
    choc5: {
        name: "Gold Leaf Chocolate Box",
        price: 2500.00,
        category: "chocolates",
        image: "https://images.unsplash.com/photo-1553452118-621e1f860f43?w=400&h=300&fit=crop",
        description: "Luxurious chocolate assortment adorned with 24k edible gold leaf. The ultimate gift for chocolate connoisseurs.",
        materials: ["Premium Dark Chocolate", "24k Edible Gold Leaf", "Assorted Fillings", "Luxury Packaging"],
        size: "Premium box of 24 pieces",
        weight: "400g",
        shelfLife: "6 months",
        origin: "France",
        allergens: "May contain nuts, dairy"
    },
    plush1: {
        name: "Giant Teddy Bear",
        price: 1850.00,
        category: "plushies",
        image: "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=400&h=300&fit=crop",
        description: "Super soft and huggable giant teddy bear, perfect for cuddling and decoration. Made with premium plush materials.",
        materials: ["Premium Plush Fabric", "Hypoallergenic Polyester Fill", "Embroidered Details"],
        size: "4 feet tall",
        weight: "2.5kg",
        care: "Surface wash only",
        origin: "Designed in Japan",
        safety: "CE certified, suitable for all ages"
    },
    plush2: {
        name: "Bunny Plushie",
        price: 750.00,
        category: "plushies",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        description: "Adorable bunny plushie with floppy ears and soft fur. Perfect companion for both kids and adults.",
        materials: ["Soft Plush Fabric", "PP Cotton Fill", "Plastic Safety Eyes"],
        size: "16 inches tall",
        weight: "300g",
        care: "Machine washable",
        origin: "Korea",
        safety: "Child-safe materials"
    },
    plush3: {
        name: "Unicorn Plushie",
        price: 950.00,
        category: "plushies",
        image: "https://images.unsplash.com/photo-1603575449962-aa83e445d9b8?w=400&h=300&fit=crop",
        description: "Magical unicorn plushie with rainbow mane and golden horn. Sparkles with glitter details.",
        materials: ["Glitter Plush Fabric", "Rainbow Yarn Mane", "Gold Metallic Horn", "PP Cotton"],
        size: "18 inches tall",
        weight: "400g",
        care: "Spot clean recommended",
        origin: "USA",
        safety: "Non-toxic materials"
    },
    plush4: {
        name: "Panda Plushie",
        price: 680.00,
        category: "plushies",
        image: "https://images.unsplash.com/photo-1611606063065-ee7946f0b343?w=400&h=300&fit=crop",
        description: "Cute panda plushie with realistic black and white markings. Ultra-soft and perfect for hugging.",
        materials: ["Ultra-soft Plush", "Eco-friendly Fill", "Embroidered Features"],
        size: "14 inches tall",
        weight: "250g",
        care: "Hand wash recommended",
        origin: "China",
        safety: "ASTM certified"
    },
    plush5: {
        name: "Cat Plushie",
        price: 580.00,
        category: "plushies",
        image: "https://images.unsplash.com/photo-1597851065532-055c62e1773d?w=400&h=300&fit=crop",
        description: "Kawaii cat plushie with big eyes and soft fur. Perfect for cat lovers of all ages.",
        materials: ["Soft Plush Fabric", "High-quality PP Cotton", "Plastic Safety Eyes"],
        size: "12 inches tall",
        weight: "200g",
        care: "Surface washable",
        origin: "Japan",
        safety: "All age suitability"
    },
    flower1: {
        name: "Red Rose Bouquet",
        price: 1500.00,
        category: "flowers",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop",
        description: "Classic bouquet of 24 premium red roses, symbolizing love and passion. Perfect for romantic occasions.",
        materials: ["24 Premium Red Roses", "Baby's Breath", "Eucalyptus Leaves", "Premium Wrapping"],
        size: "Large bouquet",
        care: "Trim stems and change water daily",
        lifespan: "7-10 days with proper care",
        origin: "Local flower farms",
        season: "Available year-round"
    },
    flower2: {
        name: "Sunflower Bouquet",
        price: 850.00,
        category: "flowers",
        image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=300&fit=crop",
        description: "Bright and cheerful sunflower bouquet that brings sunshine to any room. Symbolizes happiness and positivity.",
        materials: ["8 Large Sunflowers", "Greenery", "Rustic Wrap", "Ribbon Bow"],
        size: "Medium bouquet",
        care: "Keep in bright, indirect light",
        lifespan: "10-14 days",
        origin: "Local growers",
        season: "Summer to early fall"
    },
    flower3: {
        name: "Tulip Arrangement",
        price: 1200.00,
        category: "flowers",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=300&fit=crop",
        description: "Elegant tulip arrangement in assorted colors. A sophisticated choice for any occasion.",
        materials: ["20 Dutch Tulips", "Clear Glass Vase", "Decorative Stones"],
        size: "Arrangement in vase",
        care: "Keep in cool location, change water every 2 days",
        lifespan: "5-7 days",
        origin: "Holland",
        season: "Spring availability"
    },
    flower4: {
        name: "Peony Bouquet",
        price: 1800.00,
        category: "flowers",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop",
        description: "Luxurious peony bouquet with full, ruffled blooms. The ultimate symbol of romance and prosperity.",
        materials: ["12 Fresh Peonies", "Premium Wrapping", "Silk Ribbon"],
        size: "Large, full bouquet",
        care: "Trim stems at angle, keep in cool water",
        lifespan: "5-7 days",
        origin: "Premium growers",
        season: "Late spring to early summer"
    },
    flower5: {
        name: "Mixed Flower Basket",
        price: 2200.00,
        category: "flowers",
        image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=400&h=300&fit=crop",
        description: "Beautifully arranged mixed flower basket featuring seasonal blooms. A complete floral display.",
        materials: ["Assorted Seasonal Flowers", "Woven Basket", "Floral Foam", "Decorative Ribbon"],
        size: "Large basket arrangement",
        care: "Keep foam moist, mist flowers daily",
        lifespan: "7-10 days",
        origin: "Various local farms",
        season: "Year-round with seasonal variations"
    }
};

// Shopping cart
let cart = [];

// Orders
let orders = [];

// DOM elements
const categoryBtns = document.querySelectorAll('.category-btn');
const categorySections = document.querySelectorAll('.category-section');
const productModal = document.getElementById('productModal');
const ordersModal = document.getElementById('ordersModal');
const paymentModal = document.getElementById('paymentModal');
const successModal = document.getElementById('successModal');
const myOrdersBtn = document.getElementById('myOrdersBtn');
const orderCount = document.querySelector('.order-count');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateOrderCount();
});

// Event listeners
function setupEventListeners() {
    // Category navigation
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            switchCategory(category);
        });
    });

    // Product quick view
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quick-view-btn')) {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.productId;
            showProductModal(productId);
        }

        if (e.target.classList.contains('add-to-cart-btn')) {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.productId;
            addToCart(productId);
        }
    });

    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // My orders button
    myOrdersBtn.addEventListener('click', showOrdersModal);

    // Payment options
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', function() {
            const method = this.dataset.method;
            showPaymentForm(method);
        });
    });

    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);

    // Close success modal
    document.getElementById('closeSuccess').addEventListener('click', function() {
        successModal.style.display = 'none';
        paymentModal.style.display = 'none';
        ordersModal.style.display = 'none';
        cart = [];
        updateOrderCount();
        updateOrdersList();
    });
}

// Switch category
function switchCategory(category) {
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    categorySections.forEach(section => {
        section.classList.remove('active');
        if (section.id === category) {
            section.classList.add('active');
        }
    });
}

// Show product modal
function showProductModal(productId) {
    const product = products[productId];
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <p class="product-detail-price">₱${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                
                <div class="product-specs">
                    <h4>Product Details</h4>
                    <ul>
                        <li><strong>Materials:</strong> ${product.materials.join(', ')}</li>
                        <li><strong>Size:</strong> ${product.size}</li>
                        <li><strong>Weight:</strong> ${product.weight}</li>
                        ${product.shelfLife ? `<li><strong>Shelf Life:</strong> ${product.shelfLife}</li>` : ''}
                        ${product.lifespan ? `<li><strong>Lifespan:</strong> ${product.lifespan}</li>` : ''}
                        ${product.care ? `<li><strong>Care Instructions:</strong> ${product.care}</li>` : ''}
                        <li><strong>Origin:</strong> ${product.origin}</li>
                        ${product.allergens ? `<li><strong>Allergens:</strong> ${product.allergens}</li>` : ''}
                        ${product.safety ? `<li><strong>Safety:</strong> ${product.safety}</li>` : ''}
                        ${product.season ? `<li><strong>Season:</strong> ${product.season}</li>` : ''}
                    </ul>
                </div>
                
                <button class="add-to-cart-btn" onclick="addToCart('${productId}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
}

// Add to cart
function addToCart(productId) {
    const product = products[productId];
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            ...product,
            quantity: 1
        });
    }
    
    updateOrderCount();
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = '#2ed573';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

// Update order count
function updateOrderCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    orderCount.textContent = totalItems;
    orderCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Show orders modal
function showOrdersModal() {
    updateOrdersList();
    ordersModal.style.display = 'block';
}

// Update orders list
function updateOrdersList() {
    const ordersList = document.getElementById('ordersList');
    const ordersTotal = document.getElementById('ordersTotal');
    
    if (cart.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">Your cart is empty</p>';
        ordersTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    ordersList.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="order-item">
                <div class="order-item-info">
                    <div class="order-item-name">${item.name}</div>
                    <div>Quantity: ${item.quantity}</div>
                </div>
                <div class="order-item-price">₱${itemTotal.toFixed(2)}</div>
                <button class="remove-item-btn" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    ordersTotal.textContent = total.toFixed(2);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateOrderCount();
    updateOrdersList();
}

// Show payment form
function showPaymentForm(method) {
    const paymentForm = document.getElementById('paymentForm');
    const paymentTitle = document.getElementById('paymentTitle');
    
    const methodNames = {
        gcash: 'GCash Payment',
        paymaya: 'PayMaya Payment',
        cod: 'Cash on Delivery'
    };
    
    paymentTitle.textContent = methodNames[method];
    paymentForm.style.display = 'block';
}

// Handle checkout
function handleCheckout(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('customerName').value;
    const number = document.getElementById('customerNumber').value;
    const email = document.getElementById('customerEmail').value;
    const address = document.getElementById('deliveryAddress').value;
    
    // Create order
    const order = {
        id: Date.now(),
        customer: { name, number, email, address },
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toLocaleString(),
        status: 'Pending'
    };
    
    orders.push(order);
    
    // Show success modal
    successModal.style.display = 'block';
    
    // Reset form
    document.getElementById('checkoutForm').reset();
}

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
