// ---------- BASE DE DATOS DE PLAYERAS (estilo H&M con detalles) ----------
const productsData = [
    {
        id: 1,
        name: "Camiseta  EXODO PESO PLUMA",
        category: "basico",
        price: 299,
        originalPrice: 399,
        discount: "-25%",
        image: "nova/1.png",
        brand: "NOVA",
        color: "Blanco Crudo",
        description: "Camiseta clásica de corte relajado (relaxed fit) en punto jersey de algodón orgánico. Cuello redondo con ribeteado elástico en canalé, hombros ligeramente caídos y costuras reforzadas. El básico indispensable para tus atuendos casuales de diario.",
        materials: "100% Algodón orgánico. Certificado de agricultura ecológica sin pesticidas químicos.",
        care: "Lavar a máquina a máx. 30°C. No usar blanqueador. Secar en tendedero a la sombra."
    },
    {
        id: 2,
        name: "Camiseta  BAD BANNY DTMF",
        category: "estampado",
        price: 399,
        originalPrice: 499,
        discount: "-20%",
        image: "nova/2.png",
        brand: "NOVA",
        color: "Negro Carbón / Estampado",
        description: "Playera con estampa tipográfica minimalista en el pecho. Confeccionada en algodón de alta densidad con tacto sedoso. Ajuste regular fit para un estilo cómodo y moderno que combina con todo.",
        materials: "100% Algodón peinado de fibra larga. Tintas ecológicas a base de agua.",
        care: "Lavar al revés a máquina a 30°C. Planchar al revés. No usar secadora."
    },
    {
        id: 3,
        name: "TOTE BAG UN VERANO SIN TI",
        category: "oversize",
        price: 549,
        originalPrice: 699,
        discount: "-21%",
        image: "nova/3.png",
        brand: "NOVA",
        color: "Gris Mineral Deslavado",
        description: "Playera de corte holgado (oversize fit) con tratamiento de lavado a la piedra (stone washed) que otorga una textura texturizada vintage única. Caída pesada de gran durabilidad con hombros extremadamente caídos.",
        materials: "100% Algodón premium pesado (heavyweight 240g/m²). Proceso de tintura sustentable.",
        care: "Lavar por separado o con colores oscuros. Planchado tibio. Apta para secadora a baja temperatura."
    },
    {
        id: 4,
        name: "TOTE BAG  BTS",
        category: "basico",
        price: 349,
        originalPrice: 449,
        discount: "-22%",
        image: "nova/4.png",
        brand: "NOVA",
        color: "Azul Marino / Franjas",
        description: "Playera de cuello redondo clásico con detalle de textura acanalada fina en el cuello. Tejido suave elástico y ligero que se amolda suavemente a la silueta. Estilo marinero atemporal.",
        materials: "95% Algodón orgánico, 5% Elastano para un ajuste elástico y retención de forma duradera.",
        care: "Lavar con agua fría a mano o ciclo delicado. No exprimir con fuerza. Planchar a baja temperatura."
    },
    {
        id: 5,
        name: "Camiseta  SAD BOYS II",
        category: "estampado",
        price: 429,
        originalPrice: 549,
        discount: "-21%",
        image: "nova/5.png",
        brand: "NOVA",
        color: "Blanco Crudo / Gráfico Floral",
        description: "Playera retro con ilustración botánica vintage estampada en la espalda y logo pequeño en el pecho. Estilo escandinavo ideal para el verano o combinar con chaquetas de gabardina.",
        materials: "100% Algodón regenerativo que promueve la biodiversidad de los suelos de cultivo.",
        care: "Lavar a máquina en frío con colores similares. No planchar directamente sobre el estampado."
    },
    {
        id: 6,
        name: "camiseta free spirits",
        category: "oversize",
        price: 599,
        originalPrice: 749,
        discount: "-20%",
        image: "nova/6.png",
        brand: "NOVA",
        color: "Verde Oliva / Salvia",
        description: "Playera de hombros caídos marcados y ajuste holgado relajado. Confección en tejido grueso de alta calidad que retiene la forma estructural de los hombros. Tacto ultra suave y corte vanguardista.",
        materials: "100% Algodón premium ultrasuave. Teñido con pigmentos naturales orgánicos.",
        care: "Lavar en lavadora con colores similares. Planchar a temperatura media si es necesario."
    },
    {
        id: 7,
        name: "camiseta FREE SPIRITS",
        category: "basico",
        price: 279,
        originalPrice: 349,
        discount: "-20%",
        image: "nova/7.png",
        brand: "NOVA",
        color: "Blanco Nieve Puro",
        description: "Camiseta blanca clásica esencial. Tejido suave de grosor medio con tacto peinado. Un lienzo perfecto para cualquier look diario, desde vestir informal hasta complementar prendas de gala.",
        materials: "100% Algodón orgánico súper peinado.",
        care: "Lavar a máquina en ciclo tibio (40°C máximo). Apto para blanqueadores sin cloro en caso de manchas."
    },
    {
        id: 8,
        name: "camiseta FREE SPIRITS",
        category: "estampado",
        price: 459,
        originalPrice: 579,
        discount: "-20%",
        image: "nova/8.png",
        brand: "NOVA",
        color: "Gris Jaspeado / Gráfico",
        description: "Playera en algodón jaspeado con diseño gráfico abstracto inspirado en las galerías de arte contemporáneo de Estocolmo. Ajuste cómodo y moderno para un estilo desenfadado pero con clase.",
        materials: "90% Algodón, 10% Poliéster reciclado para otorgar el efecto jaspeado melange.",
        care: "Lavar a mano o máquina a temperatura fría. Planchar por el reverso. No usar cloro."
    }
];

let currentCategory = "todos";
let currentSort = "default";
let searchQuery = "";
let cart = []; // { id, size, quantity }
let favorites = []; // Array de IDs de productos favoritos
let loggedInUser = null; // { name, email }

// Elementos DOM
const productsGrid = document.getElementById("products-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort-select");
const cartIcon = document.getElementById("cart-icon");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items-list");
const cartTotalItemsSpan = document.getElementById("cart-total-items");
const cartSubtotalSpan = document.getElementById("cart-subtotal");
const cartCountSpan = document.getElementById("cart-count");

// Nuevos Elementos DOM para Interacciones
const searchTrigger = document.getElementById("search-trigger");
const searchOverlay = document.getElementById("search-overlay");
const closeSearch = document.getElementById("close-search");
const searchInput = document.getElementById("search-input");

const customModal = document.getElementById("custom-modal");
const closeModal = document.getElementById("close-modal");
const modalBody = document.getElementById("modal-body");

