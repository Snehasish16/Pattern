// 1
// 2       2
// 3       3       3
// 4       4       4       4
// 5       5       5
// 6       6
// 7


function pattern(n) {
    let str = "";
    let star=1;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= star; j++) {
                str += i +"\t"
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