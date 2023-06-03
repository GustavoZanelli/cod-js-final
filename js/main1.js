

const parrafo = document.querySelector('#total');
const parrafo1 = document.querySelector('#resultado1');
const parrafo2 = document.querySelector('#resultado2');
var cat = document.getElementById("cate").value;

document.addEventListener('click', obtenerValor) 
document.addEventListener('click', realizarCuenta)                          
// document.addEventListener('click', multiplicar)  

document.addEventListener('keydown', obtenerValor) 
document.addEventListener('keydown', realizarCuenta)
document.addEventListener('keydown', multiplicar)   


function realizarCuenta() {
  var valor = document.getElementById("cantidad").value;
  var resultado = valor * 200 ;
  // parrafo.innerHTML = "Total a pagar : $ " + resultado ;      
  return resultado
 };
 
  function obtenerValor() {
    var selectElement = document.getElementById("cate");
    var valorSeleccionado = parseFloat(selectElement.value);
   
    if ( isNaN(valorSeleccionado)) {
            valorSeleccionado = 1        
    } 
    // parrafo1.innerHTML = "Valor seleccionado = " + valorSeleccionado;  
    return valorSeleccionado

  };

  function multiplicar( ) {
  
  var total = obtenerValor() * realizarCuenta();
  parrafo.innerText = "Total a pagar : $ " + total;  
  };

  function borrar() {
    var cantidadInput = document.getElementById("cantidad");
    cantidadInput.value = "";

    var cat = document.getElementById("cate");
    cat.selectedIndex = 0;
    
    var cor = document.getElementById("correo");
    cor.value = ""

    var nominput = document.getElementById("nom");
    nominput.value = ""

    var apeinput = document.getElementById("ape");
    apeinput.value = ""

    total = 0
    parrafo.innerText = "Total a pagar : $ " + total;  

       }

  //final
