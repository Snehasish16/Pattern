// 5       5       5       5       5
// 4       4       4       4       _
// 3       3       3       _       _
// 2       2       _       _       _
// 1       _       _       _       _

function pattern(n){
    str="";
    sp=0;
    for(let i=n;i>=1;i--){
        for(let j=1;j<=i;j++){
            str+=i +"\t"
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