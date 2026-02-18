const PRODUCTS = [
  { name: 'Shelf Style Fabric Wardrobe', price: 200, category: 'furniture', img: 'images/furniture1.jpeg' },
  { name: 'Office Chair', price: 255, category: 'furniture', img: 'images/furniture3.jpeg' },
  { name: 'Silver Crest Ceramic Stove', price: 445, category: 'furniture', img: 'images/furniture4.jpeg' },
  { name: 'Inflatable Sofa', price: 129, category: 'furniture', img: 'images/furniture5.jpeg' },
  { name: 'Air Cooler Fan', price: 115, category: 'furniture', img: 'images/furniture6.jpeg' },
  { name: 'Silk Wool Tie-Dye Carpet', price: 68, category: 'furniture', img: 'images/furniture7.jpeg' },
  { name: 'Ring Light', price: 79, category: 'electronics', img: 'images/electronics3.jpeg' },
  { name: 'D2000 Ultra 3 Smart Watch', price: 159, category: 'electronics', img: 'images/electronics4.jpeg' },
  { name: 'K9 Lavalier Microphone', price: 92, category: 'electronics', img: 'images/electronics9.jpeg' },
  { name: 'Lavalier Microphone', price: 219, category: 'electronics', img: 'images/electronics10.jpeg' },
  { name: 'Lavalier Microphone Pro', price: 215, category: 'electronics', img: 'images/electronics11.jpeg' },
  { name: 'Hanging Hair Dryer', price: 780, category: 'electronics', img: 'images/electronics15.jpeg' },
  { name: 'Washing Machine', price: 1184, category: 'electronics', img: 'images/electronics16.jpeg' },
  { name: 'Portable Cooker', price: 115, category: 'kitchen', img: 'images/kitchen1.jpeg' },
  { name: 'Silver Crest Electric Blender', price: 135, category: 'kitchen', img: 'images/kitchen2.jpeg' },
  { name: 'Kitchenware Set', price: 129, category: 'kitchen', img: 'images/kitchen3.jpeg' },
  { name: 'Electric Rice Cooker', price: 180, category: 'kitchen', img: 'images/kitchen7.jpeg' },
  { name: 'Cooking Utensil', price: 496, category: 'kitchen', img: 'images/kitchen6.jpeg' },
  { name: 'Utensil 3 Set', price: 345, category: 'kitchen', img: 'images/kitchen4.jpeg' },
  { name: 'Utensil Stand', price: 55, category: 'kitchen', img: 'images/kitchen5.jpeg' },
  { name: '4 Utensil Set Kitchen', price: 420, category: 'kitchen', img: 'images/kitchen8.jpeg' },
  { name: 'Multifunction Kitchen Artifact', price: 94, category: 'kitchen', img: 'images/kitchen9.jpeg' },
  { name: 'Multifunction Vegetable Cutter', price: 158, category: 'kitchen', img: 'images/kitchen10.jpeg' },
  { name: '3 Set Bottle', price: 75, category: 'kitchen', img: 'images/kitchen11.jpeg' },
  { name: '3 Set Bottle Plus', price: 83, category: 'kitchen', img: 'images/kitchen12.jpeg' },
  { name: '9 Bowl Set', price: 65, category: 'kitchen', img: 'images/kitchen13.jpeg' },
  { name: 'Ladies Bag', price: 105, category: 'fashion', img: 'images/fashion3.jpeg' },
  { name: 'Ladies 4-Set Perfume', price: 68, category: 'fashion', img: 'images/fashion4.jpeg' },
  { name: 'Travelling Bag', price: 250, category: 'fashion', img: 'images/fashion17.jpeg' },
  { name: 'Ladies Handbag', price: 105, category: 'fashion', img: 'images/fashion2.jpeg' },
  { name: 'Ladies Bag Set', price: 164, category: 'fashion', img: 'images/fashion1.jpeg' },
  { name: 'Men 4-Set Perfume', price: 68, category: 'fashion', img: 'images/fashion5.jpeg' },
  { name: '3-Set Perfume', price: 57, category: 'fashion', img: 'images/fashion6.jpeg' },
  { name: '3-Set Perfume Gold', price: 57, category: 'fashion', img: 'images/fashion7.jpeg' },
  { name: '4-Set Perfume', price: 68, category: 'fashion', img: 'images/fashion8.jpeg' },
  { name: 'Yara Perfume Set', price: 179, category: 'fashion', img: 'images/fashion9.jpeg' },
  { name: 'OUD Perfume 100ml', price: 62, category: 'fashion', img: 'images/fashion10.jpeg' },
  { name: 'Orchid Perfume (Black/Brown)', price: 54, category: 'fashion', img: 'images/fashion11.jpeg' },
  { name: '9PM Perfume', price: 98, category: 'fashion', img: 'images/fashion12.jpeg' },
  { name: 'Azzaro 100ml', price: 98, category: 'fashion', img: 'images/fashion13.jpeg' },
  { name: 'Watch Set', price: 185, category: 'fashion', img: 'images/fashion14.jpeg' },
  { name: 'Glasses (5 Pieces)', price: 134, category: 'fashion', img: 'images/fashion15.jpeg' },
  { name: 'Glasses (5 Pieces) Premium', price: 186, category: 'fashion', img: 'images/fashion16.jpeg' },
  { name: 'Female Ribbon Set', price: 55, category: 'fashion', img: 'images/fashion18.jpeg' },
  { name: 'Hair Set', price: 115, category: 'fashion', img: 'images/fashion19.jpeg' },
  { name: 'Ladies Wallet Set', price: 68, category: 'fashion', img: 'images/fashion20.jpeg' },
  { name: 'Designer Cap (5 Pieces)', price: 158, category: 'fashion', img: 'images/fashion22.jpeg' },
  { name: 'Hair Bonnet (5 Pieces)', price: 98, category: 'fashion', img: 'images/fashion23.jpeg' },
  { name: 'Standing Dressing Mirror', price: 187, category: 'fashion', img: 'images/fashion25.jpeg' },
  { name: 'Heat Comb', price: 61, category: 'fashion', img: 'images/fashion27.jpeg' },
  { name: 'Hair Straightener', price: 82, category: 'fashion', img: 'images/fashion26.jpeg' },
  { name: 'Aromatherapy (4-Set)', price: 42, category: 'fashion', img: 'images/fashion28.jpeg' },
  { name: 'Washroom Set', price: 180, category: 'auto', img: 'images/auto1.jpeg' },
  { name: 'Bathroom Toilet Gap Storage Cabinet', price: 230, category: 'auto', img: 'images/auto2.jpeg' }
].map((item, index) => ({ ...item, id: index + 1 }));

