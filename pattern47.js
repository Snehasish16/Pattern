// 5       5       5       5       5
// _       4       4       4       4
// _       _       3       3       3
// _       _       _       2       2
// _       _       _       _       1


function pattern(n){
    let str="";
    let sp=0;
    for(let i=n;i>=1;i--){
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        for(let j=1;j<=i;j++){
            str+=i+"\t"
        }
        str+="\n"
        sp++
    }
    console.log(str)
}
pattern(5)