let inventory = {
    "001": { name: "Producto 1", quantity: 10 },
    "002": { name: "Producto 2", quantity: 15 },
    "003": { name: "Producto 3", quantity: 20 },
    "004": { name: "Producto 4", quantity: 25 },
    "005": { name: "Producto 5", quantity: 30 }
};

// Función para reducir el stock de un producto
function reduceStock() {
    const productCode = prompt("Ingresa el código del producto:");
    const quantity = parseInt(prompt("Ingresa la cantidad a reducir del stock:"));

    if (!inventory[productCode]) {
        alert("El producto no existe en el inventario.");
        return;
    }

    if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, ingresa una cantidad válida para reducir el stock.");
        return;
    }

    if (inventory[productCode].quantity < quantity) {
        alert("No hay suficiente stock disponible para reducir.");
        return;
    }

    inventory[productCode].quantity -= quantity;
    displayInventory();
}

// Función para mostrar el inventario de productos
function displayInventory() {
    let inventoryOutput = "Inventario Actual:\n\n";
    for (const code in inventory) {
        const product = inventory[code];
        inventoryOutput += `${code}: ${product.name} - Stock: ${product.quantity}\n`;
        alert(`${code}: ${product.name} - Stock: ${product.quantity}`);
    }
    alert(inventoryOutput);
}

reduceStock();