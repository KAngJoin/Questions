function a() {
    y = function () {
        x = 2;
    };
    return function () {
        // console.log(this)
        var x = 3;
        y();
        console.log(this.x);//2
    }.apply(this, arguments);//调用原始函数，这里的this是global
}
a();

