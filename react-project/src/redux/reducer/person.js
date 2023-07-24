const initPerson=[{
    name:'小明',
    age:18
}]
function person_reducer(person=initPerson,action){
  const {type,data}=action;
  switch(type){
    case 'addperson':
    return [...person,data]
    default:
    return person
  }
}
export default person_reducer