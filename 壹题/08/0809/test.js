var a = { n: 1 }
var b = a;
a.n = a = { m: 1 }

console.log('a=',a)
console.log('b=',b)