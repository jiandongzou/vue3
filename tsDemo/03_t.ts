function demo<T>(id:T):T{
    //类型“T”上不存在属性“length”。ts(2339)
    //console.log(id.length)
    return id
};
interface Length{
    length:number
};
function demo2<T extends Length>(id:T):T{
    console.log(id.length);
    return id
};
demo2({length:7});

function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        console.log(id);
        target[id] = (<T>source)[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
//{a: 1, b: 10, c: 3, d: 20}
console.log(copyFields(x, { b: 10, d: 20,c:1 }));

interface func{
    (source:string,substr:string):boolean
}
let Myfunc:func=function(source:string,substr:string):boolean{
  return source.search(substr)!==-1
}
console.log(Myfunc("aaaaaaaaddfffffc","c"));

interface createFunction<T>{
    (length:number,vlaue:T):Array<T>
}
let mycreateFunc:createFunction<any>;
mycreateFunc=function <T>(length:number,value:T):Array<T>{
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(mycreateFunc(3, 'x'))