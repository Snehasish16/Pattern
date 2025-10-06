// X
// X       X
// X       X       X
// X       X       X       X
// X       X       X       X       X

function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str+="X\t"
        }
        str+="\n"
    }
    console.log(str)
}
pattern(5);



/*=====OR======*/
// function pattern(n) {
//     let str = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if(i==n||j==1||i==j||j<i){
//                 str+="X\t"
//             }
//             else{
//                 str+=" \t"
//             }
//         }
//         str+="\n"
//     }
//     console.log(str)
// }
// pattern(7);