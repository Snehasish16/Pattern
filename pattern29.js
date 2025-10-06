// 1       1       1       1       1
// 2       2       2       2       _
// 3       3       3       _       _
// 4       4       _       _       _
// 5       _       _       _       _


function pattern(n){
    str="";
    sp=0;
    for(let i=n;i>=1;i--){
        for(let j=1;j<=i;j++){
            str+=sp+1 +"\t"
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

function pattern(n){
    str="";
    sp=0;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-sp;j++){
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