// _       _       _       1       _       _       _
// _       _       2       2       2       _       _
// _       3       3       3       3       3       _
// 4       4       4       4       4       4       4

function pattern(n){
    let str="";
    let sp=n-1;
    let star=1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        for(j=1;j<=star;j++){
            str+=i+"\t"
        }
        for(j=1;j<=sp;j++){
            str+="_\t"

        }
        str+="\n"
        sp--
        star+=2
    }
    console.log(str)

}
pattern(4)