"use stric"

let cantidadGlobal = document.getElementById("cantidad").innerHTML = cantidad;

function pruebaSuma() {
   let cantidad =document.getElementById("cantidad").innerHTML;
   cantidad =Number(cantidad) + 1;
   document.getElementById("cantidad").innerHTML = cantidad;
   modificadorTotal();
}

function modificadorTotal() {
    let cantidad = document.getElementById("cantidad").innerHTML;
    if(cantidad == "1") {
        document.getElementById("cantidadSingularPlurar").innerHTML = cantidad + "Producto";
    }
    else {
        document.getElementById("cantidadSingularPlurar").innerHTML = cantidad + "Productos";
    }
}
function mostrarTotal() {
    let costoTotal = 5000000 * Number(cantidad);
    document.getElementById("costoTotal").innerHTML = costoTotal;
}