const WHATSAPP_NUMBER = '233593936951';
const MOMO_DETAILS = {
  mtn: { label: 'MTN Mobile Money', number: '0593936951', accountName: 'NAKS Importation' },
  voda: { label: 'Vodafone Cash', number: '0593936951', accountName: 'NAKS Importation' }
};

const KEY_CART = 'naksCart';
const KEY_LAST_ORDER = 'naksLastOrder';
const KEY_ORDERS = 'naksOrders';
const KEY_LAST_CUSTOMER = 'naksLastCustomer';

let cart = JSON.parse(localStorage.getItem(KEY_CART) || '[]');

function currency(value) {
  return `GHS ${Number(value).toFixed(2)}`;
}

function getOrders() {
  return JSON.parse(localStorage.getItem(KEY_ORDERS) || '[]');
}

function saveOrders(orders) {
  localStorage.setItem(KEY_ORDERS, JSON.stringify(orders));
}

function saveCart() {
  localStorage.setItem(KEY_CART, JSON.stringify(cart));
}

function getCartQty() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getTotal(items = cart) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getProductById(id) {
  return PRODUCTS.find((item) => item.id === Number(id));
}

function updateCartBadge() {
  const badge = document.getElementById('cartCount');
  if (!badge) return;
  badge.textContent = String(getCartQty());
}

