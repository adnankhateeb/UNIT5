let arr=[1,2,1];
let obj = {};
let k = 2;

for(let i = 0; i<arr.length; i++){
    if (obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    } else{
        obj[arr[i]] += 1;
    }
}
let flag = false;
for (let keys in obj){
    if(obj[keys] >= k){
       flag = true;
       break;
    }
}
console.log(flag)