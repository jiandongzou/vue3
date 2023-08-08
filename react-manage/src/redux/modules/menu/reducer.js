
let initState={
    meunList:[]
}
const menu_reducer=(state=initState,action)=>{
   switch(action.type){
      case 'SET_MENU':
      return {menuList:action.menuList}
      default:
        return {...state}
   }
}

export default menu_reducer