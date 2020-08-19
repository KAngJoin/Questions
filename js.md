## 如何提升 JavaScript 变量的存储性能？

访问**字面量和局部变量**的速度最快，访问**数组元素和对象成员**相对较慢;

由于局部变量存在于作用域链的起始位置，因此**访问局部变量比访问跨作用域变量更快**，全局变量的访问速度最慢;

**嵌套的对象成员**会明显影响性能，尽量少用，例如`window.loacation.href`;

属性和方法**在原型链中的位置越深**，则访问它的速度也越慢;

通常来说，**需要访问多次**的对象成员、数组元素、跨作用域变量**可以保存在局部变量中**从而提升 JavaScript 执行效率;

## 判断一个对象是否为空对象？

1. 使用`JSON.stringify(object)` 方法，将对象转换为字符串，进行序列化。

   ```js
   console.log(JSON.stringify({}) === "{}");  // true
   ```

2. for...in... 遍历对象，同时使用hasOwnProperty()去除原型属性

   ```js
   function isEmptyObject(object) {
     for (const key in object) {
       if (object.hasOwnProperty(key)) {
         return false
       }
     }
     return true
   }
   ```

   注意：for...in 循环包括原型属性

3. jQuery的isEmptyObject()方法

   ```js
   //该方法是对 （for in）的封装；
   let obj = {};
   let b = $.isEmptyObject(obj);
   alert(b); // true
   ```

4. Object.getOwnPropertyNames()方法

   **Object.getOwnPropertyNames()**方法返回一个由指定对象的所有**自身属性**的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

   ```js
   let obj = {};
   let b = Object.getOwnPropertyNames(obj);
   console.log(b.length); // 0 	
   ```

5. Object.keys()方法

   **Object.keys()**方法会返回一个由一个给定对象的**自身可枚举属性**组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

   ```js
   //该方法返回的同样是属性名组成的数组对象。
   let obj = {};
   let arr = Object.keys(obj);
   console.log(arr.length); // 0	
   ```

   ​