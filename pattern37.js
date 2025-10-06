// 5       _       _       _       _
// 4       4       _       _       _
// 3       3       3       _       _
// 2       2       2       2       _
// 1       1       1       1       1


function pattern(n){
    str=""
    sp=n-1
    for(let i=5;i>=1;i--){
        for(let j=n;j>=i;j--){
            str+=i+"\t"
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