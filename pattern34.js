// 5       4       3       2       1
// 5       4       3       2       _
// 5       4       3       _       _
// 5       4       _       _       _
// 5       _       _       _       _


function pattern(n){
    str=""
    sp=0
    for(let i=1;i<=n;i++){
        for(let j=n;j>=i;j--){
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