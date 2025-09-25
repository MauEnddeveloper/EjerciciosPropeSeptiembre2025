function IndiceMasaCorporal(){
    peso=parseFloat(document.getElementById("cajaPeso").value);
    altura=parseFloat(document.getElementById("cajaAltura").value);
    IMC=peso/(altura*altura);
    document.getElementById("cajaResultadoIMC").value=IMC;
}