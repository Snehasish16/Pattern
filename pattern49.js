// 1       1       1       1       1
// _       2       2       2       2
// _       _       3       3       3
// _       _       _       4       4
// _       _       _       _       5

// function pattern(n){
//     let str="";
//     let sp=0;
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=sp;j++){
//             str+="_\t"
//         }
//         for(let j=n;j>sp;j--){
//             str+=i+"\t"
//         }
//         str+="\n"
//         sp++
//     }
//     console.log(str)
// }
// pattern(5)


/* ======OR======*/

function pattern(n){
    let str="";

    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            str+="_\t"
        }
        for(let j=n;j>i;j--){
            str+=i+1 +"\t"
        }
        str+="\n"
    }
    console.log(str)
}
pattern(5)