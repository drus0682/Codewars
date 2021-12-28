const sequenceSum = (begin, end, step) => {
    let sum = 0;
    if (begin == end || begin > end) return sum;
    else {
        sum += begin;
        for (let i = begin; i < end; i += step) {
            if (begin + step <= end) {
                sum += begin + step;
                begin += step;
            }

        }
        console.log(sum);
        return sum;
    }
};