"use strict";
let age = 3;
let color = 0xf00d;
let list = [1, 23, 3];
let list2 = ['a', 'b'];
let name1 = '';
let aa;
aa = ['a', 2];
aa[1] = 3;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["white"] = 1] = "white";
    Color[Color["black"] = 2] = "black";
    Color[Color["orange"] = 3] = "orange";
})(Color || (Color = {}));
;
console.log(Color[2]);
