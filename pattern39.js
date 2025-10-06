// function pattern(n) {
//     let str = "";
//     for (let i = 1; i<=n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if(j==n||i==n||i+j>=n+1){
//                 str+="X\t"
//             }
//             else{
//                 str+="_\t"
//             }
//         }
//         str+="\n"
//     }
//     console.log(str)
// }
// pattern(5);


function pattern(n) {
    let str = "";
    let sp=n-1;
    for (let i = 1; i<=n; i++) {
        for (let j = 1; j <= sp; j++) {
            str+="_\t"
        }
        for(let j=1;j<=i;j++){
            str+="X\t"
        }
        str+="\n"
        sp--
    }
    console.log(str)
}
pattern(5);