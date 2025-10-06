// 1       _       _       _       _
// 2       1       _       _       _
// 3       2       1       _       _
// 4       3       2       1       _
// 5       4       3       2       1


function pattern(n){
    str=""
    sp=n-1
    for(let i=1;i<=n;i++){
        for(let j=i;j>=1;j--){
            str+=j+"\t"
        }
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        str+="\n"
        sp--
    }
    console.log(str)
}
pattern(5)