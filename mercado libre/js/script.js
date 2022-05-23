"use strict"

class Automovil {
    constructor(marca,modelo,anyo) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Anyo =anyo;
    }
}

let auto =new Automovil("Mazda","3 prime",2022);


let buscarAutos = document.getElementById("buscarAutos");

buscarAutos.addEventListener("click", function() {
    let infoAutomovil = auto.Marca  + " " + auto.Modelo + " Modelo " + auto.Anyo;
    document.getElementById("infoAuto").innerHTML = infoAutomovil;
});
function maquetacion() {
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label");
    let textoMarca = document.createTextNode("HOLA SOY SEBAS");
    marca.appendChild(textoMarca);
    mainContent.appendChild(marca);
}

