"use strict";
function demo(id) {
    //类型“T”上不存在属性“length”。ts(2339)
    //console.log(id.length)
    return id;
}
;
;
function demo2(id) {
    console.log(id.length);
    return id;
}
;
demo2({ length: 7 });
function copyFields(target, source) {
    for (let id in source) {
        console.log(id);
        target[id] = source[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
//{a: 1, b: 10, c: 3, d: 20}
console.log(copyFields(x, { b: 10, d: 20, c: 1 }));
let Myfunc = function (source, substr) {
    return source.search(substr) !== -1;
};
console.log(Myfunc("aaaaaaaaddfffffc", "c"));
let mycreateFunc;
mycreateFunc = function (length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(mycreateFunc(3, 'x'));