function setCount(id, count) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = `${count} product${count === 1 ? '' : 's'}`;
}

function addToCart(productId, qty = 1) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, qty });
  }
  saveCart();
  updateCartBadge();
}

function updateCartItem(productId, nextQty) {
  const idx = cart.findIndex((item) => item.id === Number(productId));
  if (idx === -1) return;

  if (nextQty <= 0) {
    cart.splice(idx, 1);
  } else {
    cart[idx].qty = nextQty;
  }
  saveCart();
  updateCartBadge();
}

function getCartDetailed() {
  return cart
    .map((item) => {
      const product = getProductById(item.id);
      if (!product) return null;
      return { ...product, qty: item.qty, lineTotal: product.price * item.qty };
    })
    .filter(Boolean);
}

function sortProducts(items, sortType) {
  const copied = [...items];
  switch (sortType) {
    case 'price-asc':
      return copied.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return copied.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return copied.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return copied;
  }
}

function getFilteredProducts(options = {}) {
  const category = options.category && options.category !== 'all' ? options.category : null;
  const search = (options.search || '').trim().toLowerCase();
  const sort = options.sort || 'default';

  let filtered = category ? PRODUCTS.filter((item) => item.category === category) : [...PRODUCTS];
  if (search) {
    filtered = filtered.filter((item) => item.name.toLowerCase().includes(search));
  }
  return sortProducts(filtered, sort);
}

function cardMarkup(product) {
  return `
    <article class="product-card" data-id="${product.id}">
      <a href="product.html?id=${product.id}" class="card-link-image">
        <img src="${product.img}" alt="${product.name}">
      </a>
      <a href="product.html?id=${product.id}" class="card-title-link"><h3>${product.name}</h3></a>
      <p class="price">${currency(product.price)}</p>
      <div class="qty-control">
        <button type="button" class="qty-btn minus">-</button>
        <span class="qty-value">1</span>
        <button type="button" class="qty-btn plus">+</button>
      </div>
      <div class="card-actions">
        <button type="button" class="btn addCartBtn">Add to Cart</button>
        <button type="button" class="ghost-btn buyNowBtn">Buy Now</button>
      </div>
    </article>
  `;
}

function bindCardActions(grid) {
  grid.querySelectorAll('.product-card').forEach((card) => {
    const productId = Number(card.dataset.id);
    let qty = 1;
    const qtyEl = card.querySelector('.qty-value');

    card.querySelector('.plus')?.addEventListener('click', () => {
      qty += 1;
      qtyEl.textContent = String(qty);
    });

    card.querySelector('.minus')?.addEventListener('click', () => {
      if (qty > 1) {
        qty -= 1;
        qtyEl.textContent = String(qty);
      }
    });

    card.querySelector('.addCartBtn')?.addEventListener('click', (event) => {
      addToCart(productId, qty);
      event.currentTarget.textContent = 'Added';
      setTimeout(() => {
        event.currentTarget.textContent = 'Add to Cart';
      }, 700);
    });

    card.querySelector('.buyNowBtn')?.addEventListener('click', () => {
      addToCart(productId, qty);
      window.location.href = 'cart.html';
    });
  });
}

function renderProductGrid(containerId, items) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = '<p class="empty-state">No products found.</p>';
    return;
  }

  grid.innerHTML = items.map(cardMarkup).join('');
  bindCardActions(grid);
}

function getCartModalRefs() {
  return {
    modal: document.getElementById('cartModal'),
    overlay: document.getElementById('cartOverlay'),
    items: document.getElementById('cartItems'),
    close: document.getElementById('closeCart'),
    submit: document.getElementById('submitOrder')
  };
}

