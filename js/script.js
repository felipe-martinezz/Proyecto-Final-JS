// Creamos clase Champion

class Champion {
    constructor(id, marca, modelo, talle, stockPorTalle, precio, unidadesTotales, imagen) {
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.talle = talle
        this.stockPorTalle = stockPorTalle
        this.precio = precio
        this.unidadesTotales = unidadesTotales
        this.imagen = imagen
    }
}

// Agregamos las entradas individuales para llenar el array segun el formato de la clase

const championes1 = new Champion(1, "Nike", "Hyperdunk", ["40"], ["10"], "7000", "10", "imagenes/nike-hyperdunk.jpg")
const championes2 = new Champion(2, "Nike", "KD", ["43"], ["5"], "7500", "5", "imagenes/nike kd.jpg")
const championes3 = new Champion(3, "Adidas", "Harden", ["43"], ["10"], "6000", "10", "imagenes/adidas harden.jpg")
const championes4 = new Champion(4, "Adidas", "Rose", ["46"], ["10"], "5500", "10", "imagenes/adidas rose.jpg")
const championes5 = new Champion(5, "Under Armour", "Curry", ["47"], ["15"], "9000", "15", "imagenes/ua curry.jpg")
const championes6 = new Champion(6, "Under Armour", "Embiid", ["41"], ["15"], "8500", "15", "imagenes/ua embiid.jpg")
const championes7 = new Champion(7, "Converse", "Chuck Taylor", ["42"], ["20"], "4500", "20", "imagenes/as chuck taylor.jpg")
const championes8 = new Champion(8, "Jordan", "Melo III", ["44"], ["10"], "7000", "10", "imagenes/jordan melo.webp")
const championes9 = new Champion(9, "Jordan", "CP3 II", ["45"], ["10"], "6500", "10", "imagenes/jordan cp3.webp")


// Creamos el array que va a contener todos los productos

const arrayChampiones = [championes1, championes2, championes3, championes4, championes5, championes6, championes7, championes8, championes9]

// Todos los filtros actuan a traves de una funcion asincronica utlizando fetch 

