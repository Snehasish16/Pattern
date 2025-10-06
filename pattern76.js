// _       _       _       1
// _       _       3       2       1
// _       5       4       3       2       1
// 7       6       5       4       3       2       1
// _       5       4       3       2       1
// _       _       3       2       1
// _       _       _       1

function pattern(n) {
    let str = "";
    let star=1;
    let sp=Math.floor(n/2);
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = star; j >= 1; j--) {
                str += j+"\t"
            }
            str+="\n"
            if(i<(n/2)){
                star+=2;
                sp--;
            }else{
                star-=2;
                sp++;
            }
        }
    console.log(str)
}
pattern(7);