function renderCartModal() {
  const refs = getCartModalRefs();
  if (!refs.items) return;

  const detailed = getCartDetailed();
  if (!detailed.length) {
    refs.items.innerHTML = '<p class="empty-state">Your cart is empty.</p>';
    return;
  }

  refs.items.innerHTML = detailed
    .map(
      (item) => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${currency(item.price)} each</p>
          <div class="item-qty-row">
            <button class="tiny-btn dec" type="button">-</button>
            <span>${item.qty}</span>
            <button class="tiny-btn inc" type="button">+</button>
            <button class="tiny-btn danger remove" type="button">Remove</button>
          </div>
        </div>
        <p class="line-total">${currency(item.lineTotal)}</p>
      </div>
    `
    )
    .join('');

  refs.items.innerHTML += `<p class="cart-total"><strong>Total: ${currency(getTotal(detailed))}</strong></p>`;

  refs.items.querySelectorAll('.cart-item').forEach((row) => {
    const id = Number(row.dataset.id);
    const inCart = cart.find((item) => item.id === id);
    row.querySelector('.inc')?.addEventListener('click', () => {
      updateCartItem(id, (inCart?.qty || 1) + 1);
      renderCartModal();
    });
    row.querySelector('.dec')?.addEventListener('click', () => {
      updateCartItem(id, (inCart?.qty || 1) - 1);
      renderCartModal();
    });
    row.querySelector('.remove')?.addEventListener('click', () => {
      updateCartItem(id, 0);
      renderCartModal();
    });
  });
}

function openCartModal() {
  const refs = getCartModalRefs();
  if (!refs.modal) return;
  renderCartModal();
  refs.modal.classList.add('show');
  refs.modal.setAttribute('aria-hidden', 'false');
}

function closeCartModal() {
  const refs = getCartModalRefs();
  if (!refs.modal) return;
  refs.modal.classList.remove('show');
  refs.modal.setAttribute('aria-hidden', 'true');
}

function bindCartModal() {
  const refs = getCartModalRefs();
  if (!refs.modal) return;

  refs.close?.addEventListener('click', closeCartModal);
  refs.overlay?.addEventListener('click', closeCartModal);
  refs.submit?.addEventListener('click', () => {
    if (!cart.length) {
      alert('Your cart is empty.');
      return;
    }
    window.location.href = 'checkout.html';
  });
}

function renderHomePage() {
  const gridId = 'homeProductGrid';
  const grid = document.getElementById(gridId);
  if (!grid) return;
  renderProductGrid(gridId, PRODUCTS.slice(0, 12));
}

function renderShopPage() {
  const grid = document.getElementById('shopProductGrid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get('category') || 'all';
  let searchValue = '';
  let sortValue = 'default';

  const searchInput = document.getElementById('catalogSearch');
  const sortInput = document.getElementById('catalogSort');
  const categoryButtons = document.querySelectorAll('#categoryButtons [data-category]');

  const paint = () => {
    categoryButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.category === activeCategory);
    });

    const list = getFilteredProducts({ category: activeCategory, search: searchValue, sort: sortValue });
    setCount('productCount', list.length);
    renderProductGrid('shopProductGrid', list);
  };

  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      paint();
    });
  });

  searchInput?.addEventListener('input', () => {
    searchValue = searchInput.value;
    paint();
  });

  sortInput?.addEventListener('change', () => {
    sortValue = sortInput.value;
    paint();
  });

  paint();
}

function renderProductPage() {
  const root = document.getElementById('productPage');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const product = getProductById(params.get('id'));
  if (!product) {
    root.innerHTML = '<p class="empty-state">Product not found.</p>';
    return;
  }

  root.innerHTML = `
    <article class="product-detail-card">
      <div class="product-detail-image">
        <img src="${product.img}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <p class="mini-meta">${product.category.toUpperCase()}</p>
        <h1>${product.name}</h1>
        <p class="price big">${currency(product.price)}</p>
        <p class="description">High quality imported item from China. Contact NAKS on WhatsApp for delivery timeline and stock confirmation.</p>
        <div class="qty-control">
          <button class="qty-btn minus" type="button">-</button>
          <span class="qty-value">1</span>
          <button class="qty-btn plus" type="button">+</button>
        </div>
        <div class="card-actions">
          <button class="btn" id="detailAddToCart" type="button">Add to Cart</button>
          <button class="ghost-btn" id="detailBuyNow" type="button">Buy Now</button>
        </div>
      </div>
    </article>
  `;

  let qty = 1;
  const qtyEl = root.querySelector('.qty-value');
  root.querySelector('.plus')?.addEventListener('click', () => {
    qty += 1;
    qtyEl.textContent = String(qty);
  });
  root.querySelector('.minus')?.addEventListener('click', () => {
    if (qty > 1) {
      qty -= 1;
      qtyEl.textContent = String(qty);
    }
  });

  document.getElementById('detailAddToCart')?.addEventListener('click', () => addToCart(product.id, qty));
  document.getElementById('detailBuyNow')?.addEventListener('click', () => {
    addToCart(product.id, qty);
    window.location.href = 'cart.html';
  });

  const related = PRODUCTS.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 6);
  renderProductGrid('relatedProductGrid', related);
}

function renderCartPage() {
  const table = document.getElementById('cartPageItems');
  const summary = document.getElementById('cartSummaryBox');
  if (!table || !summary) return;

  const detailed = getCartDetailed();
  if (!detailed.length) {
    table.innerHTML = '<p class="empty-state">Your cart is empty. Add products from shop.</p>';
    summary.innerHTML = '<a class="btn" href="categories.html">Go to Shop</a>';
    return;
  }

  table.innerHTML = detailed
    .map(
      (item) => `
      <div class="cart-row" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}">
        <div>
          <h3><a href="product.html?id=${item.id}">${item.name}</a></h3>
          <p>${currency(item.price)} each</p>
        </div>
        <div class="item-qty-row">
          <button class="tiny-btn dec" type="button">-</button>
          <span>${item.qty}</span>
          <button class="tiny-btn inc" type="button">+</button>
        </div>
        <strong>${currency(item.lineTotal)}</strong>
        <button class="tiny-btn danger remove" type="button">Remove</button>
      </div>
    `
    )
    .join('');

  summary.innerHTML = `
    <h3>Order Summary</h3>
    <p class="summary-line"><span>Items</span><strong>${getCartQty()}</strong></p>
    <p class="summary-line"><span>Subtotal</span><strong>${currency(getTotal(detailed))}</strong></p>
    <p class="summary-line"><span>Delivery</span><strong>To be confirmed</strong></p>
    <p class="checkout-total">Total: <span>${currency(getTotal(detailed))}</span></p>
    <a href="checkout.html" class="btn">Proceed to Checkout</a>
  `;

  table.querySelectorAll('.cart-row').forEach((row) => {
    const id = Number(row.dataset.id);
    const inCart = cart.find((item) => item.id === id);
    row.querySelector('.inc')?.addEventListener('click', () => {
      updateCartItem(id, (inCart?.qty || 1) + 1);
      renderCartPage();
    });
    row.querySelector('.dec')?.addEventListener('click', () => {
      updateCartItem(id, (inCart?.qty || 1) - 1);
      renderCartPage();
    });
    row.querySelector('.remove')?.addEventListener('click', () => {
      updateCartItem(id, 0);
      renderCartPage();
    });
  });
}

function renderCheckoutSummary() {
  const list = document.getElementById('checkoutCartItems');
  const total = document.getElementById('checkoutTotal');
  if (!list || !total) return;

  const detailed = getCartDetailed();
  if (!detailed.length) {
    list.innerHTML = '<li class="empty-state">Your cart is empty.</li>';
    total.textContent = currency(0);
    return;
  }

  list.innerHTML = detailed
    .map((item) => `<li>${item.name} <strong>x ${item.qty}</strong> <span>${currency(item.lineTotal)}</span></li>`)
    .join('');
  total.textContent = currency(getTotal(detailed));
}

function isValidGhanaPhone(value) {
  const normalized = value.replace(/\s+/g, '');
  return /^(0\d{9}|233\d{9})$/.test(normalized);
}

function bindCheckoutPage() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  const detailed = getCartDetailed();
  if (!detailed.length) {
    alert('Your cart is empty.');
    window.location.href = 'categories.html';
    return;
  }

  renderCheckoutSummary();

  const saved = JSON.parse(localStorage.getItem(KEY_LAST_CUSTOMER) || 'null');
  if (saved) {
    form.fullName.value = saved.fullName || '';
    form.phone.value = saved.phone || '';
    form.deliveryAddress.value = saved.deliveryAddress || '';
    form.momoNumber.value = saved.momoNumber || '';
    form.note.value = saved.note || '';
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const customer = {
      fullName: String(formData.get('fullName') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      deliveryAddress: String(formData.get('deliveryAddress') || '').trim(),
      momoNumber: String(formData.get('momoNumber') || '').trim(),
      note: String(formData.get('note') || '').trim()
    };

    if (!customer.fullName || !customer.deliveryAddress) {
      alert('Please complete name and delivery address.');
      return;
    }
    if (!isValidGhanaPhone(customer.phone) || !isValidGhanaPhone(customer.momoNumber)) {
      alert('Please enter valid Ghana phone numbers.');
      return;
    }

    localStorage.setItem(KEY_LAST_CUSTOMER, JSON.stringify(customer));

    const network = String(formData.get('network') || 'mtn');
    const momo = MOMO_DETAILS[network];

    const order = {
      id: `NAKS-${Date.now().toString().slice(-7)}`,
      createdAt: new Date().toISOString(),
      status: 'Awaiting Payment',
      items: detailed.map((item) => ({ id: item.id, name: item.name, qty: item.qty, price: item.price, lineTotal: item.lineTotal })),
      total: getTotal(detailed),
      customer: {
        fullName: customer.fullName,
        phone: customer.phone,
        deliveryAddress: customer.deliveryAddress,
        note: customer.note
      },
      payment: {
        network,
        networkLabel: momo.label,
        customerMomoNumber: customer.momoNumber,
        merchantNumber: momo.number,
        merchantName: momo.accountName,
        transactionId: ''
      }
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    localStorage.setItem(KEY_LAST_ORDER, JSON.stringify(order));

    cart = [];
    saveCart();
    updateCartBadge();
    window.location.href = 'receipt.html';
  });
}

function buildOrderMessage(order) {
  let text = `Order Created ${order.id}\n`;
  text += `Name: ${order.customer.fullName}\n`;
  text += `Phone: ${order.customer.phone}\n`;
  text += `Delivery: ${order.customer.deliveryAddress}\n`;
  text += `Network: ${order.payment.networkLabel}\n`;
  text += '\nItems:\n';
  order.items.forEach((item, index) => {
    text += `${index + 1}. ${item.name} x ${item.qty} = ${currency(item.lineTotal)}\n`;
  });
  text += `\nTotal: ${currency(order.total)}`;
  return text;
}

function buildPaymentDoneMessage(order, trx) {
  let text = `PAYMENT DONE\nOrder: ${order.id}\n`;
  text += `Customer: ${order.customer.fullName}\n`;
  text += `Phone: ${order.customer.phone}\n`;
  text += `Transaction ID: ${trx}\n`;
  text += `Amount: ${currency(order.total)}\n`;
  text += '\nPaid Items:\n';
  order.items.forEach((item, index) => {
    text += `${index + 1}. ${item.name} x ${item.qty} = ${currency(item.lineTotal)}\n`;
  });
  return text;
}

function updateOrderStatus(orderId, nextStatus, trxId = '') {
  const orders = getOrders();
  const index = orders.findIndex((order) => order.id === orderId);
  if (index === -1) return null;

  orders[index].status = nextStatus;
  if (trxId) {
    orders[index].payment.transactionId = trxId;
  }
  saveOrders(orders);
  localStorage.setItem(KEY_LAST_ORDER, JSON.stringify(orders[index]));
  return orders[index];
}

function renderReceiptPage() {
  const card = document.getElementById('receiptCard');
  if (!card) return;

  const order = JSON.parse(localStorage.getItem(KEY_LAST_ORDER) || 'null');
  if (!order) {
    card.innerHTML = '<p class="empty-state">No active receipt found.</p><a class="btn" href="orders.html">View Orders</a>';
    return;
  }

  const statusEl = document.getElementById('paymentState');
  const orderId = document.getElementById('orderId');
  const customerName = document.getElementById('customerName');
  const customerPhone = document.getElementById('customerPhone');
  const deliveryAddress = document.getElementById('deliveryAddress');
  const productList = document.getElementById('productList');
  const totalPaid = document.getElementById('totalPaid');
  const network = document.getElementById('network');
  const momoNumber = document.getElementById('momoNumber');
  const merchantName = document.getElementById('merchantName');
  const date = document.getElementById('date');
  const orderBtn = document.getElementById('whatsAppOrderBtn');
  const trxInput = document.getElementById('transactionId');
  const paymentBtn = document.getElementById('paymentDoneBtn');
  const paymentStatus = document.getElementById('paymentStatus');

  orderId.textContent = order.id;
  customerName.textContent = order.customer.fullName;
  customerPhone.textContent = order.customer.phone;
  deliveryAddress.textContent = order.customer.deliveryAddress;
  productList.innerHTML = order.items.map((item) => `<li>${item.name} x ${item.qty}<span>${currency(item.lineTotal)}</span></li>`).join('');
  totalPaid.textContent = currency(order.total);
  network.textContent = order.payment.networkLabel;
  momoNumber.textContent = order.payment.merchantNumber;
  merchantName.textContent = order.payment.merchantName;
  date.textContent = new Date(order.createdAt).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  statusEl.textContent = order.status;
  statusEl.classList.toggle('done', order.status !== 'Awaiting Payment');

  if (order.payment.transactionId) {
    trxInput.value = order.payment.transactionId;
    trxInput.disabled = true;
    paymentBtn.disabled = true;
    paymentStatus.textContent = `Payment submitted with transaction ID: ${order.payment.transactionId}`;
  }

  orderBtn?.addEventListener('click', () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(order))}`, '_blank');
  });

  paymentBtn?.addEventListener('click', () => {
    const trx = trxInput.value.trim();
    if (trx.length < 6) {
      alert('Enter a valid transaction ID.');
      return;
    }

    const updated = updateOrderStatus(order.id, 'Payment Submitted', trx);
    if (!updated) return;

    statusEl.textContent = updated.status;
    statusEl.classList.add('done');
    trxInput.disabled = true;
    paymentBtn.disabled = true;
    paymentStatus.textContent = `Payment submitted with transaction ID: ${trx}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildPaymentDoneMessage(updated, trx))}`, '_blank');
  });
}

