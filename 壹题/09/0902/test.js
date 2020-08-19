function getA() {
    return this.a
}
var obj = {
    a: 3
}
console.log(getA.bind(obj))