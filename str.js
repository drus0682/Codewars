function XO(str) {
    let number_of_X = 0;
    let number_of_O = 0;
    for (i = 0; i < str.length; i++) {
      if (str[i] == 'x' || str[i] == 'X') {
        number_of_X++;
      }
      else if (str[i] == 'o' || str[i] == 'O') {
        number_of_O++;
      }
    }
  if (number_of_X == number_of_O) {
    return true;
  } 
  else return false;
}