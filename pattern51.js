// 1       2       3       4       5
// _       1       2       3       4
// _       _       1       2       3
// _       _       _       1       2
// _       _       _       _       1


function pattern(n) {
    let str = "";
    let sp = 0;
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= sp; j++) {
            str += "_\t"
        }
        for (let j = 1; j <= i; j++) {
            str += j + "\t"
        }
        str+="\n"
        sp++
    }
    console.log(str)
}
pattern(5);


/*======OR===== */
function pattern(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += "_\t"
        }
        for (let j = 0; j < n-i; j++) {
            str += j+1 + "\t"
        }
        str+="\n"
    }
    console.log(str)
}
pattern(5);  