const productosTotales = async () => {

    const response = await fetch('data/championes.json')
    const data = await response.json()

    // Conteo de productos Inferiores a 6000

    let rangoPreciosInferior = data.filter((elemento) => elemento.precio <= 6000)
    cantidadProductosPrecioInferior = rangoPreciosInferior.length
    let mostrarCantidadPrecioInferior = document.getElementById("precioInferior");
    mostrarCantidadPrecioInferior.innerHTML = `${cantidadProductosPrecioInferior}`;

    // Conteo de productos Superiores a 6000

    let rangoPreciosSuperior = data.filter((elemento) => elemento.precio > 6000)
    cantidadProductosPrecioSuperior = rangoPreciosSuperior.length
    let mostrarCantidadPrecioSuperior = document.getElementById("precioSuperior");
    mostrarCantidadPrecioSuperior.innerHTML = `${cantidadProductosPrecioSuperior}`;

    // Conteo de championes Nike 

    let productosNike = data.filter((elemento) => elemento.marca.includes("Nike"));
    cantidadProductosNike = productosNike.length
    let mostrarCantidadProductosNike = document.getElementById("productoNike")
    mostrarCantidadProductosNike.innerHTML = `${cantidadProductosNike}`;

    // Conteo de championes Adidas

    let productosAdidas = data.filter((elemento) => elemento.marca.includes("Adidas"));
    cantidadProductosAdidas = productosAdidas.length
    let mostrarCantidadProductosAdidas = document.getElementById("productoAdidas")
    mostrarCantidadProductosAdidas.innerHTML = `${cantidadProductosAdidas}`;

    // Conteo de championes Under Armour

    let productosUnderArmour = data.filter((elemento) => elemento.marca.includes("Under Armour"));
    cantidadProductosUnderArmour = productosUnderArmour.length
    let mostrarCantidadProductosUnderArmour = document.getElementById("productoUnderArmour")
    mostrarCantidadProductosUnderArmour.innerHTML = `${cantidadProductosUnderArmour}`;

    // Conteo de championes Jordan
    let productosJordan = data.filter((elemento) => elemento.marca.includes("Jordan"));
    cantidadProductosJordan = productosJordan.length
    let mostrarCantidadProductosJordan = document.getElementById("productoJordan")
    mostrarCantidadProductosJordan.innerHTML = `${cantidadProductosJordan}`;

    // Conteo de championes Converse
    let productosConverse = data.filter((elemento) => elemento.marca.includes("Converse"));
    cantidadProductosConverse = productosConverse.length
    let mostrarCantidadProductosConverse = document.getElementById("productoConverse")
    mostrarCantidadProductosConverse.innerHTML = `${cantidadProductosConverse}`;

    // Conteo de productos talle 40

    let productosTalle40 = data.filter((elemento) => elemento.talle[0]["40"] > 0)
    cantidadProductosTalle40 = productosTalle40.length
    let mostrarCantidadProductosTalle40 = document.getElementById("talle40")
    mostrarCantidadProductosTalle40.innerHTML = `${cantidadProductosTalle40}`;

    // Conteo de productos talle 41

    let productosTalle41 = data.filter((elemento) => elemento.talle[0]["41"] > 0)
    cantidadProductosTalle41 = productosTalle41.length
    let mostrarCantidadProductosTalle41 = document.getElementById("talle41")
    mostrarCantidadProductosTalle41.innerHTML = `${cantidadProductosTalle41}`;

    // Conteo de productos talle 42

    let productosTalle42 = data.filter((elemento) => elemento.talle[0]["42"] > 0)
    cantidadProductosTalle42 = productosTalle42.length
    let mostrarCantidadProductosTalle42 = document.getElementById("talle42")
    mostrarCantidadProductosTalle42.innerHTML = `${cantidadProductosTalle42}`;

    // Conteo de productos talle 43

    let productosTalle43 = data.filter((elemento) => elemento.talle[0]["43"] > 0)
    cantidadProductosTalle43 = productosTalle43.length
    let mostrarCantidadProductosTalle43 = document.getElementById("talle43")
    mostrarCantidadProductosTalle43.innerHTML = `${cantidadProductosTalle43}`;

    // Conteo de productos talle 44

    let productosTalle44 = data.filter((elemento) => elemento.talle[0]["44"] > 0)
    cantidadProductosTalle44 = productosTalle44.length
    let mostrarCantidadProductosTalle44 = document.getElementById("talle44")
    mostrarCantidadProductosTalle44.innerHTML = `${cantidadProductosTalle44}`;

    // Conteo de productos talle 45

    let productosTalle45 = data.filter((elemento) => elemento.talle[0]["45"] > 0)
    cantidadProductosTalle45 = productosTalle45.length
    let mostrarCantidadProductosTalle45 = document.getElementById("talle45")
    mostrarCantidadProductosTalle45.innerHTML = `${cantidadProductosTalle45}`;

    // Conteo de productos talle 46

    let productosTalle46 = data.filter((elemento) => elemento.talle[0]["46"] > 0)
    cantidadProductosTalle46 = productosTalle46.length
    let mostrarCantidadProductosTalle46 = document.getElementById("talle46")
    mostrarCantidadProductosTalle46.innerHTML = `${cantidadProductosTalle46}`;

    // Conteo de productos talle 47

    let productosTalle47 = data.filter((elemento) => elemento.talle[0]["47"] > 0)
    cantidadProductosTalle47 = productosTalle47.length
    let mostrarCantidadProductosTalle47 = document.getElementById("talle47")
    mostrarCantidadProductosTalle47.innerHTML = `${cantidadProductosTalle47}`;

    // Conteo Total de productos

    let cantidadProductos = data.length
    let mostrarTotal = document.getElementsByClassName("totalProductos");

    for (const mostrar of mostrarTotal) {
        mostrar.innerHTML = `${cantidadProductos}`;
    }

    /// Elementos para filtrar por Precio

    let todosLosPrecios = document.getElementById("price-all")
    let preciosBajos = document.getElementById("price-1")
    let preciosAltos = document.getElementById("price-2")

    todosLosPrecios.addEventListener('click', () => {filtroLateral(todosLosPrecios,data)});
    preciosAltos.addEventListener('click', () => {filtroLateral(preciosAltos,rangoPreciosSuperior)});
    preciosBajos.addEventListener('click', () => {filtroLateral(preciosBajos,rangoPreciosInferior)});

    /// Elementos para filtrar por Talle

    let traerTodosLosTalles = document.getElementById("size-all")
    let traerTalle40 = document.getElementById("size-1")
    let traerTalle41 = document.getElementById("size-2")
    let traerTalle42 = document.getElementById("size-3")
    let traerTalle43 = document.getElementById("size-4")
    let traerTalle44 = document.getElementById("size-5")
    let traerTalle45 = document.getElementById("size-6")
    let traerTalle46 = document.getElementById("size-7")
    let traerTalle47 = document.getElementById("size-8")

    traerTodosLosTalles.addEventListener('click', () => {filtroLateral(traerTodosLosTalles,data)});
    traerTalle40.addEventListener('click', () => {filtroLateral(traerTalle40,productosTalle40)});
    traerTalle41.addEventListener('click', () => {filtroLateral(traerTalle41,productosTalle41)});
    traerTalle42.addEventListener('click', () => {filtroLateral(traerTalle42,productosTalle42)});
    traerTalle43.addEventListener('click', () => {filtroLateral(traerTalle43,productosTalle43)});
    traerTalle44.addEventListener('click', () => {filtroLateral(traerTalle44,productosTalle44)});
    traerTalle45.addEventListener('click', () => {filtroLateral(traerTalle45,productosTalle45)});
    traerTalle46.addEventListener('click', () => {filtroLateral(traerTalle46,productosTalle46)});
    traerTalle47.addEventListener('click', () => {filtroLateral(traerTalle47,productosTalle47)});

    /// Elementos para filtrar por Marca

    let todasLasMarcas = document.getElementById("brand-all")
    let marcaNike = document.getElementById("brand-1")
    let marcaAdidas = document.getElementById("brand-2")
    let marcaUnderArmour = document.getElementById("brand-3")
    let marcaJordan = document.getElementById("brand-4")
    let marcaConverse = document.getElementById("brand-5")

    todasLasMarcas.addEventListener('click', () => { filtroLateral(todasLasMarcas,data)});
    marcaNike.addEventListener('click', () => {filtroLateral(marcaNike,productosNike)});
    marcaAdidas.addEventListener('click', () => {filtroLateral(marcaAdidas,productosAdidas)});
    marcaUnderArmour.addEventListener('click', () => {filtroLateral(marcaUnderArmour,productosUnderArmour)});
    marcaJordan.addEventListener('click', () => {filtroLateral(marcaJordan,productosJordan)});
    marcaConverse.addEventListener('click', () => {filtroLateral(marcaConverse,productosConverse)});

}

