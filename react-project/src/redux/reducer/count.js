let initState={
    count:0
}
const count_reducer=(state=initState,action)=>{
   switch(action.type){
      case 'add':
      return {count:state.count+10}
      case 'minus':
        return {count:state.count-1}
      default:
        return state
   }
}
export default count_reducer