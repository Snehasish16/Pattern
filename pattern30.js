// 5       4       3       2       1
// 4       3       2       1       _
// 3       2       1       _       _
// 2       1       _       _       _
// 1       _       _       _       _



function pattern(n){
    str=""
    sp=0
    for(let i=n;i>=1;i--){
        for(let j=i;j>=1;j--){
            str+=j + "\t"
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