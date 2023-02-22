function pontuaçaoDeGolf (par, golpes){
  if (golpes == 1){
    return "Hole-in-one";
  } else if (golpes <= par - 2){
    return "Eagle";
  }else if (golpes == par - 1){
    return "Birdie";
  }else if (golpes == par){
    return "Par";
  }else if (golpes == par + 1){
    return "Bogey";
  }else if (golpes == par + 2){
    return "Double Bogey";
  }else if (golpes >= par +3 ){
    return "Go Home";
  }
}

console.log (pontuaçaoDeGolf(4, 4))