// 1       _       _       _       _       1
// 2       2       _       _       2       2
// 3       3       3       3       3       3
// 4       4       _       _       4       4
// 5       _       _       _       _       5


function pattern(n) {
    let str = "";
    let star=1;
    let sp=n-1;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= star; j++) {
                str += i+"\t"
            }
            for (let j = 1; j <= sp; j++) {
                str += "_\t"
            }
            for (let j = 1; j <= star; j++) {
                    str+=i+"\t"
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