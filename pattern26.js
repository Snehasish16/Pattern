// 5
// 5       4
// 5       4       3
// 5       4       3       2
// 5       4       3       2       1



// function pattern(n) {
//     let str = "";
//     for (let i = n; i>=1; i--) {
//         for (let j = n; j >= i; j--) {
//             str+= j+"\t"
//         }
//         str+="\n"
//     }
//     console.log(str)
// }
// pattern(5);


function pattern(n) {
    let str = "";
    for (let i = 1; i<=n; i++) {
        for (let j = 1; j <= i; j++) {
            str+=n-j+1 +"\t"
        }
        str+="\n"
    }
    console.log(str)
}
pattern(5);