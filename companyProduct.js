// Step 1: Create an array to hold the inventory of store items.
let inventory = [];

// Step 2: Create three items with properties of name, model, cost, and quantity.
let item1 = {
    name: "Laptop",
    model: "i5-1235U",
    cost: 150000,
    quantity: 10
};

let item2 = {
    name: "Smartphone",
    model: "iPhone 14",
    cost: 80000,
    quantity: 20
};

let item3 = {
    name: "TV",
    model: "TCL LED Tv",
    cost: 100000,
    quantity: 15
};

// Step 3: Add all three objects to the main array using an array method.
inventory.push(item1);
inventory.push(item2);
inventory.push(item3);

// Log the inventory array to the console.
console.log("Inventory:");
console.log(inventory);

// Step 4: Access the quantity element of your third item and log it to the console.
let thirdItemQuantity = inventory[2].quantity;
console.log("Quantity of the third item: " + thirdItemQuantity);
