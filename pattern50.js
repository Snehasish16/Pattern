// 5       4       3       2       1
// _       4       3       2       1
// _       _       3       2       1
// _       _       _       2       1
// _       _       _       _       1


// function pattern(n) {
//     let str = "";
//     let sp = 0;
//     for (let i = n; i >= 1; i--) {
//         for (let j = 1; j <= sp; j++) {
//             str += "_\t"
//         }
//         for (let j = i; j >= 1; j--) {
//             str += j + "\t"
//         }
//         str += "\n"
//         sp++
//     }
//     console.log(str)
// }
// pattern(5);


/* ======OR======*/
function pattern(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += "_\t"
        }
        for (let j = n-i; j >= 1; j--) {
            str += j + "\t"
        }
        str += "\n"
    }
    console.log(str)
}
pattern(5);