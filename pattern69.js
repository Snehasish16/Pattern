// _       _       _       1
// _       _       2       1
// _       3       2       1
// 4       3       2       1
// _       3       2       1
// _       _       2       1
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
                star++;
                sp--;
            }else{
                star--;
                sp++;
            }
        }
    console.log(str)
}
pattern(7);