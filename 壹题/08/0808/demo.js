var b = 1;
function outer() {
    var b = 2;
    function inner() {
        //var b; //b is undefined 
        b++; //b is NaN
        var b = 3; //b is 3
        console.log(b)// ouput '3'
    }
    inner();
}
outer();