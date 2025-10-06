// _       _       _       X
// _       _       X       _       X
// _       X       _       _       _       X
// X       _       _       _       _       _       X
// _       X       _       _       _       X
// _       _       X       _       X
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
                if(j==1||j==star){
                    str+="X\t"
                }else{
                    str+="_\t"
                }
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