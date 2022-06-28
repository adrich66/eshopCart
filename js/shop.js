// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
//Done it, creando un archivo js con los products y llamandoles antes de shop.js en los html

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      cartList.push(products[i]);
    }
  }
  console.log(cartList);
}

// Exercise 2
function cleanCart() {
  cartList = [];
  cart = [];
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }

  return total;

}

// Exercise 4
function generateCart() {
  /* Using the "cartlist" array that contains all the items in the shopping cart, 
    generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    button refresh was created in cart in modal fade */
  cart = [];
  // Para cada objeto del array cartList lo recorro con for
  for (let i = 0; i < cartList.length; i++) {
    // Primer caso excepcionalmente para llenar el array cart
    if(cart.length === 0){
      cart.push(cartList[i]);
      cart[i].quantity = 1;
      cart[i].subtotal = cart[i].price*cart[i].quantity;
      cart[i].subtotalWithDiscount = cart[i].subtotal;
    //después de llenar con uno siempre pasará al siguiente else
    }else{
      let j = 0
      let condition = false;
      // Lo busco en el array con while dandole dos condiciones no como for
      while (j < cart.length && condition === false){
        // si lo encuentro!! -> actualizo valores y le doy condition true para el siguiente paso
        if(cart[j].id === cartList[i].id){
          cart[j].quantity++;
          cart[j].subtotal = cart[j].price*cart[j].quantity;
          cart[j].subtotalWithDiscount = cart[j].subtotal;
          condition = true;
        }
        j++;
      }
      //si no lo encuentro!! -> lo creo duplicandolo del cartList y añadiendo quantity
      if (!condition){
        cart.push({...cartList[i]});
        cart[cart.length -1].quantity = 1;
        cart[cart.length -1].subtotal = cart[cart.length-1].price;
        cart[cart.length -1].subtotalWithDiscount = cart[cart.length-1].subtotal;
      }

    }
  }
  applyPromotionsCart();
  printCart(); 
  document.getElementById('count_product').innerHTML = cart.length;
  console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"

  for (let i = 0; i < cart.length; i++) {
      
    //Buscamos los productos en un bucle for con el id de los que tengan descuento por superar el mínimo de productos
    if((cart[i].id === 1) 
      && (cart[i].quantity >= 3)) {
        //Al subtotalWithDiscount le damos el nuevo precio
        cart[i].subtotalWithDiscount = 10 * (cart[i].quantity);
      }
    //Repetimos con el segundo tipo
    if((cart[i].id === 3) 
      && (cart[i].quantity >= 10)) {
        cart[i].subtotalWithDiscount = (((cart[i].subtotal) / 3 )* 2);
      }
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  //Creamos una lista para inyectar los diferentes campos que compondrán la tabla del carrito
  let list = document.getElementById("cart_list");
  //Inyectamos un string vacío en la list nueva en HTML
  list.innerHTML = "";

  total = 0; 

  //Bucle for para recorrer todo el carrito e inyectar cada producto y sus caract.
  for(let i = 0; i < cart.length; i++){
    
    //Creamos la base en la cúal crearemos e imprimimos los elementos
    let tr = document.createElement('tr');
    //Hacemos lo mismo para los elementos de cada objeto del array i lo inyectamos
    let th = document.createElement('th');
    th.innerHTML = cart[i].name;
    let td1 = document.createElement('td');
    td1.innerHTML = '$' + cart[i].price;
    let td2 = document.createElement('td');
    td2.innerHTML = cart[i].quantity;
    let td3 = document.createElement('td');
    td3.innerHTML = '$' + ((cart[i].subtotalWithDiscount).toFixed(2));


    //Encadenamos para devolver hijos
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    //Igual para la lista entera
    list.appendChild(tr);

    //Declaramos el total y lo vamos sumando 
    total += cart[i].subtotalWithDiscount;
  }

  //Al total ahora de la tabla del carrito le asignamos el nuevo valor 
  document.getElementById('total_price').innerHTML = total.toFixed(2);

}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array 
}
// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
}
