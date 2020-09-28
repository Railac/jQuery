//grep.js

let members = [];
members.push({name: "hong", point: 80});
members.push({name: "hwang", point: 100});
members.push({name: "park", point: 95});
members.push({name: "choi", point: 85});
members.push({name: "ryu", point: 90});

$(members).each((a,b) => {
    console.log(a,b);
});
console.clear();

let grepMem= $.grep(members, (a,b)=>{
    console.log(a,b);
    return (a.point > 50 ? a : null);
});

console.clear();
let sum = $(grepMem).map((a,b)=>{
    return b.point;
}).get();

console.log("전체point값: " + sum);
//p200 참조
