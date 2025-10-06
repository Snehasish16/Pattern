function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == j || i + j == n + 1) {
                str += j + "\t"
            } else {
                str += "_" + "\t"
            }
        }
        str += "\n"
    }
    console.log(str)
}
pattern(5);