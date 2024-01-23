let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// asigno una funcion para crear y seleccionar partes especificas del codigo html desde JS
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroSecreto);
  console.log(listaNumerosSorteados);
  //ya sorteamos todos los numeros?
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
  } else {
    //si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
    }
  }
}

function verificarIntento() {
  let numeroDelUsuario = parseInt(
    document.getElementById("valorUsuario").value
  );
  if (numeroDelUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acerto
    if (numeroDelUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número es menor");
    } else {
      asignarTextoElemento("p", "El numero es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  //verifico con el triple igual que sea igual en tipo y numero
  console.log(numeroDelUsuario === numeroSecreto);
  return;
}

function limpiarCaja() {
  let valorCaja = (document.querySelector("#valorUsuario").value = "");
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Escoje un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de inicio
  //generar numero aleatorio
  //reiniciar numero de intentos
  condicionesIniciales();
  //deshabilitar boton
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
