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

function mostrarTabla() {
      // Obtener el número del input
      let numero = parseInt(document.getElementById("cajaNumero").value, 10);

      let texto = "";

      // Validar que se haya escrito un número
      if (isNaN(numero)) {
        texto = "Por favor escribe un número válido.";
      } else {
        // Generar la tabla del número elegido
        for (let i = 1; i <= 10; i++) {
          texto += numero + " x " + i + " = " + (numero * i) + "\n";
        }
      }

      // Mostrar en el textarea
      document.getElementById("cajaResultado").value = texto;
    }

    // Relacionar el botón con el evento
    document.getElementById("btnMostrar").addEventListener("click", mostrarTabla);