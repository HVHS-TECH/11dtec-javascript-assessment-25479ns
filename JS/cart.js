let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cartItems");

let grandTotal = 0;

cart.forEach(item => {
    grandTotal += item.price * item.quantity;
    let itemDiv = document.createElement("div");

    itemDiv.innerHTML = `
        <div style="
            display:flex;
            align-items:center;
            gap:15px;
            margin-bottom:15px;
            border:1px solid #ccc;
            padding:10px;
        ">
            <img src="${item.image}"
                 width="80"
                 height="80"
                 alt="${item.name}">

            <div>
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    `;

    cartContainer.appendChild(itemDiv);
});

document.getElementById("grandTotal").textContent =
`Cart Total: $${grandTotal.toFixed(2)}`;

function ResetCart() {
    localStorage.removeItem("cart");
    location.reload();
}

function SubmitInfo() {

if (customerMoney >= grandTotal) {
    alert ("Your order has been placed");
} else {
    alert ("You have inffcient funds. Please Try Again")
 }
}