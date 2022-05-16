function guardarInfo() {
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    if (numeroDocumento == "") {
        alert("Ingresa el numero de documento");
        return false;
    }
    if (document.getElementById("nombreUsuario").value == "") {
        alert("Ingrese el nombre del usuario");
        return false;
    }
    if (document.getElementById("edad").value == "") {
        alert("Ingrese su edad");
        return false;
    }
    if (document.getElementById("direccion").value == "") {
        alert("Ingrese su direccion");
        return false;
    }
    alert("Informacion guardada con exito");
    limpiarformulario();
    return true;
}
function limpiarformulario() {
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("nombreUsuario").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("direccion").value = "";
}