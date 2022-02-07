
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
            div.className = "prodcuto"
            
            div.innerHTML =
               
                <div class="card" style="width: 18rem;">
                    <span>${producto.nombre} </span>
                    <a id="boton${producto.id}"></a>
                    <div class="card-body">
                        <p>${producto.desc} </p>
                        <p>${producto.precio} </p>
                    </div>
                </div>
            contenedorProductos.appendChild(div)
        }
        )
    }
})