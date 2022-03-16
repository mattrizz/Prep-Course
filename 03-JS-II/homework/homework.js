// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  }
  if (y > x) {
    return y;
  }
  return x;
}


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed" 
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {
    return "Allowed";
  }
  else return "Not allowed";
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status == 1) {
    return "Online";
  }
  if (status == 2){
    return "Away";
  }
  return "Offline";
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma == 'aleman') return "Guten Tag!";
  if (idioma == 'mandarin') return "Ni Hao!";
  if (idioma == 'ingles') return "Hello!";
  return "Hola!"
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case 'blue': 
      return "This is blue";
      break;
    case 'red' : 
      return "This is red";
      break;
    case 'green':
      return "This is green";
      break;
    case 'orange':
      return "This is orange";
      break;
    default: 
      return "Color not found";
      break;
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) return true;
  else return false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) return true;
  else return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var testInt = Math.floor(numero);
  if (numero === testInt) return true;
  else return false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  if (numero <= 0) {
  //  console.log ("Error el valor ingresado es " + num + ". El programa será abortado");
  //  return console.log ("Fin. Valor numero: " + num);
  return numero;
  }

  else {
    // console.log ("Asigno valor a variables numa numb bool3 y bool5");
    var numa = numero;
    var numb = numero;
    var bool3 = false;
    var bool5 = false;

    // console.log ("Comienza el prime bucle while");
    while (numa >= 0){
        if (numa == 0) {
            bool3 = true;
       //     console.log ("Se asigna true a bool3");
        }
        numa = numa - 3;
        // console.log ( "El valor de numa "+ numa +" se divide, comienza nuevo bucle");

    }
    // console.log ("Comienza el segundo bucle while")
    while (numb >= 0){
        if (numb == 0){
            bool5 = true;
           // console.log ("Se asigna true a bool5");
        }
        numb = numb - 5;
        // console.log ("El valor de numb " +numb+ " se divide, comienza nuevo loop");
    }

    if (bool3 == true && bool5 == true) return "fizzbuzz";
    // if (bool3 == true) console.log ("El numero es divisible por 3");
    if (bool3 == true ) return "fizz";
    // if (bool5 == true) console.log ("El numero es divisible por 5");
    if (bool5 == true) return "buzz";
    // if (bool3 == false && bool5 == false) console.log ("El numero no es divisible por 3 o 5");

    // return console.log ("Fin. Valor numero: " + num);
  }
return numero;
}



function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

    if (num1 == 0 || num2 == 0 || num3 == 0) return "Error";
    if (num1 < 0 || num2 < 0 || num3 <0) return "Hay negativos";
    if (num1 > num2 && num1 > num3 && num1 > 0) return "Número 1 es mayor y positivo";
    if (num3 > num1 && num3 > num2) { 
      num3++; 
      return num3;
    }
    
  return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  if (numero == 0 || numero == 1) {
      // console.log("Valor 0 y 1 NO SON CONSIDERADOS NUMEROS PRIMOS");
      return false;
  }
  var divInt = 0;

  for (i = 2; i <  numero; i++){
     divInt = numero / i;
     if (divInt - Math.trunc(divInt) == 0){
      // console.log("El numero "+ numero + " es divisible por " + i + " . Por lo tanto NO ES PRIMO");
      return false;
     }  
  }
  // console.log(" El numero "+ numero + " SI ES PRIMO.");
  return true;
  
} 

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

if (valor == true) return "Soy verdadero";
if (valor == false) return "Soy falso"

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  var tabla6 = [];
  
  for (i = 0; i <= 10; i++){
    tabla6.push(6 * i);
    // console.log ("agregando " "i" " al Array");
  }
  return tabla6;  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var nrostr = numero.toString();
  if (nrostr.length == 3) return true;
  return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  
  var contador = 0;
  
  do {
    numero = numero + 5;
    contador++; 
  } while (!(contador == 8));

  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
