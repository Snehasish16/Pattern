// _       _       _       1
// _       _       2       2       2
// _       3       3       3       3       3
// 4       4       4       4       4       4       4
// _       5       5       5       5       5
// _       _       6       6       6
// _       _       _       7

function pattern(n) {
    let str = "";
    let star=1;
    let sp=Math.floor(n/2);
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = 1; j <= star; j++) {
                str += i+"\t"
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