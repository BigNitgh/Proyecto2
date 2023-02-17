const campo = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const comprar = document.getElementById("comprar");

let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert("Producto agregado al carrito");
}
comprar.addEventListener("click",addToCart)

function updateCart() {
  let cartList = document.getElementById("cart-list");
  let totalPrice = 0;}



function generarNumeroAleatorio() {
    var numero = Math.floor(Math.random() * 50) + 1;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "El número aleatorio es: " + numero;
  }

campo.addEventListener("input", function(){
    const longitud = campo.value.length;
    const restantes = 50 - longitud;
    contador.textContent = restantes;
    
    if (restantes <= 0) {
        campo.setAttribute("maxlength", longitud);
        contador.innerHTML = "Se acabo"
        campo.classList.add("red")
      }
})  

const numeros = [1, 7, 3, 8, 2, 9, 4, 6, 5];
const numerosMayoresQue5 = numeros.filter(num => num > 5);
console.log(numerosMayoresQue5)

const list = document.getElementById('myList');

// metodos de busqueda 

// indexOf
let m = [1, 2, 3, 4, 5];
let indice = m.indexOf(3);
console.log(indice)


// Reduce

let l = [ 16 , 31 , 48 , 33 , 72];
let tol = l.reduce((acum, item) => acum + item, 0);
console.log(tol)
