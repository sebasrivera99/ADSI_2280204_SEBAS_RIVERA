"use stric"

let cantidadGlobal = document.getElementById("cantidad").innerHTML;


function resta() {
    cantidadGlobal = Number(cantidadGlobal) - 1;
    document.getElementById("cantidad").innerHTML = cantidadGlobal;
    modificadorTotal();
}
function suma() {
   cantidadGlobal = Number(cantidadGlobal) + 1;
   document.getElementById("cantidad").innerHTML = cantidadGlobal;
   

   modificadorTotal();
}

function modificadorTotal() {
    let cantidad = document.getElementById("cantidad").innerHTML;
    if(cantidad == "1") {
        document.getElementById("cantidadSingularPlurar").innerHTML = cantidad + " Producto";
    }
    else {
        document.getElementById("cantidadSingularPlurar").innerHTML = cantidad + " Productos";
    }
    mostrarTotal();
}
function mostrarTotal() {
    let costoUnitario = document.getElementById("costoUnitario").innerHTML
    let costoTotal = Number(costoUnitario) * Number(cantidadGlobal);
    document.getElementById("costoTotal").innerHTML = costoTotal;
}