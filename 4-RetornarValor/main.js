function classificarValor(valor) {
  var resposta;

  switch (valor){
    case 1:
      resposta = "Alpha"
      break;
    case 2:
      resposta = "beta"
      break;
    case 3:
      resposta = "gamma"
      break;
    case 4:
      resposta = "delta"
      break;
  }
  return resposta
}
console.log(classificarValor(1))