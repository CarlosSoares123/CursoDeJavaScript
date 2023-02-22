
function ProximoDaFila(array, elemento){
  array.push(elemento);//Agrega um novo elemento
  return array.shift(elemento);//remove o ultimo elemento
}

var MeuArray = [1, 2, 3, 4, 5]
console.log("Antes: " + JSON.stringify(MeuArray))
console.log(ProximoDaFila(MeuArray, 6))
console.log("Depois: " + JSON.stringify(MeuArray))