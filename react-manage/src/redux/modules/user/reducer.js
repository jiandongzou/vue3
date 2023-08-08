
let initSate={
    name:'admin',
    auth:'',
    token:'',
    permisssons:[]
}
const userReducer=(state=initSate,action)=>{
    switch(action.type){
       case 'SET_NAME':
           alert(action.type)
         return  Object.assign({...state},{name:action.name});
       case 'SET_TOKEN':
         return  Object.assign({...state},{token:action.token});
        case 'SET_ PERMISSIONS':
         return Object.assign({...state},{permisssons:action.permisssons});
         case 'CLEAR_INFO':
            return {
                name:'',
                auth:'',
                token:'',
                permisssons:[]
            };
        default:
           return {...state}

    }
     
}
export default userReducer