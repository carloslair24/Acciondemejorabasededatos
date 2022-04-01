function limpiar(){
  document.getElementById("cantidad").value="";
  document.formulario.resultado.value ="";
}

function calcular (){
  var tipo = document.getElementById("opciones").value;
  var cantidad = document.getElementById("cantidad").value;
  var resultado;
  
  if( (cantidad - 0) != cantidad && (''+cantidad).replace(/^\s+|\s+$/g, "").length > 0)
    {
      alert("Ingrese numeros");
      return false;
    }
  else
    {
      if(tipo === "dol_bs")
        {
        resultado = cantidad * 19.50;
        }
      else if (tipo === "dol_eu")
        {
        resultado = cantidad * 26;
        }
      return document.formulario.resultado.value = resultado;
    }
}