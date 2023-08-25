function namea(name:string,age:number){
  return `我叫${name},今年${age}`
}
console.log(namea("tom",23));
function nameb(obj:{name:string,age:number}){
    return `我叫${obj.name},今年${obj.age}`
  }
  console.log(nameb({name:'jack',age:25}));
  interface objType{
    name:string,
    age?:number
  }
  function namec(obj:objType){
    console.log(`我叫${obj.name},今年${obj.age?obj.age:18}岁`)
  };
  namec({name:'mike',age:29})
  let ro: ReadonlyArray<number> = [1];