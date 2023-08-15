const productos = [
    { id: "1",imagen: "./image/1.jpeg",nombre: "Set matero negro",precio: 1500},
    { id: "2",imagen: "./image/2.jpeg",nombre: "Set matero hojas",precio: 1600},
    { id: "3",imagen: "./image/3.jpeg",nombre: "Set matero perros",precio: 1700},
    { id: "4",imagen: "./image/4.jpeg",nombre: "Cartuchera mickey",precio: 1000},
    { id: "5",imagen: "./image/5.jpeg",nombre: "Set matero verde y blanco",precio: 900},
    { id: "6",imagen: "./image/6.jpeg",nombre: "Cartuchera among us",precio: 800},
    { id: "7",imagen: "./image/7.jpeg",nombre: "Cartuchera stitch",precio: 1200},
    { id: "8",imagen: "./image/8.jpeg",nombre: "Cartuchera perros",precio: 1500},
    { id: "9",imagen: "./image/9.jpeg",nombre: "Set matero cactus",precio: 1700},
    { id: "10" ,imagen: "./image/10.jpeg",nombre: "Cartuchera Soda Stereo",precio: 1200},
    { id: "11" ,imagen: "./image/11.jpeg",nombre: "Cartuchera Jupiter",precio: 1000},
    { id: "12" ,imagen: "./image/12.jpeg",nombre: "neceser chico",precio: 1500},
    { id: "13" ,imagen: "./image/13.jpeg",nombre: "Set desmaquillante rosa y azul",precio: 500},
    { id: "14" ,imagen: "./image/14.jpeg",nombre: "Cartuchera hojas",precio: 1450},
    { id: "15" ,imagen: "./image/15.jpeg",nombre: "Set desmaquillante azul",precio: 1550},
    { id: "16" ,imagen: "./image/16.jpeg",nombre: "Nidito rosa",precio: 1500},
    { id: "17" ,imagen: "./image/17.jpeg",nombre: "Cartuchera chica",precio: 1150},
    { id: "18" ,imagen: "./image/18.jpeg",nombre: "Nidito rosa personalizado",precio: 1200},
    { id: "19" ,imagen: "./image/19.jpeg",nombre: "Nidito mickey",precio: 1000},
    { id: "20" ,imagen: "./image/20.jpeg",nombre: "Nidito pandas",precio: 1100},
    { id: "21" ,imagen: "./image/21.jpeg",nombre: "Almohadones infantiles",precio: 400},
    { id: "22" ,imagen: "./image/22.jpeg",nombre: "Bolso matero",precio: 3000},
    { id: "23" ,imagen: "./image/23.jpeg",nombre: "Neceser grande",precio: 1500},
    { id: "24" ,imagen: "./image/24.jpeg",nombre: "Combo neceser",precio: 2500}
]

const contenedorProductos = document.getElementById("cantenedor-productos")
const numCant = document.getElementById("numCantidad")
let numCantidad

function agregarProductos(){
    productos.forEach(producto =>{
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <h3>$${producto.precio}</h3>
                    <button id="${producto.id}" class="agregar">Agregar a carrito</button>`
        contenedorProductos.append(card)
    })
}

agregarProductos()
let botonesAgregar = document.querySelectorAll(".agregar")
botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarACarrito)
})

let carrito
let carritolocalstoraje = JSON.parse(localStorage.getItem("carrito"))
if(carritolocalstoraje){
    carrito = carritolocalstoraje
    actualizarCantidad()
}else{
    carrito = []
}



function agregarACarrito(evento){
    const id = evento.currentTarget.id
    const agregarProducto = productos.find(producto => producto.id === id)
    if(carrito.some(producto => producto.id === id)){
        const indice = carrito.findIndex(producto => producto.id === id)
        carrito[indice].cantidad++
    }else{
        agregarProducto.cantidad = 1
        carrito.push(agregarProducto)
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarCantidad()
}

function actualizarCantidad(){
    numCantidad = carrito.reduce((acc, producto)=> acc + producto.cantidad, 0)
    numCant.innerText = numCantidad
}