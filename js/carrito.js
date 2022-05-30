const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener('DOMContentLoaded', () =>{
    fetchData();
});
cards.addEventListener('click', e=>{
    addCart(e);
});
const fetchData = async () =>{
    try {
        const res = await fetch('bd/api.json');
        const data = await res.json();
        // console.log(data);
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
} 
const pintarCards = data =>{
    // console.log(data);
    data.forEach(producto =>{
        templateCard.querySelector("div img").setAttribute("src", producto.imagen); 
        templateCard.querySelector("div p span").textContent = producto.precio;
        templateCard.querySelector("p.title").textContent = producto.descripcion;
        templateCard.querySelector(".btn-add-cart").dataset.id = producto.id;
        //Crear link al producto dinamicamente, pasando el parametro al link
        // El parametro es el id del producto
        var params = new URLSearchParams();
        params.append("pid",producto.id);
        templateCard.querySelector(".btn-add-product").setAttribute("href","producto.html?"+params.toString())
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}

const addCart = e =>{
    if(e.target.classList.contains('btn-add-cart')){
        setCart(e.target.parentElement);
    }
    e.stopPropagation();
}
// obtiene todo el html correspondiente a las tarjetas de los productos
 const setCart = objeto =>{
     console.log(objeto);
 }
