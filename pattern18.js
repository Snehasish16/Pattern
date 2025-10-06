// _       _       5       _       _
// _       _       4       _       _
// 1       2       3       4       5
// _       _       2       _       _
// _       _       1       _       _




// function pattern(n) {
//     let str = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (i == Math.ceil(n / 2)) {
//                 str += j + "\t";
//             }
//             else if(j == Math.ceil(n/2)){
//                 str+= (n+1)-i +"\t"
//             }
//             else{
//                 str+="_\t"
//             }
//         }
//             str += "\n"
//         }
//         console.log(str)
//     }
//     pattern(5);

    /*OR*/
    function pattern(n) {
    let str = "";
    for (let i = n; i>= 1; i--) {
        for (let j = 1; j <= n; j++) {
            if (i == Math.ceil(n / 2)) {
                str += j + "\t";
            }
            else if(j == Math.ceil(n/2)){
                str+= i +"\t"
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