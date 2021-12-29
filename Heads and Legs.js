function animals(heads, legs) {

    let presumedCows = heads * 4;

    let difference = presumedCows - legs;

    let chickens = difference / 2;

    let cows = (legs - difference) / 4

    if (heads === 0 && legs === 0) {
        return [0, 0];
    } else if (legs % 2 != 0 || chickens < 0 || cows < 0) {
        return "No solutions";
    } else {
        return [chickens, cows];
    }
}