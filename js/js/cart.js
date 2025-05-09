// Add item to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  }
  
  // Display cart items
  document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }
  
    const productMap = {
      1: { name: 'Product 1', price: 19.99 },
      2: { name: 'Product 2', price: 24.99 }
      // Add more as needed
    };
  
    let total = 0;
    cartContainer.innerHTML = '';
    cart.forEach((id) => {
      const product = productMap[id];
      if (product) {
        total += product.price;
        const item = document.createElement('div');
        item.textContent = `${product.name} - $${product.price}`;
        cartContainer.appendChild(item);
      }
    });
  
    const totalElem = document.createElement('p');
    totalElem.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
    cartContainer.appendChild(totalElem);
  });
  