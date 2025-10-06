// 7       6       5       4       3       2       1
// _       5       4       3       2       1
// _       _       3       2       1
// _       _       _       1

function pattern(n) {
    let str = "";
    let star=(2*n)-1;
    let sp=0;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = star; j >= 1; j--) {
                str += j+"\t"
            }
            star-=2;
            sp++;
            str+="\n"
        }
    console.log(str)
}
pattern(4);