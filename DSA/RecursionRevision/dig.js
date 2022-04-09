function superDigit(n, k) {
    // Write your code here
    let s = n.toString()
    let bigN = s.repeat(k);
    // console.log(bigN)
    function sum(bigN){
        var sumHere = 0
        for (let i = 0; i<bigN.length; i++){
            sumHere += Number(bigN[i]);
        }
            return sumHere.toString();
        // return sum.toString();
        }
    
    let res = '';
    res = sum(bigN);
    // console.log(res);
     while(res.length !== 1){
        res = sum(res)
    }
     return Number(res)
}

// console.log(superDigit(123456788999999999999999, 1994))
let res = superDigit(123456788999999, 1);
let k = 3
console.log(superDigit(res, k))