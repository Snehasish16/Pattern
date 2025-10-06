function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            let start = n * i
            for (let j = 1; j <= n ; j++) {

                str += start-- + "\t"
            }
        } else {
            let start = n * (i - 1) + 1
            for (let j = 1 ; j <= n; j++) {
                str += start++ + "\t"
            }
        }
        str += "\n"
    }
    console.log(str)
}
pattern(5);