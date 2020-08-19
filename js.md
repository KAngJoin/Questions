### 如何提升 JavaScript 变量的存储性能？

访问**字面量和局部变量**的速度最快，访问**数组元素和对象成员**相对较慢;

由于局部变量存在于作用域链的起始位置，因此**访问局部变量比访问跨作用域变量更快**，全局变量的访问速度最慢;

**嵌套的对象成员**会明显影响性能，尽量少用，例如`window.loacation.href`;

属性和方法**在原型链中的位置越深**，则访问它的速度也越慢;

通常来说，**需要访问多次**的对象成员、数组元素、跨作用域变量**可以保存在局部变量中**从而提升 JavaScript 执行效率;