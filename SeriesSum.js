function SeriesSum(n) {
    let x = 3;
    let sum = 1;
    for (let i = 1; i < n; i++) {
        sum += 1 / (1 + x);
        x += 3;
    }
    if (n == 0) sum = 0;
    sum = sum.toFixed(2);
    return String(sum);
}