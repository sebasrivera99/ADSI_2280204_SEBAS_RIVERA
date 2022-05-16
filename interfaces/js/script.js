function validarInfo(numeroDocumento,nombreUsuario,edad,direccion) {
    let texto = document.getElementById(numeroDocumento);
    let usuario = document.getElementById(nombreUsuario);
    let eda = document.getElementById(edad);
    let dir = document.getElementById(direccion);
    if(texto.value === ""){
        alert("Ingrese su documento");
    }
    if (usuario.value === ""){
        alert("Ingrese su nombre");
    }
    if (eda.value === ""){
        alert("Ingrese su edad");
    }
    if (dir.value === ""){
        alert("Ingrese su direccion");
    }
  }