function showWindowHref() {
    var sHref = window.location.href;
    var args = sHref.split('?');
    console.log(args)
    if (args[0] == sHref) {
        return "";
    }
    var arr = args[1].split('&');
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var arg = arr[i].split('=');
        obj[arg[0]] = arg[1];
    }
    return obj;
}
var href = showWindowHref(); 
console.log(href['name']); // xiaoming