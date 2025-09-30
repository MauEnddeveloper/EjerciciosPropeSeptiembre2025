function mostrarPresupuesto(){
    ppto=parseInt(document.getElementById("cajaPpto").value, 10);
    noMeses=parseInt(document.getElementById("NoMeses").value, 10);

    text="";

    for(i=1; i<noMeses+1; i++){
        text=text+"Mes"+i+"Presupuesto"+ppto/noMeses+"Presupuesto Acumulado"+(ppto/noMeses)*i+"\n";
    }

    document.getElementById("area").value=text;
}

//Aqui se crea una variable que represente al boton
btnDistribuirPpto=document.getElementById("distribuir");
//Relacionar el boton con el evento
btnDistribuirPpto.addEventListener("click", mostrarPresupuesto);