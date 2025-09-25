function concatenarCadena(){
    //el nombre de la funcion inicia con un verbo
    nombreCliente=document.getElementById("cajaNombre").value;
    apaCliente=document.getElementById("cajaApellidoPaterno").value;
    amaCliente=document.getElementById("cajaApellidoMaterno").value;
    nombreCompleto=nombreCliente+" "+apaCliente+" "+amaCliente;
    document.getElementById("cajaNombreCompleto").value=nombreCompleto;
    //el metodo charAt trae
    document.getElementById("cajaPosicion3").value=nombreCompleto.charAt(7);   
}