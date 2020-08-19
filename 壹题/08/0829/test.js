var obj = { a:1,b:2,c:3 };
delete(obj.b);
console.log(Object.prototype.toString.call(obj).slice(8,-1))
// console.log('Object')
console.log(obj)