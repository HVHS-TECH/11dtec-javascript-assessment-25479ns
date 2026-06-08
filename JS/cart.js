let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cartItems");

cart.forEach(item =>
{
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

function ResetCart() {
    localStorage.removeItem("cart");
    alert("Your cart has been reset!");
    location.reload();
}