const userTrigger = document.getElementById("user-trigger");
const wishlistTrigger = document.getElementById("wishlist-trigger");
const toastContainer = document.getElementById("toast-container");
const checkoutBtn = document.querySelector(".checkout-btn");
const heroBtn = document.querySelector(".btn-hero");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// ---------- NOTIFICACIONES TOAST (PREMIUM) ----------
function showToast(message, type = 'success') {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let iconClass = 'fa-check-circle';
    if (type === 'warning') iconClass = 'fa-exclamation-triangle';
    if (type === 'info') iconClass = 'fa-info-circle';

    toast.innerHTML = `
        <i class="fas ${iconClass}"></i>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Forzar reflow para animación
    setTimeout(() => toast.classList.add("show"), 10);

    // Auto remover después de 3 segundos
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ---------- FAVORITOS (WISHLIST) ----------
function saveFavorites() {
    localStorage.setItem("novaFavorites", JSON.stringify(favorites));
}

function loadFavorites() {
    const saved = localStorage.getItem("novaFavorites");
    if (saved) {
        favorites = JSON.parse(saved);
    } else {
        favorites = [];
    }
}

function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    if (index === -1) {
        favorites.push(productId);
        showToast(`"${product.name}" añadido a tus favoritos`, 'success');
    } else {
        favorites.splice(index, 1);
        showToast(`"${product.name}" eliminado de favoritos`, 'info');
    }
    saveFavorites();
    renderProducts();
}

function openWishlistModal() {
    // Asegurarse de que el modal vuelva a su tamaño estándar
    const modalContent = customModal.querySelector(".modal-content");
    modalContent.classList.remove("wide");
    customModal.classList.add("active");

    if (favorites.length === 0) {
        modalBody.innerHTML = `
            <h3 class="modal-title">MIS FAVORITOS</h3>
            <div class="empty-wishlist">
                <i class="far fa-heart" style="font-size: 3rem; color: #ccc; margin-bottom: 15px; display: block;"></i>
                No tienes productos en favoritos todavía.
            </div>
        `;
        return;
    }

    let html = `<h3 class="modal-title">MIS FAVORITOS (${favorites.length})</h3>`;
    html += `<div class="wishlist-modal-list">`;

    favorites.forEach(id => {
        const product = productsData.find(p => p.id === id);
        if (!product) return;
        html += `
            <div class="wishlist-item" data-id="${product.id}">
                <img class="wishlist-item-img" src="${product.image}" alt="${product.name}">
                <div class="wishlist-item-info">
                    <div class="wishlist-item-title">${product.name}</div>
                    <div class="wishlist-item-price">$${product.price} MXN</div>
                </div>
                <div class="wishlist-actions">
                    <button class="wishlist-to-cart" data-id="${product.id}">AGREGAR</button>
                    <i class="fas fa-trash-alt remove-wishlist" data-id="${product.id}" title="Eliminar de favoritos"></i>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    modalBody.innerHTML = html;

    // Asignar eventos dentro del modal de favoritos
    modalBody.querySelectorAll(".wishlist-to-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            // Abrir el detalle para que elijan talla, o agregar talla M por defecto
            addToCart(id, 'M');
            customModal.classList.remove("active");
        });
    });

    modalBody.querySelectorAll(".remove-wishlist").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            toggleFavorite(id);
            openWishlistModal(); // Refrescar modal
        });
    });
}

// ---------- VISTA DETALLADA DE PRODUCTO (ESTILO H&M) ----------
function openProductDetailModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    // Ajustar modal a pantalla ancha split
    const modalContent = customModal.querySelector(".modal-content");
    modalContent.classList.add("wide");
    customModal.classList.add("active");

    const isFav = favorites.includes(product.id);
    let selectedSize = 'M'; // Talla por defecto

    modalBody.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-left">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-right">
                <div class="detail-tag-heart">
                    <span class="discount-badge">${product.discount}</span>
                    <button class="detail-heart-btn ${isFav ? 'active' : ''}" id="detail-fav-btn" data-id="${product.id}" title="Añadir a Favoritos">
                        <i class="${isFav ? 'fas fa-heart' : 'far fa-heart'}"></i>
                    </button>
                </div>
                <h2 class="detail-title">${product.name.toUpperCase()}</h2>
                <div class="detail-prices">
                    <span class="detail-price-current">$${product.price}.00 MXN</span>
                    <span class="detail-price-old">$${product.originalPrice}.00 MXN</span>
                </div>

                <div class="detail-section-title">COLOR: ${product.color}</div>
                <div class="color-swatch-container">
                    <div class="color-swatch active">
                        <img src="${product.image}" alt="${product.color}">
                    </div>
                </div>

                <div class="detail-section-title">SELECCIONAR TALLA</div>
                <div class="sizes-grid">
                    <div class="size-box" data-size="XCH">XCH</div>
                    <div class="size-box" data-size="CH">CH</div>
                    <div class="size-box active" data-size="M">M</div>
                    <div class="size-box" data-size="G">G</div>
                    <div class="size-box" data-size="XG">XG</div>
                    <div class="size-box" data-size="XXG">XXG</div>
                </div>

                <div class="size-guide-link" id="size-guide-trigger">GUÍA DE TALLAS</div>

                <button class="detail-add-btn" id="detail-add-btn">AGREGAR A LA BOLSA</button>
                
                <div style="font-size: 0.75rem; color: #555; text-align: center; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <i class="fas fa-store"></i> Encontrar en tienda: <span style="text-decoration: underline; cursor: pointer;" id="shop-availability-trigger">VERIFICA DISPONIBILIDAD</span>
                </div>

                <div class="detail-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <span>DESCRIPCIÓN Y AJUSTE</span>
                            <i class="fas fa-plus"></i>
                        </div>
                        <div class="accordion-content">
                            <p>${product.description}</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <span>MATERIALES Y SOSTENIBILIDAD</span>
                            <i class="fas fa-plus"></i>
                        </div>
                        <div class="accordion-content">
                            <p>${product.materials}</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <span>GUÍA DE CUIDADOS</span>
                            <i class="fas fa-plus"></i>
                        </div>
                        <div class="accordion-content">
                            <p>${product.care}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Selección de Tallas
    const sizeBoxes = modalBody.querySelectorAll(".size-box");
    sizeBoxes.forEach(box => {
        box.addEventListener("click", () => {
            sizeBoxes.forEach(b => b.classList.remove("active"));
            box.classList.add("active");
            selectedSize = box.dataset.size;
        });
    });

    // Agregar al Carrito desde el Detalle
    const addBtn = modalBody.querySelector("#detail-add-btn");
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            addToCart(product.id, selectedSize);
            customModal.classList.remove("active");
            modalContent.classList.remove("wide");
        });
    }

    // Favoritos en el Detalle
    const favBtn = modalBody.querySelector("#detail-fav-btn");
    if (favBtn) {
        favBtn.addEventListener("click", () => {
            toggleFavorite(product.id);
            const active = favorites.includes(product.id);
            favBtn.classList.toggle("active", active);
            favBtn.querySelector("i").className = active ? "fas fa-heart" : "far fa-heart";
        });
    }

    // Disponibilidad en tienda
    modalBody.querySelector("#shop-availability-trigger").addEventListener("click", () => {
        showToast("Producto disponible en: Tienda NOVA Centro y NOVA Plaza Carso", "info");
    });

    // Guía de Tallas
    modalBody.querySelector("#size-guide-trigger").addEventListener("click", () => {
        showToast("Tabla de medidas: XCH (pecho 86-90cm), CH (92-96cm), M (98-102cm), G (104-108cm), XG (110-114cm), XXG (116-120cm)", "info");
    });

    // Comportamiento del Acordeón
    const accordions = modalBody.querySelectorAll(".accordion-header");
    accordions.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector("i");
            const isOpen = content.style.maxHeight;

            accordions.forEach(h => {
                h.nextElementSibling.style.maxHeight = null;
                h.querySelector("i").className = "fas fa-plus";
            });

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.className = "fas fa-minus";
            } else {
                content.style.maxHeight = null;
                icon.className = "fas fa-plus";
            }
        });
    });
}

