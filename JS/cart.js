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

       let name = document.getElementById("customerName").value.trim();
    let money = Number(document.getElementById("customerMoney").value);

    if (!name) {
        alert("Please enter your name");
        return;
    }

    if (!money) {
        alart("Please enter your money");
        return;
    }

    if (money < grandTotal) {
        alert("You have insufficient funds. Please Try Again");
        return;
    }

    alert("Thank you! Your order has been placed");

    let balance = money - grandTotal;

    // Create cart items for your receipt
    let receiptItems = "";

    cart.forEach(item => {
        receiptItems += `
            <div class="receipt_Chosen_Items">
                <span>
                    ${item.name} x${item.quantity}
                </span>
                <span>
                    $${(item.price * item.quantity).toFixed(2)}
                </span>
            </div>
        `;
    });

    let receiptDiv = document.getElementById("receipt");

    receiptDiv.innerHTML = `
        <div class="receipt_Top">

            <div class="receipt_logo">
                <h2>CAFÉ DELIGHT</h2>
            </div>

            <h3>Purchase Receipt</h3>
            <p><strong>Customer:</strong> ${name}</p>
            <p><strong>Date:</strong> 
                ${new Date().toLocaleDateString()}
            </p>

        </div>

        <div class="receipt_Chosen_Items_Aligning">
            ${receiptItems}
        </div>

        <div class="receipt_Bottom">

            <div class="receipt_Total_Price">
                <strong>Total Price</strong>
                <strong>$${grandTotal.toFixed(2)}</strong>
            </div>

            <div class="receipt_Chosen_Given_Amount">
                <span>Amount Given</span>
                <span>$${money.toFixed(2)}</span>
            </div>

            <div class="receipt_Chosen_Change">
                <span>Change</span>
                <span>$${balance.toFixed(2)}</span>
            </div>

        </div>
    `;

    document.getElementById("receiptPopup").style.display = "flex";
}