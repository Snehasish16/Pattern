// 1       _       _       _       _       1
// 1       2       _       _       2       1
// 1       2       3       3       2       1
// 1       2       _       _       2       1
// 1       _       _       _       _       1


function pattern(n) {
    let str = "";
    let star=1;
    let sp=n-1;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= star; j++) {
                str += j+"\t"
            }
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = star; j >= 1; j--) {
                    str+=j+"\t"
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
pattern(5);