productosTotales()

// Creamos una funcion que muestra los productos */

function muestraProductos(array){

    for (const producto of array) {

        // Agregamos descuento sobre los productos 
        
        /// Se construyen los elementos utilizando DOM
    
        let contenedorProducto = document.createElement('div');
    
        contenedorProducto.classList.add('productoListado', 'col-lg-4', 'col-md-6', 'col-sm-12', 'pb-1');

        const { id, imagen, marca, modelo, precio } = producto

        let descuento = precio * 0.95

        contenedorProducto.innerHTML =  `<div class='card product-item border-0 mb-4'>
                                            <div class='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                                                <img class='img-fluid w-100' src='${imagen}' alt=''>
                                            </div>
                                            <div class='card-body border-left border-right text-center p-0 pt-4 pb-3'>
                                                <h6 class='text-truncate mb-3'>${marca} ${modelo}</h6>
                                                <div class='d-flex justify-content-center'>
                                                    <h6>${descuento}</h6><h6 class='text-muted ml-2'><del>${precio}</del></h6>
                                                </div>
                                            </div>
                                            <div class='card-footer d-flex justify-content-between bg-light border'>
                                                <a id="${marca} ${modelo}" class='verDetalle btn btn-sm text-dark p-0'><i class='fas fa-eye text-primary mr-1'></i>Ver Detalle</a>
                                                <a id="${id}" class='carrito btn btn-sm text-dark p-0'><i class='fas fa-shopping-cart text-primary mr-1'></i>Añadir al Carrito</a>
                                            </div>
                                        </div>`;        
    
        document.getElementsByClassName("mostrarProductos")[0].appendChild(contenedorProducto);                                    
    
    }
}

