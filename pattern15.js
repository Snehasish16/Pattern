function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        if(i%2==1){
            for (let j=1;j<=n;j++){
                if(j%2==1){
                    str+=j + "\t"
                }else{
                    str+="X\t"
                }
            }
        }else{
            for (let j=n;j>=1;j--){
                if(j%2==1){
                    str+="X\t"
                }else{
                    str+=j + "\t"
                }
            }
        }
        str+="\n"
    }
    console.log(str)
}
pattern(5);