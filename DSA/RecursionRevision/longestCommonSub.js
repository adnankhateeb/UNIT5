let v = "eziowiomkvrrdzx";
let r = "orugiebaolddavd";

let count = 0;

for (let i = 0; i < v.length; i++) {
   for (let j = 0; j < r.length; j++) {
      if (v[i] == r[j]) {
         i = j;
         count++
      }
   }
}
console.log(count);
// let v = "eziowiomkvrrdzx";
// let r = "orugiebaolddavd";
// // o i o d v
// let vl = v.length;
// let rl = r.length;

// let first = 0;
// let second = 0;

// while(first < vl && second < rl){
//     if(v[first] == r[second]){
//         count++;
//         first++;
//         second++;
//     } else{

//     }
// }

