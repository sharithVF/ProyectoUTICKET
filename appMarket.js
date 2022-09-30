import { obtenerProductos } from './firebase.js';

const products = []
console.log(products);     
   

obtenerProductos ( querySnapshot => {
  querySnapshot.forEach(doc =>{
     const dataRequest = doc.data()  
     products.push(dataRequest)
  })
})


const containerCards = document.getElementById('main-market');
const modal = document.querySelector('.modal');
const modalc = document.querySelector('.modal-container');
const close = document.querySelector(".close")
const filterPrice = document.getElementById('filterPrice');
const filterCat = document.getElementById('filterCategories');

const boletasDisponibles = document.querySelector('.boletasDisponibles');
const cantidadBoletas = document.querySelector('.cantidadBoletas');
const btnComprar = document.querySelector('.btnComprar');

filterPrice.addEventListener('change', filterPrecios);
filterCat.addEventListener('change', filterCategories);
cantidadBoletas.addEventListener('keyup', contadorBoletas);
btnComprar.addEventListener('click', comprarBoletas);


window.addEventListener('DOMContentLoaded', async () => {

  obtenerProductos ( querySnapshot => {
    querySnapshot.forEach(doc =>{      
      createCards(doc.data());
    })
  })
})


boletasDisponibles.textContent = 120;
let boletas = 120;
function contadorBoletas() {
  let cantidad = cantidadBoletas.value

  let boletasTotales = boletas - cantidad;
  boletasDisponibles.textContent = boletasTotales
  
}

function filterPrecios(event) {
  const responseFilter = event.target.value === "40.000 a 200.000"
  ? products.filter ( product => product.price >= 40000 && product.price < 200000)

  : event.target.value === "200.000 a 450.000"
  ? products.filter ( product => product.price >= 200000 && product.price < 450000)

  : event.target.value === "450.000 a 600.000"
  ? products.filter ( product => product.price >= 450000 && product.price < 600000)

  : event.target.value === "Mayor a 1'000.000"
  ? products.filter ( product => product.price > 1000000)
  : null;


  containerCards.innerHTML = '';
  responseFilter.map(product => createCards(product));
}

function filterCategories(event) {
  const responseFilter = event.target.value === "Bogotá"
  ? products.filter ( product => product.ciudad === "Bogotá")

  : event.target.value === "Medellín"
  ? products.filter ( product => product.ciudad === "Medellín")

  : event.target.value === "Cali"
  ? products.filter ( product => product.ciudad === "Cali")

  : event.target.value === "Cajicá"
  ? products.filter ( product => product.ciudad === "Cajicá")

  : event.target.value === "Bucaramanga"
  ? products.filter ( product => product.ciudad === "Bucaramanga")
  : null;


  containerCards.innerHTML = '';
  responseFilter.map(product => createCards(product));
}

function createCards(product) {
  const { nombreConcierto, img, sku, price, artista, lugar, ciudad, fechaHora} = product;

    const card = document.createElement('div');
    card.classList.add('cardPrueba');

    const divCard = document.createElement('div');
    divCard.classList.add('divCard');

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', img);
    imgCard.setAttribute('alt', img);
    `<img src=${product.img} alt="">`
    imgCard.classList.add('img-card');

    const nameCard = document.createElement('p');
    nameCard.textContent = nombreConcierto;
    nameCard.classList.add('title-card');

    const artist = document.createElement('p');
    artist.classList.add('artist');
    artist.textContent = artista;

    const city = document.createElement('p');
    city.classList.add('city');
    city.textContent = ciudad;

    const place = document.createElement('p');
    place.classList.add('place');
    place.textContent = lugar;

    const date = document.createElement('p');
    date.classList.add('fechaHora');
    date.textContent = fechaHora;

    const priceCard = document.createElement('p');
    priceCard.classList.add('p-price');
    priceCard.textContent = "$" + price;

    const contadorP = document.createElement('p');
    contadorP.classList.add('contadorP');


    const btnAdd = document.createElement('button');
    btnAdd.setAttribute('id', sku);
    btnAdd.classList.add('buttonAdd');
    btnAdd.textContent = "Comprar Ahora";

    card.appendChild(imgCard);
    card.appendChild(divCard);
    divCard.appendChild(nameCard);
    divCard.appendChild(artist);
    divCard.appendChild(priceCard);
    divCard.appendChild(date);
    divCard.appendChild(place);
    divCard.appendChild(city);
    divCard.appendChild(contadorP);
    divCard.appendChild(btnAdd);

    containerCards.appendChild(card);

    // tituloConcierto.textContent = nombreConcierto;
  
  const compras = [];
  // console.log(compras);
  
  const agregar = () =>{
    compras.push(id)
  }


  btnAdd.addEventListener("click", fAbrir)
}

function comprarBoletas(params) {
  modal.classList.toggle('modal-close');
  setTimeout(function(){
      modalc.style.opacity ="0"
      modalc.style.visibility ="hidden"
  },400)

  swal('Compra Exitosa','Revisa tu correo para obtener las boletas','success')
}

close.addEventListener("click", fCerrar)

function fCerrar() {
  modal.classList.toggle('modal-close');
  setTimeout(function(){
      modalc.style.opacity ="0"
      modalc.style.visibility ="hidden"
  },400)
}

function fAbrir(e) {
  e.preventDefault();
  modalc.style.opacity ="1"
  modalc.style.visibility ="visible"
  modal.classList.toggle ("modal-close");
}




