console.log("Hello world!")

<script>
function addToCart(name, price, image, qtyId) {

    let quantity = document.getElementById(qtyId).value;

    if(quantity <= 0 || quantity == ""){
        alert("Enter quantity");
        return;
    }

    let total = price * quantity;

    localStorage.setItem("itemName", name);
    localStorage.setItem("itemPrice", price);
    localStorage.setItem("itemQty", quantity);
    localStorage.setItem("itemImage", image);
    localStorage.setItem("itemTotal", total);

    window.location.href = "cart.html";
}
</script>