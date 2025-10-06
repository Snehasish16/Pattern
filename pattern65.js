// 1       1       1       1       1       1       1
// _       2       2       2       2       2
// _       _       3       3       3
// _       _       _       4

function pattern(n) {
    let str = "";
    let star=(2*n)-1;
    let sp=0;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = 1; j <= star; j++) {
                str += i+"\t"
            }
            star-=2;
            sp++;
            str+="\n"
        }
    console.log(str)
}
pattern(4);