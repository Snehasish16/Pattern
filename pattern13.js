function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if(i%2==0){
                str+="X\t";
            }else{
                str+=j+"\t"
            }
        }
        str += "\n"
    }
    console.log(str)
}
pattern(5);