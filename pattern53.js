// _       _       _       X       _       _       _
// _       _       X       X       X       _       _
// _       X       X       X       X       X       _
// X       X       X       X       X       X       X

function pattern(n){
    str="";
    sp=n-1
    for(let i=1;i<=n;i++){
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        for(j=1;j<i*2;j++){
            str+="X\t"
        }
        for(j=1;j<=sp;j++){
            str+="_\t"

        }
        str+="\n"
        sp--
    }
    console.log(str)

}
pattern(4)