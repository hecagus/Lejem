let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cartList");
    list.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        list.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function sendOrder() {
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    if (!nombre || !direccion) {
        alert("Por favor completa nombre y dirección.");
        return;
    }

    let message = `*Nuevo Pedido Lejem Pizza*\n`;
    message += `\n*Cliente:* ${nombre}`;
    message += `\n*Dirección:* ${direccion}`;
    message += `\n\n*Pedido:*`;

    cart.forEach(item => {
        message += `\n- ${item.name}: $${item.price}`;
    });

    message += `\n\n*Total:* $${total}`;

    const url = `https://wa.me/528135037076?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
