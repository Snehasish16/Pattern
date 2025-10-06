// 1
// 1       2
// 1       2       3
// 1       2       3       4
// 1       2       3
// 1       2
// 1


function pattern(n) {
    let str = "";
    let star=1;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= star; j++) {
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