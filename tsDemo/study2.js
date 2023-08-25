"use strict";
function namea(name, age) {
    return `我叫${name},今年${age}`;
}
console.log(namea("tom", 23));
function nameb(obj) {
    return `我叫${obj.name},今年${obj.age}`;
}
console.log(nameb({ name: 'jack', age: 25 }));
function namec(obj) {
    console.log(`我叫${obj.name},今年${obj.age ? obj.age : 18}`);
}
;
namec({ name: 'mike', age: 29 });
let ro = [1];