function renderOrdersPage() {
  const root = document.getElementById('ordersList');
  if (!root) return;

  const orders = getOrders();
  if (!orders.length) {
    root.innerHTML = '<p class="empty-state">No orders yet. Start shopping first.</p><a href="categories.html" class="btn">Go to Shop</a>';
    return;
  }

  root.innerHTML = orders
    .map(
      (order) => `
      <article class="order-card">
        <div class="order-head">
          <h3>${order.id}</h3>
          <span class="status-badge ${order.status === 'Awaiting Payment' ? '' : 'done'}">${order.status}</span>
        </div>
        <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        <p><strong>Customer:</strong> ${order.customer.fullName} (${order.customer.phone})</p>
        <p><strong>Total:</strong> ${currency(order.total)}</p>
        <ul>
          ${order.items.map((item) => `<li>${item.name} x ${item.qty} <span>${currency(item.lineTotal)}</span></li>`).join('')}
        </ul>
      </article>
    `
    )
    .join('');
}

function bindPageCartButton() {
  const btn = document.getElementById('cartContainer');
  btn?.addEventListener('click', openCartModal);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  bindCartModal();
  bindPageCartButton();

  renderHomePage();
  renderShopPage();
  renderProductPage();
  renderCartPage();
  bindCheckoutPage();
  renderReceiptPage();
  renderOrdersPage();
});
