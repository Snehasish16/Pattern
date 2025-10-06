// 1       2       3       4       5
// 2       3       4       5       _
// 3       4       5       _       _
// 4       5       _       _       _
// 5       _       _       _       _



function pattern(n){
    str="";
    sp=0;
    for(let i=1;i<=n;i++){
        for(let j=i;j<=n;j++){
            str+=j +"\t"
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


/*=======OR======= */
function pattern(n){
    str="";
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            str+=j +"\t"
        }
        for(let j=0;j<i;j++){
            str+="_\t"
        }
        str+="\n"
    }
    console.log(str)
}
pattern(5)