// X
// X       X
// X       X       X
// X       X       X       X
// X       X       X
// X       X
// X

function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        if (i <= Math.ceil(n / 2)) {
            for (let j = 1; j <= i; j++) {
                str += "X\t"
            }
        } else {
            for (let j = 1; j <= n - i + 1; j++) {
                str += "X\t"
            }
        }
        str += "\n"
    }
    console.log(str)
}
pattern(7)


/*=======OR=======*/
function pattern(n) {
    let str = "";
    let star=1;
    for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= star; j++) {
                str += "X\t"
            }
        str += "\n"
        if(i<n/2){
            star++
        }else{
            star--
        }
    }
    console.log(str)
}
pattern(7)
