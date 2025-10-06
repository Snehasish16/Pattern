// 1       2       3       4       5       6       7
// _       1       2       3       4       5
// _       _       1       2       3
// _       _       _       1


function pattern(n) {
    let str = "";
    let star=(2*n)-1;
    let sp=0;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = 1; j <= star; j++) {
                str += j+"\t"
            }
            star-=2;
            sp++;
            str+="\n"
        }
    console.log(str)
}
pattern(4);