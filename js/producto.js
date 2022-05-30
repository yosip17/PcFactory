let carrito = {};

document.addEventListener('DOMContentLoaded', () =>{
    fetchData();
});

// Este callback toma el json de la base de datos
// y pasa sus datos al método que grafica el producto 
const fetchData = async () =>{
    try {
        const res = await fetch('bd/api.json');
        const data = await res.json();
        // console.log(data);
        // Por ahora se manda a llamar al producto 1
        // En un futuro se dibujará el producto 
        // seleccionado en el catálogo
        let indexProducto = 0;
        //Obtener la variable del url
        //Se realiza una vavlidación de que se haya pasado un enlace
        //Después se cambia el idProducto por el id pasado
        var params = new URLSearchParams(window.location.search)
        if(params.get("pid") != ""){
            indexProducto = params.get("pid") - 1;
        }
        pintarProducto(data,indexProducto);
    } catch (error) {
        console.log(error);
    }
} 
const pintarProducto = (data,indexProducto) =>{
    // console.log(data);
    producto = data[indexProducto];
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("imagen").setAttribute("src", producto.imagen); 
    document.getElementById("precio").textContent = "Precio: " + producto.precio;
    if(producto.descDetallada != "" || producto.descDetallada != NULL){
        document.getElementById("descripcion").textContent = producto.descDetallada;
    }
    if(producto.descripcion != "" || producto.descripcion != NULL){
        document.getElementById("descripcion").textContent = producto.descripcion;
    }
}

// obtiene todo el html correspondiente a las tarjetas de los productos
 const setCart = objeto =>{
     console.log(objeto);
 }
