// X       X       X       X       X
// _       X       X       X       X
// _       _       X       X       X
// _       _       _       X       X
// _       _       _       _       X


function pattern(n) {
    let str = "";
    let sp=0;
    for (let i = n; i>=1; i--) {
        for (let j = 1; j <= sp; j++) {
            str+="_\t"
        }
        for(let j=1;j<=i;j++){
            str+="X"+"\t"
        }
        str+="\n"
        sp++
    }
    console.log(str)
}
pattern(5);

