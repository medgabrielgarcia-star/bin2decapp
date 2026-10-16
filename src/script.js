const form = document.querySelector(".app-form")
const numBin = document.querySelector("#binarie-entry")
const calcbtn = document.querySelector(".app-btn");
const resultado = document.querySelector(".app-output");

form.addEventListener("click", function(event)){
  const binario = numBin.value;
  let resultado = changeBin(binario);
  resultado.innerHTML = `Tu resultado es: ${resultado}`
}

function changeBin(string){
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
}