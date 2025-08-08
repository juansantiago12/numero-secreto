let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 4;

function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

function verificarIntento() {
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

   if (numeroUsuario === numeroSecreto) {
      asignarTextoElemento(
         'p',
         `¡Correcto! Has adivinado el número secreto en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}!`
      );
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (numeroUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'El número secreto es menor. Inténtalo de nuevo.');
      } else {
         asignarTextoElemento('p', 'El número secreto es mayor. Inténtalo de nuevo.');
      }
      intentos++;
      limpiarCaja();
   }
   return;
}

function limpiarCaja() {
   document.getElementById('valorUsuario').value = '';
   return;
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', 'Se han agotado todos los números posibles.');
      //return null; // No se puede generar más números
   } else {
      if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
      } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }
}

function condicionesIniciales() {
   asignarTextoElemento('h1', 'Juego del número secreto');
   asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   return;
}

function reiniciarJuego() {
   limpiarCaja();
   condicionesIniciales();
   document.getElementById('reiniciar').setAttribute('disabled', 'true');
   return;
}

condicionesIniciales();
