const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

addProductButton.addEventListener("click", addProduct);

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

function addProduct(e) {
  if (productPriceInput.value && productNameInput.value) {
    let newLi = document.createElement("li");
    newLi.textContent = `${productNameInput.value} $${productPriceInput.value} `;
    newLi.dataset.price = Number(productPriceInput.value);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", removeItem);
    newLi.appendChild(deleteButton);

    cart.appendChild(newLi);
    updateTotalPrice(Number(productPriceInput.value));
  } else {
    window.alert("Please enter valid values");
  }
}
