// 5       _       _       _       _
// 4       5       _       _       _
// 3       4       5       _       _
// 2       3       4       5       _
// 1       2       3       4       5


function pattern(n){
    str=""
    sp=n-1
    for(let i=n;i>=1;i--){
        for(let j=i;j<=n;j++){
            str+=j + "\t"
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