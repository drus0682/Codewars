function getSum(a, b) {
    let sum = 0;
    if (a == b) {
        return a;
    }
    if (a < b) {
        sum += b;
        while (a < b) {
            sum += a;
            a++;
        }
    }
    if (a > b) {
        sum += a;
        while (a > b) {
            sum += b;
            b++;
        }
    }
    return sum;
}