function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        if(i%2==0){
            for (let j=n;j>0;j--){
                str+=j+"\t"
            }
        }else{
            for (let j=1;j<=n;j++){
                str+=j +"\t"
            }
        }
        str+="\n"
    }
    console.log(str)
}
pattern(5);