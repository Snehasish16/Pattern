// 1       2       3       4       5
// 1       2       3       4       _
// 1       2       3       _       _
// 1       2       _       _       _
// 1       _       _       _       _



function pattern(n){
    str=""
    sp=0
    for(let i=5;i>=1;i--){
        for(let j=1;j<=i;j++){
            str+=j+"\t"
        }
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        str+="\n"
        sp++
    }
    console.log(str)
}
pattern(5)