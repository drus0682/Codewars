function pigIt(str) {
    let res = str.split(" ");

    for (let i = 0; i < res.length; i++) {
        //res[i] = res[i].substr(1) + (res[i])[0];
        if (res[i] != '!' && res[i] != '?')
            res[i] = res[i].substr(1) + res[i][0] + 'ay';
    }
    return res.join(' ');
}