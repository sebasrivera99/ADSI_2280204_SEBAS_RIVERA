"use strict"

console.log("primer ejercicio");

var caracter = "la vida te da muchas sorpresas y siempre es importante estar al cambio";
console.log("el numero de caracteres es:" + caracter.length);

/*si(el numero de caracteres es menor que 50){
    imprimir el texto
}
pero si(el numero de caracteres es mayor de 50){
    imprimir un mensaje que exedio numero de caracteres
}
si no se cumple nincuna condicion{
    imprimir mensaje de eror
}*/
if (caracter.length < 50){
    console.log(caracter)
}
else if (caracter.length > 50){
    console.log("exedio numero de caracteres")
}
else {console.log("error")}

console.log("segundo ejercicio");

var nombres = ["luis","carlos","victor","jesusu","sebastian"];

var busqueda = "luis";

if (nombres.includes(busqueda)){
    console.log("busqueda asertada el nombre " + busqueda + " fue encontrado.")
}
else { console.log("no hubo exitos en la busqueda")}

console.log("tercer ejercicio");

var aprendices = [ "","juan","pedro","lucas","satiago","omar"];

for (var i = 0; i < aprendices.length;i++){
    console.log(i + " " + aprendices[i])
}