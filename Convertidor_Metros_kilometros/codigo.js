function convertidorMetrosKilometros(){
    //Una varible es: un espacio en memoria que sirve para almacenar un valor
    //Asigna el valor de la "cajaMetros" de la pagina a la variable metros
    metros=parseInt(document.getElementById("cajaMetros").value);
    //Operacion
    kilometros=metros/1000;
    //Asigna el valor de la variable kilometros en la "cajaKilometros" de la pagina 
    document.getElementById("cajaKilometros").value=kilometros;
}
