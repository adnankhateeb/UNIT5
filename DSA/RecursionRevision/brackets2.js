
function brackets(index, open, close, arr, n){
    if(n%2 !== 0){
        console.log('Not possible');
        return;
    }

    if(index == n){
        console.log(arr);
        //backtrack
    }
    

}
let n = 4
let arr = new Array(n)
arr.fill('0')
console.log("arr:", arr)