// ---------- PERFIL DE USUARIO ----------
function saveUser() {
    localStorage.setItem("novaUser", JSON.stringify(loggedInUser));
}

function loadUser() {
    const saved = localStorage.getItem("novaUser");
    if (saved) {
        loggedInUser = JSON.parse(saved);
        updateUserUI();
    }
}

function updateUserUI() {
    if (!userTrigger) return;
    if (loggedInUser) {
        userTrigger.className = "fas fa-user";
        userTrigger.style.color = "#2ecc71";
        userTrigger.title = `Perfil: ${loggedInUser.name}`;
    } else {
        userTrigger.className = "far fa-user";
        userTrigger.style.color = "";
        userTrigger.title = "Mi Cuenta";
    }
}

function openUserModal() {
    const modalContent = customModal.querySelector(".modal-content");
    modalContent.classList.remove("wide");
    customModal.classList.add("active");

    if (loggedInUser) {
        modalBody.innerHTML = `
            <h3 class="modal-title">MI CUENTA</h3>
            <div class="user-profile">
                <div class="avatar-circle">${loggedInUser.name.charAt(0).toUpperCase()}</div>
                <div class="profile-name">Hola, ${loggedInUser.name}!</div>
                <div class="profile-email">${loggedInUser.email}</div>
                <p style="font-size: 0.85rem; color: #555; margin-bottom: 25px;">Nivel de Cliente: Miembro VIP 🌟</p>
                <button class="modal-btn" id="logout-btn" style="background: #b33; width: 100%;">CERRAR SESIÓN</button>
            </div>
        `;

        document.getElementById("logout-btn").addEventListener("click", () => {
            loggedInUser = null;
            localStorage.removeItem("novaUser");
            updateUserUI();
            showToast("Sesión cerrada con éxito", "info");
            customModal.classList.remove("active");
        });
    } else {
        modalBody.innerHTML = `
            <h3 class="modal-title">INICIAR SESIÓN</h3>
            <form class="login-form" id="modal-login-form">
                <div class="form-group">
                    <label for="login-name">Nombre</label>
                    <input type="text" id="login-name" required placeholder="Tu nombre completo">
                </div>
                <div class="form-group">
                    <label for="login-email">Correo Electrónico</label>
                    <input type="email" id="login-email" required placeholder="correo@ejemplo.com">
                </div>
                <div class="form-group">
                    <label for="login-pass">Contraseña</label>
                    <input type="password" id="login-pass" required placeholder="••••••••">
                </div>
                <button type="submit" class="modal-btn">ENTRAR A MI CUENTA</button>
            </form>
        `;

        document.getElementById("modal-login-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("login-name").value;
            const email = document.getElementById("login-email").value;

            loggedInUser = { name, email };
            saveUser();
            updateUserUI();
            showToast(`¡Bienvenido de vuelta, ${name}!`, "success");
            customModal.classList.remove("active");
        });
    }
}

// ---------- CARRITO Y COMPRAS (TALLAS BASADO) ----------
function saveCart() {
    localStorage.setItem("essentialCart", JSON.stringify(cart));
    updateCartUI();
    updateCartCounter();
}

function loadCart() {
    const saved = localStorage.getItem("essentialCart");
    if (saved) {
        cart = JSON.parse(saved);
    } else {
        cart = [];
    }
    updateCartUI();
    updateCartCounter();
}

function updateCartCounter() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountSpan) cartCountSpan.textContent = totalItems;
    if (cartTotalItemsSpan) cartTotalItemsSpan.textContent = totalItems;
}

function updateCartUI() {
    if (!cartItemsList) return;
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<div class="empty-cart-msg">Tu bolsa está vacía</div>';
        if (cartSubtotalSpan) cartSubtotalSpan.textContent = "$0 MXN";
        return;
    }

    let html = "";
    let subtotal = 0;
    cart.forEach(item => {
        const product = productsData.find(p => p.id === item.id);
        if (!product) return;
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;
        html += `
            <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
                <img class="cart-item-img" src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${product.name}</div>
                    <div style="font-size: 0.75rem; color: #666; margin: 3px 0 6px 0;">Talla: <strong style="color: #111;">${item.size}</strong></div>
                    <div class="cart-item-price">$${product.price} MXN</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrement" data-id="${item.id}" data-size="${item.size}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increment" data-id="${item.id}" data-size="${item.size}">+</button>
                        <span class="remove-item" data-id="${item.id}" data-size="${item.size}">Eliminar</span>
                    </div>
                </div>
            </div>
        `;
    });
    cartItemsList.innerHTML = html;
    if (cartSubtotalSpan) cartSubtotalSpan.textContent = `$${subtotal} MXN`;

    // Eventos botones cantidad/eliminar basados en TALLAS
    document.querySelectorAll(".decrement").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const size = btn.dataset.size;
            changeQuantity(id, size, -1);
        });
    });
    document.querySelectorAll(".increment").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const size = btn.dataset.size;
            changeQuantity(id, size, 1);
        });
    });
    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const size = btn.dataset.size;
            removeFromCart(id, size);
        });
    });
}

function changeQuantity(productId, size, delta) {
    const index = cart.findIndex(i => i.id === productId && i.size === size);
    if (index !== -1) {
        const newQty = cart[index].quantity + delta;
        if (newQty <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = newQty;
        }
        saveCart();
    }
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    showToast("Producto eliminado de la bolsa", "info");
}

function addToCart(productId, size = 'M') {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId && item.size === size);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id: productId, size: size, quantity: 1 });
    }
    saveCart();

    showToast(`"${product.name}" (${size}) agregado a tu bolsa`, 'success');
    cartOverlay.classList.add("active");
}

