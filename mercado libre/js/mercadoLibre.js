
class automovil{
    constructor(marca,modelo,version,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1= new automovil("Chevrolet","zl1","camaro","2021","335000000","38","Bogota","img/carro-camaro.jpg");
let car2= new automovil("Ford","Mustang","GT350","2020","400000000","115","Cali","img/carro-ford.jpeg");
let car3= new automovil("Nissan","300 ZX ","S111","1990","120000000","1245","Medellin","img/nissan.jpg");
let car4= new automovil("Nissan","sentra","B18","2018","200000000","2567","Medellin","img/nissan2.png");
function mostrar(car){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contimg= document.createElement("div");
     contenedorPrincipal.appendChild(contimg);
     contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contimg.appendChild(img);

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contimg.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contimg.appendChild(descripcion);

    let yearcar=document.createElement("label");
        let textyear=document.createTextNode('Año ' + car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contimg.appendChild(yearcar);

    let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+" kilometros");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");
    contimg.appendChild(kilometrajecar);

    let city=document.createElement("label");
    let textcity=document.createTextNode('Ciudad '+ car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contimg.appendChild(city);

}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="chevrolet"){
            mostrar(car1);           
        }
        else if(Busq=="ford"){
            mostrar(car2);
        }
        
        else if(Busq=="nissan"){
            mostrar(car3);
            mostrar(car4);
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}