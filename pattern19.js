// _       _       1       _       _
// _       _       2       _       _
// 1       2       3       2       1
// _       _       2       _       _
// _       _       1       _       _


function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == Math.ceil(n / 2)) {
                if (j <= Math.ceil(n / 2)) {
                    str += j + "\t";
                } else {
                    str += n + 1 - j + "\t"
                }
            }
            else if (j == Math.ceil(n / 2)) {
                if (i <= Math.ceil(n / 2)) {
                    str += i + "\t";
                } else {
                    str += n + 1 - i + "\t";
                }
            }
            else {
                str += "_\t"
            }
        }
        str += "\n"
    }
    console.log(str)
}
pattern(5);