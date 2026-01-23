// -----------------------------
// Products Data
// -----------------------------
const products = [
  // Furniture
  {name:'Shelf Style Fabric Wardrobe', price:200, category:'furniture', img:'images/furniture1.jpeg'},
  {name:'Office Chair', price:255, category:'furniture', img:'images/furniture3.jpeg'},
  {name:'Silver Crest Ceramic Stove', price:445, category:'furniture', img:'images/furniture4.jpeg'},
  // Electronics
  {name:'Ring Light', price:79, category:'electronics', img:'images/electronics3.jpeg'},
  {name:'D2000 Ultra 3 Smart Watch', price:159, category:'electronics', img:'images/electronics4.jpeg'},
  {name:'Portable Chargeable Mobile Phone Light', price:'2pieces-159', category:'electronics', img:'images/electronics1.jpeg'},
   {name:'Bluetooth Speaker Set', price:379, category:'electronics', img:'images/electronics2.jpeg'},
  // Kitchen
  {name:'Portable Cooker', price:115, category:'kitchen', img:'images/kitchen1.jpeg'},
   {name:'Silver Crest Electric Blender', price:135, category:'kitchen', img:'images/kitchen2.jpeg'},
    {name:'Kitchenware Set', price:129, category:'kitchen', img:'images/kitchen3.jpeg'},
     {name:'Electric Rice Cooker', price:180, category:'kitchen', img:'images/kitchen7.jpeg'},
      {name:'Cooking Utensil', price:496, category:'kitchen', img:'images/kitchen6.jpeg'},
       {name:'Utensil 3 set', price:345, category:'kitchen', img:'images/kitchen4.jpeg'},
        {name:'For Kitchen', price:55, category:'kitchen', img:'images/kitchen5.jpeg'},
  // Fashion
  {name:'Ladies Bag', price:105, category:'fashion', img:'images/fashion3.jpeg'},
  {name:'Ladies 4set Perfume', price:68, category:'fashion', img:'images/fashion4.jpeg'},
  {name:'Travelling Bag', price:250, category:'fashion', img:'images/fashion17.jpeg'},
  {name:'Ladies HandBag', price:105, category:'fashion', img:'images/fashion2.jpeg'},
  {name:'Ladies Bag Set', price:164, category:'fashion', img:'images/fashion1.jpeg'},
  {name:'Men 4set perfume', price:68, category:'fashion', img:'images/fashion5.jpeg'},
  {name:'3set Perfume', price:57, category:'fashion', img:'images/fashion6.jpeg'},
  {name:'3set Perfume', price:57, category:'fashion', img:'images/fashion7.jpeg'},
  {name:'4set Perfume', price:68, category:'fashion', img:'images/fashion8.jpeg'},
  {name:'Yara Perfume Set', price:179, category:'fashion', img:'images/fashion9.jpeg'},
  {name:'OUD Perfume 100ml', price:62, category:'fashion', img:'images/fashion10.jpeg'},
  {name:'ORCHID Perfume Colours: Black & Brown', price:54, category:'fashion', img:'images/fashion11.jpeg'},
  {name:'9PM Perfume', price:98, category:'fashion', img:'images/fashion12.jpeg'},
  {name:'Azzaro 100ml', price:98, category:'fashion', img:'images/fashion13.jpeg'},
  {name:'Watch Set', price:185, category:'fashion', img:'images/fashion14.jpeg'},
  {name:'Glasses (5pieces)', price:134, category:'fashion', img:'images/fashion15.jpeg'},
  {name:'Glasses (5pieces)', price:186, category:'fashion', img:'images/fashion16.jpeg'},
  // Auto
  {name:'Motorcycle Helmet', price:150, category:'auto', img:'images/auto1.jpg'},
];

// WhatsApp number
const whatsappNumber = '233593936951';

// -----------------------------
// Cart System
// -----------------------------
let cart = JSON.parse(localStorage.getItem('naksCart')) || [];

function updateCartBadge() {
  document.getElementById('cartCount').innerText = cart.length;
  localStorage.setItem('naksCart', JSON.stringify(cart));
}

function addToCart(product, qty=1, size='') {
  cart.push({...product, qty, size});
  updateCartBadge();
}

// -----------------------------
// Load products for category or featured
// -----------------------------
function loadProducts(containerId='product-grid', category=null) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = category ? products.filter(p=>p.category===category) : products;

  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: GHS ${p.price}</p>
      <div class="product-actions">
        <input type="number" min="1" value="1" class="qtyInput">
        <button class="btn addCartBtn">Add to Cart</button>
      </div>
    `;
    grid.appendChild(div);

    // Add to cart click
    div.querySelector('.addCartBtn').addEventListener('click', ()=>{
      const qty = parseInt(div.querySelector('.qtyInput').value);
      addToCart(p, qty);
    });
  });
}

// -----------------------------
// Category filter
// -----------------------------
function filterCategory(category) {
  loadProducts('product-grid', category);
}

// -----------------------------
// Chat all items to WhatsApp
// -----------------------------
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartBadge();
  loadProducts(); // load featured on homepage

  // Cart click
  document.getElementById('cartContainer').addEventListener('click', ()=>{
    if(cart.length===0){
      alert('Your cart is empty');
      return;
    }
    let message = 'Hello NAKS Importation, I want to order:\n';
    cart.forEach((item,i)=>{
      message += `${i+1}. ${item.name}${item.size? ' – Size: '+item.size:''} – Qty: ${item.qty} – Price: GHS ${item.price}\n`;
    });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  });
});

// -----------------------------
// Load cart to receipt page
// -----------------------------
function loadCartReceipt(){
  const order = JSON.parse(localStorage.getItem('naksCart')) || [];
  document.getElementById('customerName').innerText = 'Emmanuel Oteng';
  const productList = document.getElementById('productList');
  let total = 0;
  order.forEach(p=>{
    const li = document.createElement('li');
    li.textContent = `${p.name}${p.size? ' – Size: '+p.size:''} – Qty: ${p.qty} – Price: GHS ${p.price}`;
    productList.appendChild(li);
    total += p.price * p.qty;
  });
  document.getElementById('totalPaid').innerText = total;
  document.getElementById('date').innerText = new Date().toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'});
}
