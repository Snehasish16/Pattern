// _       _       _       X       _       _       _
// _       _       X       _       X       _       _
// _       X       _       _       _       X       _
// X       X       X       X       X       X       X

function pattern(n){
    let str="";
    let sp=n-1
    for(let i=1;i<=n;i++){
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        for(j=1;j<i*2;j++){
            if(j==(i*2)-1||j==1||i==n){
                str+="X\t"
            }
            else{
                str+="_\t"
            }
        }
        for(j=1;j<=sp;j++){
            str+="_\t"

        }
        str+="\n"
        sp--
    }
    console.log(str)

}
pattern(4)


/*========OR======== */
function pattern(n){
    let str="";
    let sp=n-1;
    let star=1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=sp;j++){
            str+="_\t"
        }
        for(j=1;j<=star;j++){
            if(j==star||j==1||i==n){
                str+="X\t"
            }
            else{
                str+="_\t"
            }
        }
        for(j=1;j<=sp;j++){
            str+="_\t"

        }
        str+="\n"
        sp--
        star+=2
    }
    console.log(str)

}
pattern(4)