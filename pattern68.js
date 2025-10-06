// _       _       _       X
// _       _       X       X
// _       X       X       X
// X       X       X       X
// _       X       X       X
// _       _       X       X
// _       _       _       X

function pattern(n) {
    let str = "";
    let star=1;
    let sp=Math.floor(n/2);
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = 1; j <= star; j++) {
                str += "X\t"
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