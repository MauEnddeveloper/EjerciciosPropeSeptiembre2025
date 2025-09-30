function concatenarCadena(){
    //el nombre de la funcion inicia con un verbo
    nombreCliente=document.getElementById("cajaNombre").value;
    apaCliente=document.getElementById("cajaApellidoPaterno").value;
    amaCliente=document.getElementById("cajaApellidoMaterno").value;
    nombreCompleto=nombreCliente+" "+apaCliente+" "+amaCliente;
    document.getElementById("cajaNombreCompleto").value=nombreCompleto;
    //el metodo charAt trae la posicion especificada
    document.getElementById("cajaPosicion3").value=nombreCompleto.charAt(7);
    //length trae la longitud total de una cadena
    document.getElementById("longitudCadena").value=nombreCompleto.length;
    //toUpperCase para mayúsculas y toLowerCase para minúsculas 
    document.getElementById("Mayusculas").value=nombreCompleto.toUpperCase();
    document.getElementById("Minusculas").value=nombreCompleto.toLowerCase();
    
    }