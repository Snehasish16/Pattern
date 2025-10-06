function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1) {
                str += j + "\t";
            }
            else if (j == 1) {
                str += i + "\t";
            }
            else if (i == n) {
                str += (n + 1 - j) + "\t"
            }
            else if (j == n) {
                str += (n + 1 - i) + "\t"
            }
            else{
                str+="_\t"
            }
        }
        str += "\n"
    }
    console.log(str)
}
pattern(5);