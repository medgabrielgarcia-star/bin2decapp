const form = document.querySelector(".app-form");
const numBin = document.querySelector("#binarie-entry");
const calcbtn = document.querySelector("#calc-btn");
const resetbtn = document.querySelector("#reset-btn");
const resultado = document.querySelector(".output-text");;

form.addEventListener("submit", function(event){
  event.preventDefault();
  const binario = numBin.value;
  let binNumero = changeBin(binario);
  resultado.textContent = binNumero;
});

resetbtn.addEventListener("click", limpiarResultado)

function limpiarResultado(){
  resultado.textContent = "";
  numBin.value = "";
}


/*function changeBin(string){
  let str = string.split("");
  let reverse = str.reverse();
  let bina = reverse.join("");
  let result = 0; 
  for(let i = 0; i < bina.length; i++){
    let bit = parseInt(bina[i]);
    let exponent = i * 1;
    let calculo = bit * ( 2 ** exponent);
    result += calculo;
  }
  return result
}*/


function changeBin(string){
let result = 0;
for(let i = string.length - 1; i >= 0; i--){
let bit = parseInt(string[i]);
let exponent = (string.length -1) - i;
let calculo = bit * (2**exponent);
result += calculo;
}
return result;
}