var contar = 0

function contarCarta(carta) {
  var decicao
  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      contar++
      break
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      contar--
      break
  }
  
  if (contar > 0) {
    decicao = 'Apostar'
  } else {
    decicao = 'Esperar'
  }

  return contar + " " + decicao;
}


console.log(contarCarta(2))
console.log(contarCarta(3))
console.log(contarCarta(7))
console.log(contarCarta("K"))
console.log(contarCarta("A"))
