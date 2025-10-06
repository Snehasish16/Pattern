function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 || j == 1 || i == n || j == n) {
                str += i + "\t"
            } else {
                str += "_" + "\t"
            }
        }
        str += "\n"
    }
    console.log(str)
}
pattern(5);