const pizza = [
  {
    id: 1,
    nombre: "Muzarella",
    ingredientes: ["Masa", "Queso", "Salsa"],
    precio: 400,
    img: "./assets/pizzas/muzarrela.png",
  },
  {
    id: 2,
    nombre: "Doble Muzarella",
    ingredientes: ["Masa", "DobleQueso", "Salsa"],
    precio: 550,
    img: "./assets/pizzas/DobleMuzarella.png",
  },
  {
    id: 3,
    nombre: "margarina",
    ingredientes: ["Albahaca", "Queso", "Salsa"],
    precio: 500,
    img: "./assets/pizzas/margarina.png",
  },
  {
    id: 4,
    nombre: "peperoni",
    ingredientes: ["Peperoni", "Queso", "Salsa"],
    precio: 700,
    img: "./assets/pizzas/peperoni.png",
  },
  {
    id: 5,
    nombre: "jamon",
    ingredientes: ["Jamon", "Queso", "Salsa"],
    precio: 800,
    img: "./assets/pizzas/jamon.png",
  },
  {
    id: 6,
    nombre: "Piña",
    ingredientes: ["Píña", "Queso", "Salsa"],
    precio: 850,
    img: "./assets/pizzas/piña.png",
  },
];

const pedirPizza = document.getElementById("button"); // button
const imprimirNombreDePizza = document.getElementById("name"); // h2
const imprimirPrecioDePizza = document.getElementById("price"); // h4
const imprimirImgDePizza = document.querySelector(".pizzaimg"); // img
const imprimirIngredientes = document.getElementById("ingredientes"); // h5
const err0r = document.getElementById("error"); // span

const imprimirPizza = (e) => {
  e.preventDefault();
  const numeroPizza = document.getElementById("input").value; // input

  if (numeroPizza > pizza.length || numeroPizza < 1) {
    err0r.innerHTML = `"La Pizza seleccionada no esta en el catalogo"`;
  } else {
    let pizzaSeleccionada = pizza.find((nombre) => nombre.id == numeroPizza);

    imprimirNombreDePizza.innerHTML = pizzaSeleccionada.nombre + "🍕  ";
    imprimirPrecioDePizza.innerHTML = pizzaSeleccionada.precio + "💲 ";
    imprimirIngredientes.innerHTML = pizzaSeleccionada.ingredientes;

    imprimirImgDePizza.innerHTML = `<img src=${pizzaSeleccionada.img} id="img-pizza" class="card-img-top text-center" alt="..." />`;
    err0r.innerHTML = "";
  }
};
function obtener_localstorage() {
  let arrayDePizzas = JSON.parse(localStorage.getItem("arrayPizzas"));
  console.log(arrayDePizzas);
}
localStorage.setItem("arrayPizzas", JSON.stringify(pizza));

const init = () => {
  pedirPizza.addEventListener("click", imprimirPizza);
  obtener_localstorage();
};
init();
