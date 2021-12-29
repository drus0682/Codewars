function height(n) {
    let sum = 2000000;
    let next = 2000000;
    for (let i = 0; i < n; i++) {
        next = next / 2.5;
        sum += next;
    }
    return sum.toFixed(3);
}