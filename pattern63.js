// 1
// 2       1
// 1       2       3
// 4       3       2       1
// 1       2       3
// 2       1
// 1

function pattern(n) {
    let str = "";
    let star=1;
    for (let i = 1; i <= n; i++) {
           if(i%2==1){
            for (let j = 1; j <= star; j++) {
                str += j +"\t"
            }
           }else{
            for (let j = star; j >= 1; j--) {
                str += j +"\t"
            }
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
pattern(7);