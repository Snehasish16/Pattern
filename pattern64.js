// X       X       X       X       X       X       X
// _       X       X       X       X       X
// _       _       X       X       X
// _       _       _       X

function pattern(n) {
    let str = "";
    let star=(2*n)-1;
    let sp=0;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = 1; j <= star; j++) {
                str += "X\t"
            }
            star-=2;
            sp++;
            str+="\n"
        }
    console.log(str)
}
pattern(4);