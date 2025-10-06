// _       _       _       1       _       _       _
// _       _       1       2       1       _       _
// _       1       2       3       2       1       _
// 1       2       3       4       3       2       1

function pattern(n){
    let str="";
    let sp=n-1;
    let star=1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        for(j=1;j<=star;j++){
            if(j<=i){
                str+=j+"\t"
            }
            else{
                str+=star-j+1 +"\t"
            }
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