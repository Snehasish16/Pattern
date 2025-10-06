// _       _       _       _       5
// _       _       _       4       5
// _       _       3       4       5
// _       2       3       4       5
// 1       2       3       4       5

function pattern(n) {
    let str = "";
    let sp=n-1;
    for (let i = n; i>=1; i--) {
        for (let j = 1; j <= sp; j++) {
            str+="_\t"
        }
        for(let j=i;j<=n;j++){
            str+=j+"\t"
        }
        str+="\n"
        sp--
    }
    console.log(str)
}
pattern(5);