console.log("Hello world!")

function Add_To_Cart_Button(id, name, price, image, quantityInputId)
{
    let quantity = document.getElementById(quantityInputId).value;

    if(quantity <= 0 || quantity === "")
    {
        alert("Please enter a quantity");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id: id,
        name: name,
        price: price,
        quantity: parseInt(quantity),
        image: image
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
}

