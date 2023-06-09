"use strict";
function greeter(person) {
    return "Hello, " + person;
}
let user = "Jane User";
let a;
a = 3;
document.body.innerHTML = greeter(user);
let b;
b = 1;
b = "www";
b = true;
let c;
c = 1;
c = '222';
let s;
s = '222';
s = c;
console.log(s);
function fn() {
    return 111;
}
;
function fn1() {
    return undefined;
}
;
function fn2() {
    if (true) {
        return 123;
    }
    else {
        return true;
    }
}
var sex;
(function (sex) {
    sex[sex["male"] = 0] = "male";
    sex[sex["female"] = 1] = "female";
})(sex || (sex = {}));
let obj;
obj = { age: 18, sex: sex.female, name: "zz", shcool: true };
let arr;
arr = ["aa", 2];
let e = 77;
