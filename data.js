function openOrSenior(data){
  let i = -1;
  
  let array = new Array();
  data.forEach((element) => {
  if ((element[0] >= 55) && (element[1] > 7)) {
    array.push('Senior');
  }
  else {
    array.push('Open');
  }

});
    return array;
}