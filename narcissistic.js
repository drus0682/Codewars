function narcissistic(value) {
    let sum = 0;
    let mustBe = value;
    let number = String(value).length;
    for (let i = 0; i < number; i++) {
        sum += Math.pow(value % 10, number);
        value = Math.trunc(value / 10);
    }
    return (sum == mustBe) ? true : false;

}