// ---------- RENDERIZAR PRODUCTOS ----------
function renderProducts() {
    if (!productsGrid) return;
    let filtered = [...productsData];

    // Filtrar por categoría
    if (currentCategory !== "todos") {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }

    // Ordenación
    if (currentSort === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => a.id - b.id);
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-cart-msg" style="grid-column: 1/-1; padding: 60px 0;">
                No se encontraron playeras que coincidan con tu búsqueda.
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filtered.map(product => {
        const isFav = favorites.includes(product.id);
        return `
            <div class="product-card">
                <button class="card-heart-btn ${isFav ? 'active' : ''}" data-id="${product.id}" title="Favorito">
                    <i class="${isFav ? 'fas fa-heart' : 'far fa-heart'}"></i>
                </button>
                <img class="product-image" src="${product.image}" alt="${product.name}">
                <div class="product-brand">${product.brand}</div>
                <div class="product-title">${product.name}</div>
                <div class="product-price">$${product.price} MXN</div>
                <button class="add-to-cart-btn" data-id="${product.id}">AGREGAR A LA BOLSA</button>
            </div>
        `;
    }).join('');

    // Re-enlazar eventos dinámicos y clicks de tarjetas
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", (e) => {
            // No abrir detalle si se hizo click en el botón de agregar directo o favorito
            if (e.target.closest(".add-to-cart-btn") || e.target.closest(".card-heart-btn")) {
                return;
            }
            const heartBtn = card.querySelector(".card-heart-btn");
            if (heartBtn) {
                const id = parseInt(heartBtn.dataset.id);
                openProductDetailModal(id);
            }
        });
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id, 'M'); // Agregar talla M estándar en compra directa
        });
    });

    document.querySelectorAll(".card-heart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleFavorite(id);
        });
    });
}

// ---------- VINCULACIÓN DE EVENTOS (LISTENERS) ----------

// Filtros de categoría de la galería
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active-filter"));
        btn.classList.add("active-filter");
        currentCategory = btn.dataset.category;
        renderProducts();
    });
});

// Ordenar select
if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderProducts();
    });
}

// Carrito (Abrir / Cerrar)
if (cartIcon) {
    cartIcon.addEventListener("click", () => {
        cartOverlay.classList.add("active");
    });
}
if (closeCart) {
    closeCart.addEventListener("click", () => {
        cartOverlay.classList.remove("active");
    });
}
if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
        if (e.target === cartOverlay) cartOverlay.classList.remove("active");
    });
}

