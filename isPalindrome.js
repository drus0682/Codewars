function isPalindrome(x) {
    for (let i = 0; i <= (x.length / 2) - 1; i++) {
        console.log(x[i].toUpperCase);
        console.log(x[x.length - 1 - i].toUpperCase);
        if (x[i].toUpperCase() != x[x.length - 1 - i].toUpperCase()) {


            return false;
        }
    }
    return true;
}