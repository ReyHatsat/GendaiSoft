cuadroDeComerciales = document.getElementById("cuadroDeComerciales")
lineUp = document.getElementById("lineUp")
avisos = lineUp.getElementsByClassName("avisos")

var count = 0;
var limite = avisos.length -1;
var myVar=setInterval(function(){atualiza()},3000);

function atualiza() {
  if(count == limite)
    count = 0;
  lineUp.style.marginTop = 62*count*(-1)+"px"
  count++
}