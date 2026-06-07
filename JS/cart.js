<script>
    
    const menuItems = {
    101: { name: "Double Bacon & Cheese Burger", price: 12.00 },
    102: { name: "Straight Cut Seasoned French Fries", price: 8.00 },
    103: { name: "Crispy Chicken Burger", price: 10.00 },
    104: { name: "Fillet-O-Fish Burger", price: 8.00 },
    105: { name: "Supreme Chicken & Bacon Delight Sandwich", price: 25.00 },
    106: { name: "Vegan Chickan & Cranberry Sandwich", price: 20.00 },
    107: { name: "Creamy Chickan & Avacado Sandwich", price: 23.00 },
    108: { name: "Seasoned Curly Fries", price: 8.50 },
    109: { name: "Crispy Chicken Nuggets", price: 10.00 },
    110: { name: "Flat White", price: 6.00 },
    111: { name: "Hot Chocolate", price: 8.00 },
    112: { name: "Dilmah English Breakfast Tea", price: 8.00 },
    113: { name: "Iced Coffee", price: 7.00 },
    114: { name: "Milkshakes", price: 9.00 },
    115: { name: "Soft Drinks", price: 5.00 },
    116: { name: "Chocolate Mud Cake", price: 75.00 },
    117: { name: "Rainbow Ribbon Delight", price: 75.00 },
    118: { name: "Vanilla Coffee Cake", price: 45.00 }
};

function Add_To_Cart_Button(itemId) 
{
    const quantityinput =
          document.getElementById("item_quantity_" + itemId);

    
    const quantity = parseInt(quantityInput.value);

    if (!quantity || quantity <= 0)
    {
        alert("Please enter a valid quantity.");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id: itemId,
        name: menuItems[itemId].name,
        price: menuItems[itemId].price,
        quantity: quantity,
        total: menuItems[itemId].price * quantity
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}


</script>