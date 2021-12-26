function digitize(n) {
  let array = new Array();
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    array[i] = n % 10;
    n = Math.trunc(n / 10);
  }
  console.log(array);
  return array;
}