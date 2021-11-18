"use strict"
var edad = 18;
if (edad >= 18) {
    console.log("bienvenido")
}
var cantidadpersonas = 30;

if (cantidadpersonas <=20) {
    console.log("por favor,utilice ambiente No 1");
}
else if (cantidadpersonas > 40 && cantidadpersonas <= 40) {
    console.log("por favor, utilizar ambiente No 2 ");
}
else if (cantidadpersonas > 40 && cantidadpersonas <=100) {
    console.log("por favor, utilice el bioaditorio");
}
else if (cantidadpersonas > 100) {
    console.log("no hay ambiente con la capacidad mencioada");
}
else {
    console.log("ha surgido un error");
}
var edadUsuario = 71;
var aerolineaUsuario = "latam";
var destinoUsuario = "san andres";
var valorTiquete = 25000;
var descuento = .10;
var valorDescuento = (valorTiquete * .10)

if (edadUsuario <= 10 || edadUsuario >= 70) {
    valorTiquete = (valorTiquete - (valorTiquete * descuento));
    if (destinoUsuario === "san andres") {
        valorTiquete = (valorTiquete - (valorTiquete *descuento));
      console.log("valor del tique: $" + valorTiquete);
      if (aerolineaUsuario === "latam") {
          valorTiquete = (valorTiquete - valorDescuento);
          console.log("valor de tiquete: $" + valorTiquete);
      }
    }
}