// Llamamos a la funcion para mostrar todos los productos
muestraProductos(arrayChampiones)

// Creamos filtro por busqueda de modelo

let buscarPorModelo = document.getElementById("buscaModelo");
buscarPorModelo.addEventListener('input', () => {
        // eliminamos los elementos actuales
        const elements = document.getElementsByClassName("productoListado");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
    }
        // filtramos dependiendo del input del usuario y llamamos a la funcion muestra con estos nuevos valores
        filtrado = arrayChampiones.filter((elemento) => elemento.modelo.includes(buscarPorModelo.value))
        muestraProductos(filtrado)
    
})

// Verificamos la cantidad de objetos en el carrito para la sesion actual.

/// Agregamos sugarsyntax operador logico OR para cambiar la carga del carrito

const carrito = JSON.parse(sessionStorage.getItem('carrito')) || []
let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
mostrarCantidadProductosCarrito.innerHTML = `${carrito.length}`;

// Cargamos productos al carrito

function cargaCarrito (champion) {

    let carrito = sessionStorage.getItem('carrito');
        if(carrito == null) {
            carrito = [];
        } else {
            carrito = JSON.parse(carrito);
            console.log("Agregando producto al carrito")
        }

    sessionStorage.setItem('carrito', JSON.stringify(carrito.concat(champion)));

    let traerObjetosCarrito = sessionStorage.getItem('carrito');
    let traerObjetosCarritoJSON = JSON.parse(traerObjetosCarrito)

    let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
    mostrarCantidadProductosCarrito.innerHTML = `${traerObjetosCarritoJSON.length}`;  
}

function verDetalles(arrayChampiones){
    arrayChampiones.forEach(champion => {

        let agregarChamp = document.getElementById(champion.modelo)
        agregarChamp.onclick = () => {

            Swal.fire({
                title: ''+ champion.modelo +'',
                html:
                    '<div style="display: flex;Justify-content: space-between"><img class="img-fluid w-50" src="' + champion.imagen + '" alt="">'+
                    '<div"><b>Modelo: </b>' + champion.modelo + '<br>' +
                    '<b>Talle: </b>' + champion.talle + '<br>' +
                    '<b>Precio: </b>' + champion.precio + '<br>' +
                    '<b>Stock: </b>' + champion.unidadesTotales + ' Unidades<br>',
              })
        };
    });
}

verDetalles(arrayChampiones)

function productoCarrito(arrayChampiones){
    arrayChampiones.forEach(champion => {

        let agregarProd = document.getElementById(champion.id)
        agregarProd.onclick = () => {
            cargaCarrito(Champion)
            // Utilizamos la libreria Toastify para indicarle al usuario que agrego algo al carrito
            Toastify({
                text: "Agregado al Carrito",
                duration: 1500,
                style: {
                    background: "linear-gradient(to right, #D19C97, #8a237e)",
                  }
            }).showToast();
        };
    });
}


function productoCarrito(arrayChampiones){
    arrayChampiones.forEach(champion => {

        let agregarChamp = document.getElementById(champion.id)
        agregarChamp.onclick = () => {
            cargaCarrito(champion)
            // Utilizamos la libreria Toastify para indicarle al usuario que agrego algo al carrito
            Toastify({
                text: "Agregado al Carrito",
                duration: 1500,
                style: {
                    background: "linear-gradient(to right, #D19C97, #8a237e)",
                  }
            }).showToast();
        };
    });
}

productoCarrito(arrayChampiones)

function refrescarCarrito(){
    let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
        mostrarCantidadProductosCarrito.innerHTML = `${carrito.length}`;
}

// Vaciamos el carrito

function vaciarElCarrito(){
    sessionStorage.removeItem('carrito');
}

