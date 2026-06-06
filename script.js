console.log("Hello world!")
function Add_To_Cart_Button(productId) {
    let quantityInput = document.getElementById("item_quantity_" + productId);

    let quantity = Number(quantityInput.value);

    if (!quantity || quantity <= 0) {
        alert("Please enter quantity");
        return;
    }

    // Example product database (you can expand this)
    let products = {
        101: {
            name: "Double Bacon & Cheese Burger",
            price: 20.5,
            image: "Items_IMG/Large_Burger.png"
        },
        102: {
            name: "Large Seasoned Chips",
            price: 15.5,
            image: "Items_IMG/Large_Fries.png"
        }
    };

    let product = products[productId];

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        total: product.price * quantity
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}