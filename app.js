
const contenedorProductos = document.getElementById("contenedor-productos");
const selecTipo = document.getElementById("selecTipo")


selecTipo.addEventListener("change", () => {
    console.log(selecTipo.value)
    if (selecTipo.value == "all") {
        mostrarProductos(StockProductos)
    } else {
        mostrarProductos(StockProductos.filter(el => el.tipo == selecTipo.value))
    }
    mostrarProductos(StockProductos)
    function mostrarProductos(array) {
        contenedorProductos.innerHTML = "";
        array.forEach(StockProductos => {
            let div = document.createElement("div")
            div.className = "producto"

            div.innerHTML = `               
                <div class="card" style="width: 18rem;">
                <img>${StockProductos.Image}<img>
                    <span>${StockProductos.nombre} </span>
                    <a id="boton${StockProductos.id}"></a>
                    <div class="card-body">
                        <p>${StockProductos.desc} </p>
                        <p>${StockProductos.precio} </p>
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                </div>`
            contenedorProductos.appendChild(div);
        }
        )
    }
})