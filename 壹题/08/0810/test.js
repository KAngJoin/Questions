function Traverse(p_element, p_callback) {// 一个DOM元素，一个回调函数（以DOM元素为参数）
    p_callback(p_element);
    var list = p_element.children;
    for (var i = 0; i < list.length; i++) {
        Traverse(list[i], p_callback);//recursive call
    }
}