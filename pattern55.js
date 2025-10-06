// _       _       _       1       _       _       _
// _       _       1       2       3       _       _
// _       1       2       3       4       5       _
// 1       2       3       4       5       6       7


function pattern(n){
    let str="";
    let sp=n-1;
    let star=1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        for(j=1;j<=star;j++){
            str+=j+"\t"
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