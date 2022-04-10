let v = "eziowiomkvrrdzx";
let r = "orugiebaolddavd";

function fn(v,r,vl,rl){
   if(vl == 0 || rl  == 0){
       return 0;
   }
   
   if(v[vl-1] == r[rl-1]){
       return 1 + fn(v, r, vl-1,rl-1)
   } 
    return Math.max(fn(v,r,vl-1,rl), fn(v,r,vl,rl-1))
   
}
console.log(fn(v,r,v.length, r.length))


