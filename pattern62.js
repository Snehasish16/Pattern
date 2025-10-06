// 1
// 2       1
// 3       2       1
// 4       3       2       1
// 3       2       1
// 2       1
// 1

function pattern(n) {
    let str = "";
    let star=1;
    for (let i = 1; i <= n; i++) {
            for (let j = star; j >= 1; j--) {
                str += j +"\t"
            }
        str += "\n"
        if(i<n/2){
            star++
        }else{
            star--
        }
    }
    console.log(str)
}
pattern(7)