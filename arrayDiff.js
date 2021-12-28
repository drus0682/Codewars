function arrayDiff(a, b) {
    if (a[0] == undefined || b[0] == undefined) {
        return a;
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                a.splice(i, 1);
                i--;
            }
        }
    }
    return a;
}