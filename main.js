//(1)
let a = 5;  
let b = 10; 
let c = a + b;
console.log("El valor de a es: " + a);  
console.log("El valor de b es: " + b);  
console.log("La suma de a y b es: " + c);  


// 
let nombre = prompt("¿Cúal es tu nombre?");
console.log("Hola, " + nombre + "!");

//(2)
let d = 14;
let e = 10;
let f;
if (d > e) {
    f = d;
    console.log("El mayor de los tres números es: " + f);
} else if (e > d) {
    f = e;
    console.log("El mayor de los tres números es:" + f);
}
//
let numeroIngresado = prompt("Ingresa un número y te dire si es par o impar:");

numeroIngresado = Number(numeroIngresado);

if (numeroIngresado % 2 === 0) {
    console.log("El número " + numeroIngresado + " es par.");
} else {
    console.log("El número " + numeroIngresado + " es impar.");
}

//(3)
let g = 10;
while (g > 0) {
    console.log("" + g);
    g--; 
}
//
let numeroIngresado1;

do {
    numeroIngresado1 = prompt("Ingresa un número mayor a 100:");
    numeroIngresado1 = Number(numeroIngresado1);

} while (numeroIngresado1 <= 100 || isNaN(numeroIngresado1));

console.log("Ingresaste un número mayor a 100: " + numeroIngresado1);
//(4)
function esPar(numero) {
  return numero % 2 === 0;
}

console.log("El numero 8 es par:"+ esPar(8));  
console.log("El numero 7 es par:"+ esPar(7)); 
//

function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
let celsius = 30;
console.log(celsius + "°C son equivalentes a " + convertirCelsiusAFahrenheit(celsius) + "°F");
//(5)
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Buenos Aires",

  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
  }
};
persona.cambiarCiudad("Barcelona");

console.log("Nombre: " + persona.nombre,", Edad: " + persona.edad, ", Ciudad: " + persona.ciudad );
//
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,
  esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      return (añoActual - this.año) > 10;
  }
};
let resultado = libro.esAntiguo();
console.log('El libro "' + libro.titulo + '" es antiguo: ' + resultado);
//(6)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}
console.log("Numeros originales:" +numeros );
console.log("Numeros multiplicados por 2:" +numerosMultiplicados);
//

let pares = [];
for (let i = 2; pares.length < 10; i += 2) {
    pares.push(i); 
}
console.log("Primeros 10 numeros pares:" + pares);

//(7)
function cambiarColor() {
  document.getElementById("parrafo1").classList.toggle("blue");
  document.getElementById("parrafo2").classList.toggle("blue");
  document.getElementById("parrafo3").classList.toggle("blue");
}

// 
function mostrarAlerta(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  const texto = document.getElementById("texto").value;
  alert(texto ? `Has ingresado: ${texto}` : "No has ingresado nada");
}

//(8)
const lista = document.getElementById('lista');
const elementos = lista.getElementsByTagName('li');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {
        console.log(`Has hecho clic en: ${this.textContent}`);
    });
}

// 
const campoTexto = document.getElementById('campoTexto');
const deshabilitarBtn = document.getElementById('deshabilitarBtn');
const habilitarBtn = document.getElementById('habilitarBtn');

deshabilitarBtn.addEventListener('click', function() {
    campoTexto.disabled = true;
});

habilitarBtn.addEventListener('click', function() {
    campoTexto.disabled = false;
});

// (9)
const formularioCorreo = document.getElementById('formularioCorreo');
const correoInput = document.getElementById('correo');
const correoGuardado = document.getElementById('correoGuardado');
const eliminarCorreoBtn = document.getElementById('eliminarCorreo');

document.addEventListener('DOMContentLoaded', function() {
    const correoEnLocalStorage = localStorage.getItem('correo');
    if (correoEnLocalStorage) {
        correoGuardado.textContent = correoEnLocalStorage;
    }
});

formularioCorreo.addEventListener('submit', function(event) {
    event.preventDefault();
    const correo = correoInput.value;
    localStorage.setItem('correo', correo);
    correoGuardado.textContent = correo;
});

eliminarCorreoBtn.addEventListener('click', function() {
    localStorage.removeItem('correo');
    correoGuardado.textContent = '';
});


