// X       _       _       _       X
// X       X       _       X       X
// X       _       X       _       X
// X       _       _       _       X
// X       _       _       _       X


function pattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(j==1||j==n){
                str+="X\t";
            }else if(i==j && i<=Math.ceil(n/2)){
                str+="X\t";
            }else if(i+j==n+1 && i<=Math.ceil(n/2)){
                str+="X\t";
            }
            else{
                str+="_\t"
            }
        }
        str+="\n"
    }
    console.log(str)
}
pattern(5)