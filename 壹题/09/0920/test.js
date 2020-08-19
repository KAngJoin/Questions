var data = [];
for (var k = 0; k < 3; k++) {
    data[k] = function () {
        console.log(k)
    }
}

data[0]();//3
data[1]();//3
data[2]();//3