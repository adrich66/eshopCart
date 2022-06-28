// Exercise 7

//Creamos la variable formulario del html form
const form = document.getElementById("form");

//addEventListener (esuchar) para cuando se clique submit 
//que haga el event y preventDefault para validate
form.addEventListener("submit", (event) => {
  event.preventDefault(validate);
});

//Aquí la función para validar
function validate() {

  let error = 0;

  //Obtenemos en constantes los elementos de cada campo
  const fName = document.getElementById("fName");
  const fLastN = document.getElementById("fLastN");
  const fEmail = document.getElementById("fEmail");
  const fPassword = document.getElementById("fPassword");
  const fAddress = document.getElementById("fAddress");
  const fPhone = document.getElementById("fPhone");

  //Declaramos ahora los parámetros que tienen que tener cada campo
  const patternName = /^[A-Za-z]{3,}$/;
  const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const patternPassword = /^(?=.*[A-Za-z])(?=.*[0-9]).{3,}$/;
  const patternAddress = /^[A-Za-z0-9\s]{3,}$/;
  const patternPhone = /^[0-9]{9}$/;
  //Email y Password han sido copiadas de una búsqueda en internet de como pedir esos parámetros

  //Empezamos las condicioes para determinna si son validos los
  //parámetros con la función test, y add y emove a través de classList
  if (patternName.test(fName.value)) {
    fName.classList.remove("is-invalid");
    fName.classList.add("is-valid");
  } else {
    error++;
    fName.classList.remove("is-valid");
    fName.classList.add("is-invalid");
  }

  if (patternName.test(fLastN.value)) {
    fLastN.classList.remove("is-invalid");
    fLastN.classList.add("is-valid");
  } else {
    error++;
    fLastN.classList.remove("is-valid");
    fLastN.classList.add("is-invalid");
  }

  if (patternEmail.test(fEmail.value)) {
    fEmail.classList.remove("is-invalid");
    fEmail.classList.add("is-valid");
  } else {
    error++;
    fEmail.classList.remove("is-valid");
    fEmail.classList.add("is-invalid");
  }

  if (patternPassword.test(fPassword.value)) {
    fPassword.classList.remove("is-invalid");
    fPassword.classList.add("is-valid");
  } else {
    error++;
    fPassword.classList.remove("is-valid");
    fPassword.classList.add("is-invalid");
  }

  if (patternAddress.test(fAddress.value)) {
    fAddress.classList.remove("is-invalid");
    fAddress.classList.add("is-valid");
  } else {
    error++;
    fAddress.classList.remove("is-valid");
    fAddress.classList.add("is-invalid");
  }

  if (patternPhone.test(fPhone.value)) {
    fPhone.classList.remove("is-invalid");
    fPhone.classList.add("is-valid");
  } else {
    error++;
    fPhone.classList.remove("is-valid");
    fPhone.classList.add("is-invalid");
  }

  //Finalizamos condició final para chequearlo todo con alerts
  if (error > 0) {
    alert("Error: Field or fields are not ok");
  } else {
    alert("OK: All the fields are correct");
  }
}
//Repetimos la escucha a la espera de submit para volver a chequear de nuevo 
form.addEventListener("submit", (event) => {
  event.preventDefault(validate);
});
