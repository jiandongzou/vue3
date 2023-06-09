function greeter(person:string){
    return "Hello, " + person;
}
let user:string = "Jane User";
let a:number;
a=3
document.body.innerHTML = greeter(user);
let b:any;
b=1
b="www";
b=true;
let c:unknown
c=1;
c='222'
let s:string;
s='222';
s=c as string;
console.log(s)
function fn():number{
  return 111
};
function fn1():void{
    return undefined
};
function fn2(){
    if(true){
        return 123
    }else{
        return true
    }
}
enum sex{
    male=0,
    female=1
}
let obj:{name:string,[propsName:string]:any}
obj={age:18,sex:sex.female,name:"zz",shcool:true};
let arr:[string,number];
arr=["aa",2]
let e=77;