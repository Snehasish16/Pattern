// X       _       _       _       _       _       _       X
// X       X       _       _       _       _       X       X
// X       X       X       _       _       X       X       X
// X       X       X       X       X       X       X       X
// X       X       X       _       _       X       X       X
// X       X       _       _       _       _       X       X
// X       _       _       _       _       _       _       X


function pattern(n) {
    let str = "";
    let star=1;
    let sp=n-1;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= star; j++) {
                str += "X\t"
            }
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = 1; j <= star; j++) {
                    str+="X\t"
            }
            str+="\n"
            if(i<(n/2)){
                star++;
                sp-=2;
            }else{
                star--;
                sp+=2;
            }
        }
    console.log(str)
}
pattern(7);