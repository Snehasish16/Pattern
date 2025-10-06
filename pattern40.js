// _       _       _       _       X
// _       _       _       X       X
// _       _       X       X       X
// _       X       X       X       X
// X       X       X       X       X


function pattern(n) {
    let str = "";
    let sp=n-1;
    for (let i = 1; i<=n; i++) {
        for (let j = 1; j <= sp; j++) {
            str+="_\t"
        }
        for(let j=1;j<=i;j++){
            str+="X\t"
        }
        str+="\n"
        sp--
    }
    console.log(str)
}
pattern(5);