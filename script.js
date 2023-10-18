const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = [];
let total = 0;

document.addEventListener("click", (event) => {
    if (event.target.id === "add-to-cart") {
        // Get product information from the clicked button's parent
        const productContainer = event.target.closest(".product-details");
        const productName = productContainer.querySelector(".product-name").textContent;
        const productPrice = parseFloat(productContainer.querySelector(".product-price").textContent.replace("$", ""));

        // Create a product object with the extracted information
        const product = {
            name: productName,
            price: productPrice,
        };

        cart.push(product);
        total += product.price;

        updateCart();
    }
});

function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}