// Checkout (Proceder al pago con Resumen de Compra y Formas de Pago)
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Tu bolsa está vacía. Añade productos para comprar.", "warning");
            return;
        }

        cartOverlay.classList.remove("active");

        // Habilitar modo ancho para split layout en el modal (resumen de compra)
        const modalContent = customModal.querySelector(".modal-content");
        modalContent.classList.add("wide");
        customModal.classList.add("active");

        const subtotal = cart.reduce((sum, item) => {
            const product = productsData.find(p => p.id === item.id);
            return sum + (product ? product.price * item.quantity : 0);
        }, 0);

        // Envío gratis si supera los $999 MXN (mismo criterio del banner superior)
        const shippingFee = subtotal >= 999 ? 0 : 90;
        const total = subtotal + shippingFee;

        let itemsHtml = "";
        cart.forEach(item => {
            const product = productsData.find(p => p.id === item.id);
            if (!product) return;
            itemsHtml += `
                <div class="summary-item-card">
                    <img class="summary-item-img" src="${product.image}" alt="${product.name}">
                    <div class="summary-item-info">
                        <div class="summary-item-title">${product.name}</div>
                        <div class="summary-item-details">Talla: <strong>${item.size}</strong> | Cantidad: ${item.quantity}</div>
                        <div class="summary-item-price">$${product.price} MXN</div>
                    </div>
                </div>
            `;
        });

        modalBody.innerHTML = `
            <h3 class="modal-title" style="margin-bottom: 25px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 12px;">RESUMEN DE COMPRA</h3>
            <div class="checkout-summary-container">
                <!-- Columna Izquierda: Artículos en Bolsa -->
                <div class="summary-left">
                    ${itemsHtml}
                </div>

                <!-- Columna Derecha: Totales y Formas de Pago -->
                <div class="summary-right">
                    <div class="summary-totals-box">
                        <div class="summary-row">
                            <span>Valor del pedido</span>
                            <span>$${subtotal}.00 MXN</span>
                        </div>
                        <div class="summary-row">
                            <span>Costo estimado de envío</span>
                            <span>${shippingFee === 0 ? '<strong style="color: #2ecc71;">GRATIS</strong>' : '$' + shippingFee + '.00 MXN'}</span>
                        </div>
                        <div class="summary-row total">
                            <span>TOTAL</span>
                            <span>$${total}.00 MXN</span>
                        </div>
                    </div>

                    <div class="payment-selector-title">OPCIONES DE PAGO</div>
                    <div class="payment-options-grid">
                        <!-- Tarjeta de Crédito/Débito -->
                        <div class="payment-card-option active" data-method="card">
                            <div class="payment-radio"></div>
                            <div class="payment-option-details">
                                <div class="payment-option-name">Tarjeta Bancaria</div>
                                <div class="payment-option-desc">Visa, Mastercard, AMEX, Carnet</div>
                            </div>
                            <div class="payment-icons-strip">
                                <i class="fab fa-cc-visa"></i>
                                <i class="fab fa-cc-mastercard"></i>
                                <i class="fab fa-cc-amex"></i>
                            </div>
                        </div>

                        <!-- PayPal -->
                        <div class="payment-card-option" data-method="paypal">
                            <div class="payment-radio"></div>
                            <div class="payment-option-details">
                                <div class="payment-option-name">PayPal</div>
                                <div class="payment-option-desc">Paga seguro con saldo o tarjetas</div>
                            </div>
                            <div class="payment-icons-strip">
                                <i class="fab fa-cc-paypal"></i>
                            </div>
                        </div>

                        <!-- WhatsApp Express (Compra Rápida y Segura) -->
                        <div class="payment-card-option whatsapp-option" data-method="whatsapp">
                            <div class="payment-radio"></div>
                            <div class="payment-option-details">
                                <div class="payment-option-name" style="color: #25d366;"><i class="fab fa-whatsapp" style="font-size: 1.1rem;"></i> WhatsApp Express</div>
                                <div class="payment-option-desc" style="color: #128c7e;">Pide por chat y coordina tu pago/entrega</div>
                            </div>
                        </div>
                    </div>

                    <div id="checkout-action-container">
                        <button class="detail-add-btn" id="confirm-purchase-btn" style="margin-bottom: 0;">CONTINUAR CON LA COMPRA</button>
                    </div>
                </div>
            </div>
        `;

        let selectedMethod = "card";

        // Cambiar selección de forma de pago
        const paymentOptions = modalBody.querySelectorAll(".payment-card-option");
        const actionContainer = modalBody.querySelector("#checkout-action-container");

        paymentOptions.forEach(option => {
            option.addEventListener("click", () => {
                paymentOptions.forEach(o => o.classList.remove("active"));
                option.classList.add("active");
                selectedMethod = option.dataset.method;

                // Modificar el botón de acción según la selección
                if (selectedMethod === "whatsapp") {
                    actionContainer.innerHTML = `
                        <button class="whatsapp-checkout-btn" id="confirm-purchase-btn">
                            COMPLETAR PEDIDO POR WHATSAPP
                            <i class="fab fa-whatsapp"></i>
                        </button>
                    `;
                } else {
                    actionContainer.innerHTML = `
                        <button class="detail-add-btn" id="confirm-purchase-btn" style="margin-bottom: 0;">
                            CONTINUAR CON LA COMPRA
                        </button>
                    `;
                }

                // Re-enlazar el click del botón de confirmación
                bindConfirmEvent();
            });
        });

        // Función para volver a enlazar el selector en caso de regresar
        function rebindPaymentSelector() {
            const paymentOpts = modalBody.querySelectorAll(".payment-card-option");
            const actContainer = modalBody.querySelector("#checkout-action-container");

            paymentOpts.forEach(option => {
                if (option.dataset.method === selectedMethod) {
                    option.classList.add("active");
                } else {
                    option.classList.remove("active");
                }

                option.addEventListener("click", () => {
                    paymentOpts.forEach(o => o.classList.remove("active"));
                    option.classList.add("active");
                    selectedMethod = option.dataset.method;

                    if (selectedMethod === "whatsapp") {
                        actContainer.innerHTML = `
                            <button class="whatsapp-checkout-btn" id="confirm-purchase-btn">
                                COMPLETAR PEDIDO POR WHATSAPP
                                <i class="fab fa-whatsapp"></i>
                            </button>
                        `;
                    } else {
                        actContainer.innerHTML = `
                            <button class="detail-add-btn" id="confirm-purchase-btn" style="margin-bottom: 0;">
                                CONTINUAR CON LA COMPRA
                            </button>
                        `;
                    }
                    bindConfirmEvent();
                });
            });

            bindConfirmEvent();
        }

        // Lógica de confirmación (Paso 2 o redirección)
        function bindConfirmEvent() {
            const confirmBtn = modalBody.querySelector("#confirm-purchase-btn");
            if (!confirmBtn) return;
            confirmBtn.addEventListener("click", () => {
                const orderId = "NOVA-" + Math.floor(100000 + Math.random() * 900000);

                if (selectedMethod === "whatsapp") {
                    // Generar plantilla de WhatsApp con detalle del pedido
                    let message = `Hola NOVA MODA! 🛍️ Me gustaría realizar el siguiente pedido por WhatsApp:\n\n`;
                    cart.forEach(item => {
                        const product = productsData.find(p => p.id === item.id);
                        if (product) {
                            message += `• ${item.quantity}x ${product.name} (Talla: ${item.size}) - $${product.price} MXN\n`;
                        }
                    });
                    message += `\n💵 *Subtotal:* $${subtotal}.00 MXN`;
                    message += `\n🚚 *Envío:* ${shippingFee === 0 ? "GRATIS" : "$" + shippingFee + ".00 MXN"}`;
                    message += `\n💰 *TOTAL A PAGAR:* $${total}.00 MXN`;
                    message += `\n\n📌 *Método de pago:* WhatsApp Express`;
                    message += `\n🔢 *Código de referencia:* ${orderId}`;

                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=5215512345678&text=${encodedMessage}`;

                    // Abrir WhatsApp en pestaña nueva
                    window.open(whatsappUrl, "_blank");
                    showToast("Abriendo WhatsApp para coordinar tu entrega...", "success");

                    // Mostrar pantalla de éxito final
                    renderSuccessScreen(orderId, total, "whatsapp", "WhatsApp Express");
                } else if (selectedMethod === "card") {
                    renderCardForm();
                } else if (selectedMethod === "paypal") {
                    renderPaypalForm();
                }
            });
        }

        // Renderiza el Formulario de Tarjeta Bancaria
        function renderCardForm() {
            const summaryRight = modalBody.querySelector(".summary-right");
            if (!summaryRight) return;

            const originalSummaryRightHtml = summaryRight.innerHTML;

            summaryRight.innerHTML = `
                <div class="payment-step-transition">
                    <button class="payment-back-btn" id="back-to-summary-btn">
                        <i class="fas fa-arrow-left"></i> REGRESAR
                    </button>
                    <div class="payment-form-title">
                        <i class="fas fa-credit-card"></i> DATOS DE LA TARJETA
                    </div>
                    <form id="card-payment-form" class="payment-form-grid" novalidate>
                        <div class="payment-input-group">
                            <label for="card-holder">NOMBRE DEL TITULAR</label>
                            <div class="payment-input-wrapper">
                                <i class="far fa-user input-icon"></i>
                                <input type="text" id="card-holder" class="payment-input" placeholder="Como aparece en la tarjeta" required autocomplete="off">
                            </div>
                            <span class="payment-error-message" id="error-holder" style="display: none;"></span>
                        </div>

                        <div class="payment-input-group">
                            <label for="card-number">NÚMERO DE TARJETA</label>
                            <div class="payment-input-wrapper">
                                <i class="far fa-credit-card input-icon"></i>
                                <input type="text" id="card-number" class="payment-input" placeholder="0000 0000 0000 0000" maxlength="19" required autocomplete="off">
                                <i class="far fa-credit-card card-brand-indicator" id="card-brand-indicator"></i>
                            </div>
                            <span class="payment-error-message" id="error-number" style="display: none;"></span>
                        </div>

                        <div class="payment-form-row">
                            <div class="payment-input-group">
                                <label for="card-expiry">VENCIMIENTO</label>
                                <div class="payment-input-wrapper">
                                    <i class="far fa-calendar-alt input-icon"></i>
                                    <input type="text" id="card-expiry" class="payment-input" placeholder="MM/AA" maxlength="5" required autocomplete="off">
                                </div>
                                <span class="payment-error-message" id="error-expiry" style="display: none;"></span>
                            </div>

                            <div class="payment-input-group">
                                <label for="card-cvv">CVV</label>
                                <div class="payment-input-wrapper">
                                    <i class="fas fa-lock input-icon"></i>
                                    <input type="password" id="card-cvv" class="payment-input" placeholder="123" maxlength="4" required autocomplete="off">
                                </div>
                                <span class="payment-error-message" id="error-cvv" style="display: none;"></span>
                            </div>
                        </div>

                        <div class="payment-checkbox-group">
                            <input type="checkbox" id="save-card-check" checked>
                            <label for="save-card-check" style="cursor: pointer;">Guardar tarjeta para futuras compras</label>
                        </div>

                        <button type="submit" class="detail-add-btn" style="margin-top: 10px; margin-bottom: 0;">
                            PAGAR $${total}.00 MXN 🔒
                        </button>
                    </form>
                </div>
            `;

            document.getElementById("back-to-summary-btn").addEventListener("click", () => {
                summaryRight.innerHTML = originalSummaryRightHtml;
                rebindPaymentSelector();
            });

            setupCardInputHandlers();
        }

        // Renderiza el Formulario de PayPal Simulado
        function renderPaypalForm() {
            const summaryRight = modalBody.querySelector(".summary-right");
            if (!summaryRight) return;

            const originalSummaryRightHtml = summaryRight.innerHTML;

            summaryRight.innerHTML = `
                <div class="payment-step-transition">
                    <button class="payment-back-btn" id="back-to-summary-btn">
                        <i class="fas fa-arrow-left"></i> REGRESAR
                    </button>
                    <div class="payment-form-title">
                        <i class="fab fa-paypal" style="color: #0079c1;"></i> PAGO CON PAYPAL
                    </div>
                    
                    <div class="paypal-sim-container">
                        <div class="paypal-logo-header">
                            PayPal
                        </div>
                        <div class="paypal-secure-text">
                            <i class="fas fa-shield-alt"></i> Pago encriptado y seguro
                        </div>
                        
                        <form id="paypal-payment-form" class="payment-form-grid" novalidate>
                            <div class="payment-input-group" style="text-align: left;">
                                <label for="paypal-email">CORREO ELECTRÓNICO O MÓVIL</label>
                                <div class="payment-input-wrapper">
                                    <i class="far fa-envelope input-icon"></i>
                                    <input type="email" id="paypal-email" class="payment-input" placeholder="usuario@correo.com" required autocomplete="off">
                                </div>
                                <span class="payment-error-message" id="error-paypal-email" style="display: none;"></span>
                            </div>

                            <div class="payment-input-group" style="text-align: left; margin-bottom: 10px;">
                                <label for="paypal-pass">CONTRASEÑA</label>
                                <div class="payment-input-wrapper">
                                    <i class="fas fa-lock input-icon"></i>
                                    <input type="password" id="paypal-pass" class="payment-input" placeholder="••••••••" required autocomplete="off">
                                </div>
                                <span class="payment-error-message" id="error-paypal-pass" style="display: none;"></span>
                            </div>

                            <button type="submit" class="paypal-login-btn">
                                INICIAR SESIÓN Y PAGAR $${total}.00 MXN
                            </button>
                        </form>
                    </div>
                </div>
            `;

            document.getElementById("back-to-summary-btn").addEventListener("click", () => {
                summaryRight.innerHTML = originalSummaryRightHtml;
                rebindPaymentSelector();
            });

            setupPaypalInputHandlers();
        }

        // Lógica de formateo y validación de Tarjeta
        function setupCardInputHandlers() {
            const form = document.getElementById("card-payment-form");
            const holderInput = document.getElementById("card-holder");
            const numberInput = document.getElementById("card-number");
            const expiryInput = document.getElementById("card-expiry");
            const cvvInput = document.getElementById("card-cvv");
            const brandIndicator = document.getElementById("card-brand-indicator");

            // Formatear número de tarjeta y detectar marca
            numberInput.addEventListener("input", (e) => {
                let value = e.target.value.replace(/\D/g, "");
                
                // Detectar marca
                brandIndicator.className = "card-brand-indicator";
                if (value.startsWith("4")) {
                    brandIndicator.className = "fab fa-cc-visa card-brand-indicator visa";
                } else if (value.startsWith("5")) {
                    brandIndicator.className = "fab fa-cc-mastercard card-brand-indicator mastercard";
                } else if (value.startsWith("3")) {
                    brandIndicator.className = "fab fa-cc-amex card-brand-indicator amex";
                } else {
                    brandIndicator.className = "far fa-credit-card card-brand-indicator";
                }

                // Añadir espacios cada 4 dígitos
                let formatted = "";
                for (let i = 0; i < value.length; i++) {
                    if (i > 0 && i % 4 === 0) {
                        formatted += " ";
                    }
                    formatted += value[i];
                }
                e.target.value = formatted;
                
                clearFieldError(numberInput, "error-number");
            });

            // Formatear fecha de vencimiento
            expiryInput.addEventListener("input", (e) => {
                let value = e.target.value.replace(/\D/g, "");
                let formatted = "";
                if (value.length > 2) {
                    formatted = value.substring(0, 2) + "/" + value.substring(2, 4);
                } else {
                    formatted = value;
                }
                e.target.value = formatted;
                clearFieldError(expiryInput, "error-expiry");
            });

            // Limpiar errores al escribir y filtrar caracteres no numéricos
            holderInput.addEventListener("input", () => clearFieldError(holderInput, "error-holder"));
            cvvInput.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
                clearFieldError(cvvInput, "error-cvv");
            });

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                let isValid = true;

                // Validar Titular
                const holderVal = holderInput.value.trim();
                if (!holderVal) {
                    showFieldError(holderInput, "error-holder", "Ingresa el nombre del titular");
                    isValid = false;
                } else if (holderVal.length < 3) {
                    showFieldError(holderInput, "error-holder", "Nombre demasiado corto");
                    isValid = false;
                }

                // Validar Número de Tarjeta
                const numberVal = numberInput.value.replace(/\s/g, "");
                if (!numberVal) {
                    showFieldError(numberInput, "error-number", "Ingresa el número de tarjeta");
                    isValid = false;
                } else if (numberVal.length < 15 || numberVal.length > 16) {
                    showFieldError(numberInput, "error-number", "Debe tener 15 o 16 dígitos");
                    isValid = false;
                } else if (!validateLuhn(numberVal)) {
                    showFieldError(numberInput, "error-number", "Tarjeta no válida (algoritmo Luhn)");
                    isValid = false;
                }

                // Validar Vencimiento
                const expiryVal = expiryInput.value.trim();
                const expiryParts = expiryVal.split("/");
                const currentYear = new Date().getFullYear() % 100;
                const currentMonth = new Date().getMonth() + 1;

                if (!expiryVal || expiryParts.length !== 2) {
                    showFieldError(expiryInput, "error-expiry", "Usa formato MM/AA");
                    isValid = false;
                } else {
                    const m = parseInt(expiryParts[0], 10);
                    const a = parseInt(expiryParts[1], 10);
                    if (isNaN(m) || isNaN(a) || m < 1 || m > 12) {
                        showFieldError(expiryInput, "error-expiry", "Mes inválido (01-12)");
                        isValid = false;
                    } else if (a < currentYear || (a === currentYear && m < currentMonth)) {
                        showFieldError(expiryInput, "error-expiry", "Tarjeta expirada");
                        isValid = false;
                    }
                }

                // Validar CVV
                const cvvVal = cvvInput.value.trim();
                if (!cvvVal) {
                    showFieldError(cvvInput, "error-cvv", "Ingresa el CVV");
                    isValid = false;
                } else if (cvvVal.length < 3 || cvvVal.length > 4) {
                    showFieldError(cvvInput, "error-cvv", "Debe ser de 3 o 4 dígitos");
                    isValid = false;
                }

                if (isValid) {
                    const cardLast4 = numberVal.substring(numberVal.length - 4);
                    let brandName = "Tarjeta";
                    if (numberVal.startsWith("4")) brandName = "Visa";
                    else if (numberVal.startsWith("5")) brandName = "Mastercard";
                    else if (numberVal.startsWith("3")) brandName = "American Express";

                    startSecurePaymentProcessing(`${brandName} terminado en •••• ${cardLast4}`);
                }
            });
        }

        // Lógica de validación de PayPal
        function setupPaypalInputHandlers() {
            const form = document.getElementById("paypal-payment-form");
            const emailInput = document.getElementById("paypal-email");
            const passInput = document.getElementById("paypal-pass");

            emailInput.addEventListener("input", () => clearFieldError(emailInput, "error-paypal-email"));
            passInput.addEventListener("input", () => clearFieldError(passInput, "error-paypal-pass"));

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                let isValid = true;

                const emailVal = emailInput.value.trim();
                const passVal = passInput.value.trim();

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailVal) {
                    showFieldError(emailInput, "error-paypal-email", "Ingresa tu correo de PayPal");
                    isValid = false;
                } else if (!emailRegex.test(emailVal)) {
                    showFieldError(emailInput, "error-paypal-email", "Correo electrónico no válido");
                    isValid = false;
                }

                if (!passVal) {
                    showFieldError(passInput, "error-paypal-pass", "Ingresa tu contraseña");
                    isValid = false;
                } else if (passVal.length < 4) {
                    showFieldError(passInput, "error-paypal-pass", "Contraseña demasiado corta");
                    isValid = false;
                }

                if (isValid) {
                    startSecurePaymentProcessing(`PayPal (${emailVal})`);
                }
            });
        }

        // Algoritmo Luhn para verificar números de tarjeta válidos
        function validateLuhn(cardNumber) {
            let sum = 0;
            let shouldDouble = false;
            for (let i = cardNumber.length - 1; i >= 0; i--) {
                let digit = parseInt(cardNumber.charAt(i), 10);
                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                }
                sum += digit;
                shouldDouble = !shouldDouble;
            }
            return (sum % 10 === 0);
        }

        // Helpers de Errores Visuales
        function showFieldError(inputElement, errorSpanId, message) {
            inputElement.classList.add("error");
            
            // Añadir animación shake de error
            const parent = inputElement.closest(".payment-input-group");
            if (parent) {
                parent.classList.add("shake-error");
                setTimeout(() => parent.classList.remove("shake-error"), 400);
            }

            const errorSpan = document.getElementById(errorSpanId);
            if (errorSpan) {
                errorSpan.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
                errorSpan.style.display = "flex";
            }
        }

        function clearFieldError(inputElement, errorSpanId) {
            inputElement.classList.remove("error");
            const errorSpan = document.getElementById(errorSpanId);
            if (errorSpan) {
                errorSpan.style.display = "none";
                errorSpan.textContent = "";
            }
        }

        // Simulación animada de Procesamiento Seguro
        function startSecurePaymentProcessing(paymentDetailsText) {
            const closeBtn = customModal.querySelector(".close-modal");
            if (closeBtn) closeBtn.style.display = "none";
            
            const modalCont = customModal.querySelector(".modal-content");
            modalCont.classList.remove("wide");

            modalBody.innerHTML = `
                <div class="secure-loader-container payment-step-transition">
                    <div class="secure-lock-pulse">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="secure-spinner"></div>
                    <div class="secure-status-title">PROCESANDO PAGO SEGURO</div>
                    <div class="secure-status-text" id="secure-status-text">Estableciendo conexión encriptada de 256 bits...</div>
                    
                    <div class="secure-badge">
                        <i class="fas fa-lock"></i> PCI-DSS COMPLIANT | SSL SECURE
                    </div>
                </div>
            `;

            const statusText = document.getElementById("secure-status-text");
            const orderId = "NOVA-" + Math.floor(100000 + Math.random() * 900000);

            setTimeout(() => {
                if (statusText) statusText.textContent = "Autorizando transacción con el banco emisor...";
            }, 1000);

            setTimeout(() => {
                if (statusText) statusText.textContent = "Validando fondos y medidas antifraude...";
            }, 2000);

            setTimeout(() => {
                if (statusText) statusText.textContent = "¡Pago aprobado con éxito! Generando orden...";
            }, 3000);

            setTimeout(() => {
                if (closeBtn) closeBtn.style.display = "block";
                renderSuccessScreen(orderId, total, selectedMethod, paymentDetailsText);
            }, 4000);
        }

        // Pantalla Final de Éxito de Compra
        function renderSuccessScreen(orderId, totalAmount, methodType, detailsText) {
            modalContent.classList.remove("wide");
            
            let methodLabel = "Tarjeta de Crédito/Débito";
            if (methodType === "paypal") methodLabel = "PayPal";
            if (methodType === "whatsapp") methodLabel = "WhatsApp Express";

            modalBody.innerHTML = `
                <div class="checkout-success payment-step-transition">
                    <div class="success-icon" style="${methodType === 'whatsapp' ? 'background: #25d366;' : ''}">
                        <i class="${methodType === 'whatsapp' ? 'fab fa-whatsapp' : 'fas fa-check'}"></i>
                    </div>
                    <h3 class="modal-title" style="margin-bottom: 10px;">
                        ${methodType === 'whatsapp' ? '¡PEDIDO ENVIADO POR WHATSAPP!' : '¡COMPRA COMPLETADA!'}
                    </h3>
                    <p>${methodType === 'whatsapp' ? 'Hemos preparado tu chat. Coordina los detalles de pago y entrega en tu WhatsApp.' : 'Tu orden ha sido generada y el pago fue procesado con éxito de forma segura.'}</p>
                    <p class="order-num">CÓDIGO DE ORDEN: ${orderId}</p>
                    <p style="margin-top: 15px; font-weight: 600;">Total del pedido: $${totalAmount}.00 MXN</p>
                    <p style="font-size: 0.8rem; color: #555; margin-top: 5px;">
                        Método de pago: <strong style="color: #111;">${detailsText}</strong>
                    </p>
                    <p style="font-size: 0.8rem; color: #777; margin-top: 15px;">
                        ${methodType === 'whatsapp' ? '¡Gracias por elegir la compra exprés por chat!' : 'Enviamos el recibo detallado y la información de rastreo a tu correo.'}
                    </p>
                    <button class="modal-btn" id="finish-checkout" style="width: 100%; margin-top: 20px;">SEGUIR COMPRANDO</button>
                </div>
            `;

            document.getElementById("finish-checkout").addEventListener("click", () => {
                customModal.classList.remove("active");
            });

            cart = [];
            saveCart();
            showToast("¡Pedido recibido con éxito!", "success");
        }

        // Vincular el click inicial
        bindConfirmEvent();
    });
}

// Buscador Desplegable
if (searchTrigger) {
    searchTrigger.addEventListener("click", () => {
        searchOverlay.classList.add("active");
        setTimeout(() => searchInput.focus(), 100);
    });
}
if (closeSearch) {
    closeSearch.addEventListener("click", () => {
        searchOverlay.classList.remove("active");
    });
}
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });
}

// Triggers del Header (User y Wishlist)
if (userTrigger) {
    userTrigger.addEventListener("click", () => openUserModal());
}
if (wishlistTrigger) {
    wishlistTrigger.addEventListener("click", () => openWishlistModal());
}

// Botón Hero (Comprar Ahora) -> Scroll Suave a Productos
if (heroBtn) {
    heroBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const filters = document.querySelector(".filters-container");
        if (filters) {
            filters.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

// Cerrar Modal General
if (closeModal) {
    closeModal.addEventListener("click", () => {
        customModal.classList.remove("active");
        const modalContent = customModal.querySelector(".modal-content");
        modalContent.classList.remove("wide");
    });
}
if (customModal) {
    customModal.addEventListener("click", (e) => {
        if (e.target === customModal) {
            customModal.classList.remove("active");
            const modalContent = customModal.querySelector(".modal-content");
            modalContent.classList.remove("wide");
        }
    });
}

// Cerrar overlays con tecla Escape
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (searchOverlay) searchOverlay.classList.remove("active");
        if (customModal) {
            customModal.classList.remove("active");
            const modalContent = customModal.querySelector(".modal-content");
            modalContent.classList.remove("wide");
        }
    }
});

// Newsletter Formulario
const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector("input[type='email']");
        showToast(`¡Gracias! Se envió tu 10% OFF a: ${emailInput.value}`, "success");
        newsletterForm.reset();
    });
}

// Menú Hamburguesa Móvil
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        if (navLinks) navLinks.classList.toggle("show-mobile");
    });
}

// Navegación del Header interactivas (Filtros dinámicos)
if (navLinks) {
    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            if (navLinks.classList.contains("show-mobile")) {
                navLinks.classList.remove("show-mobile");
            }

            navItems.forEach(link => link.classList.remove("active"));
            item.classList.add("active");

            const text = item.textContent.toUpperCase().trim();

            if (text === "PLAYERAS" || text === "NUEVO") {
                currentCategory = "todos";
                filterBtns.forEach(btn => btn.classList.remove("active-filter"));
                document.querySelector('[data-category="todos"]')?.classList.add("active-filter");
                renderProducts();
                showToast("Mostrando toda la colección", "info");
            } else if (text === "BÁSICOS") {
                currentCategory = "basico";
                filterBtns.forEach(btn => btn.classList.remove("active-filter"));
                document.querySelector('[data-category="basico"]')?.classList.add("active-filter");
                renderProducts();
                showToast("Colección: Básicos", "info");
            } else if (text === "OFERTAS") {
                currentCategory = "todos";
                filterBtns.forEach(btn => btn.classList.remove("active-filter"));

                // Mostrar solo productos rebajados (simulación de precios de oferta tachados)
                let filtered = productsData.filter(p => p.price <= 400);
                productsGrid.innerHTML = filtered.map(product => {
                    const isFav = favorites.includes(product.id);
                    return `
                        <div class="product-card">
                            <button class="card-heart-btn ${isFav ? 'active' : ''}" data-id="${product.id}" title="Favorito">
                                <i class="${isFav ? 'fas fa-heart' : 'far fa-heart'}"></i>
                            </button>
                            <img class="product-image" src="${product.image}" alt="${product.name}">
                            <div class="product-brand">${product.brand}</div>
                            <div class="product-title">${product.name}</div>
                            <div class="product-price" style="color: #e24444;">
                                <span style="text-decoration: line-through; color: #888; font-size: 0.85rem; margin-right: 8px;">$${Math.round(product.price * 1.25)}</span> 
                                $${product.price} MXN
                            </div>
                            <button class="add-to-cart-btn" data-id="${product.id}">AGREGAR A LA BOLSA</button>
                        </div>
                    `;
                }).join('');

                // Re-enlazar eventos de ofertas
                document.querySelectorAll(".product-card").forEach(card => {
                    card.addEventListener("click", (e) => {
                        if (e.target.closest(".add-to-cart-btn") || e.target.closest(".card-heart-btn")) {
                            return;
                        }
                        const heartBtn = card.querySelector(".card-heart-btn");
                        if (heartBtn) {
                            const id = parseInt(heartBtn.dataset.id);
                            openProductDetailModal(id);
                        }
                    });
                });

                document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const id = parseInt(btn.dataset.id);
                        addToCart(id, 'M');
                    });
                });

                document.querySelectorAll(".card-heart-btn").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const id = parseInt(btn.dataset.id);
                        toggleFavorite(id);
                    });
                });

                showToast("¡Filtro de ofertas especiales aplicado!", "info");
            } else if (text === "INSPIRACIÓN") {
                const newsletter = document.querySelector(".newsletter");
                if (newsletter) {
                    newsletter.scrollIntoView({ behavior: "smooth" });
                    showToast("Suscríbete para recibir tendencias escandinavas", "info");
                }
            }
        });
    });
}

// Redes Sociales Footer
document.querySelectorAll(".social-icons i").forEach(icon => {
    icon.addEventListener("click", () => {
        let platform = "";
        if (icon.classList.contains("fa-instagram")) platform = "Instagram";
        if (icon.classList.contains("fa-facebook-f")) platform = "Facebook";
        if (icon.classList.contains("fa-twitter")) platform = "Twitter";
        if (icon.classList.contains("fa-pinterest")) platform = "Pinterest";

        showToast(`Abriendo el perfil oficial de NOVA en ${platform} (@nova.moda)`, "info");
    });
});

// ---------- INICIALIZAR ----------
loadCart();
loadFavorites();
loadUser();
renderProducts();