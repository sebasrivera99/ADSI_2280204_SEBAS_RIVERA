"use strict"

/* generar un consecutivo de 1 al 20 */

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

for (i =1; i <= 20; i++) {
    console.log("aprendiz N. " + i);
}




/* forma 1 */
var aprendiz1 = new Array();
aprendiz1[0] = 1;
aprendiz1[1] = "Sebastian";
aprendiz1[2] = "Rivera";
aprendiz1[3] = 22;
aprendiz1[4] = "B/los pinos";
aprendiz1[5] = 163;

/* forma 2 */

var aprendiz2 = new Array(2,"luisa","Ramirez", 19, "b.simon",157);

/* forma 3 */

var aprendiz3 = [3,"stiven","becerra",19, "b.pinos",166];

/* mostrar nombre completo */

console.log("nombre completo del aprendiz No 2:" + aprendiz2[1] +" "+ aprendiz2[2]);

/* añadiendo elemeto al array */

aprendiz3[6] = "3214567564"

/* contando Elementos */

var cantidadElementos = aprendiz1.length;
console.log("aprendiz 1 tiene " +cantidadElementos + " elementos");

/* contando caracteres */

var cantidadCaracteres = aprendiz2[1].length;
console.log("cantidad caracteres: " + cantidadCaracteres);

for(var i = 0; i <= aprendiz1.length -1; i++) {
    console.log(aprendiz1[i]);
}