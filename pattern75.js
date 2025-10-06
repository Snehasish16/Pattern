

function pattern(n) {
    let str = "";
    let star=1;
    let sp=Math.floor(n/2);
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = 1; j <= star; j++) {
                if(j<=Math.ceil(star/2)){
                    str+=j+"\t"
                }else{
                    str+=star-j+1 +"\t"
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