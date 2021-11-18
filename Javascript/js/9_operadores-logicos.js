"use strict"
 /* operadores logicos*/
/*  && ...y 
 || ...o
 != ... negacion
 xor ...onabort.o exclusivo */

 var jovenesAciionUsuario = true;
 var sisbenUsuario = true;

 if (jovenesAciionUsuario === true ^ sisbenUsuario === true) {
     console.log(!"usted puede acceder al beneficio de trasporte");
 }
 else {
     console.log("no puede accedre al subsidio de trasporte");
 }