let vaciarCarrito = document.getElementById("vaciarCarrito")
    vaciarCarrito.addEventListener('click', () => {

        let carrito = sessionStorage.getItem('carrito');

        if(carrito == null) {
            // Usamos Toastify para señalarle al usuario que el carrito esta vacio
            Toastify({
                text: "Carrito Vacio",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #D19C97, #8a237e)",
                  }
            }).showToast();
        } else {
            /// Usamos Sweet Alert para señarle al usuario las opciones de borrado
            Swal.fire({
                title: 'Por favor confirmar borrado del Carrito',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
        
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Borrado!',
                        icon: 'success',
                        text: 'Se eliminaron los elementos del carrito'
                    })

                    
                    vaciarElCarrito()
                    refrescarCarrito()
                    
                }
            })
        }
    });
    
// Creamos funcion para ver que tiene el carrito

function consultarCarrito (){

        let carrito = sessionStorage.getItem('carrito');
        if(carrito == null) {
            openNav();
            // Utilizamos Librearia Toastify para señalarle al usuario que el carro esta vacio
            Toastify({
                text: "Carrito Vacio",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #D19C97, #8a237e)",
                  }
            }).showToast();
        } else {

            carrito = JSON.parse(carrito)

            let lista = []
            let calcularTotalStr = []
            
            for ( let championes of carrito){
                lista.push(championes.modelo + " - Precio Unitario: " + championes.precio);
                calcularTotalStr.push(championes.precio)
            }
            
            const calcularTotal = calcularTotalStr.map(str => {
                return Number(str);
            })

            const totalPagar = calcularTotal.reduce((acumulador, elemento) => acumulador + elemento, 0)
            
            let pruebaTotal = document.getElementById("montoTotal")
            pruebaTotal.innerHTML = totalPagar*0.95;

            openNav();
            
    }
        
}

/// Elementos para consultar carrito desde el Icono

let verCarritoIcono = document.getElementById("botonCarrito")
verCarritoIcono.addEventListener('click', () => {
    consultarCarrito(verCarritoIcono)
    }
)

/// Elementos para consultar carrito desde el numero de elementos

let verCarrito = document.getElementById("carritoTotal")
verCarrito.addEventListener('click', () => {
    consultarCarrito(verCarrito)
    }
)

/// Filtrado Lateral

function filtroLateral (checkboxElem,productoFiltrar) {

    if (checkboxElem.checked) {
        // eliminamos los elementos actuales
        const elements = document.getElementsByClassName("productoListado");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        // filtramos dependiendo del input del usuario y llamamos a la funcion muestra con estos nuevos valores
        muestraProductos(productoFiltrar)
        productoCarrito(productoFiltrar)

      } else {
        // eliminamos los elementos actuales
        const elements = document.getElementsByClassName("productoListado");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        // filtramos dependiendo del input del usuario y llamamos a la funcion muestra con estos nuevos valores
        muestraProductos(arrayChampiones)
        productoCarrito(arrayChampiones)

      }

}

// Creamos funcion para abrir un slide a mano izquierda

function actualizaCarritoLateral () {

    const elementosCarrito = document.getElementsByClassName("productoEnCarrito");
        while(elementosCarrito.length > 0){
            elementosCarrito[0].parentNode.removeChild(elementosCarrito[0]);
        }

    if(sessionStorage.getItem("carrito")){
        let carrito = JSON.parse(sessionStorage.getItem("carrito"))
        carrito.forEach(productoEnCarrito => {

            const { id, imagen, marca, modelo, precio } = productoEnCarrito

            divCarritoDeCompras = document.getElementById("mySidebar")
            divCarritoDeCompras.innerHTML += `
            <div class="productoEnCarrito" style="padding: 10px;" >
            <div id="${id}" style="border-top-width: 1px; border-top-style: solid; border-top-color: black; display: flex;">
                <div>
                    <img style="width:70px; padding: 5px" src="${imagen}">
                </div>

                <div style="padding-top: 5px;">
                    <div>
                        <h6>${marca} ${modelo}</h6>
                    </div>
                    <div style="display: flex;">
                        <h6>$ ${precio}</h6>
                    </div>
                </div>
                
            </div>
            </div>
            `
            document.body.append(divCarritoDeCompras);
        })
    }else{
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }

}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    actualizaCarritoLateral()
  }
  
// Creamos Funcion para cerrar el slide

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }