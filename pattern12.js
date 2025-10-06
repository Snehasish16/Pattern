function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == Math.ceil(n / 2)) {
                str += j+"\t"
            
            }else if(j == Math.ceil(n / 2)){
                str += i+"\t"

            }
             else {
                str += "_\t"
            }
        }
        str += "\n"
    }
    console.log(str)
}
pattern(5);