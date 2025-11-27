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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0zNz5SdVv-iQQuuyW2Tzg0u9zhoawny6RcuBFSj1geESEPoe2e4IIkDd1N1G9Fpu-8w&usqp=CAU",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGECd1EmwE9SZubzZCvDYPGRHrCPi0eqx6DkLgNmZYglrWF63WUkfSwsftH1hCYwhB7Tc&usqp=CAU",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSFFhJzmmkdrPVGVmqE92jgJrgQtfHZp0oQ&s",
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
        image: "data:image/jpeg;base64,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",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLA9g0-aPoxs5nmackqXOq1-vcPFF5LoLAtKZT_RjpUZwFn4qgWwuh4C1OCGGtRwC679g&usqp=CAU",
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
        image: "data:image/jpeg;base64,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",
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
