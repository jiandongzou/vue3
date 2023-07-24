 const increment = data => ({ type: 'add', data })
 const Asyncincrement= (data)=>{
    return (dispatch)=>{
      setTimeout(()=>{
        //console.log(dispatch({ type: 'add', data }));
        dispatch({ type: 'add', data })
      },1000)
    }
 }
 export{
    increment,
    Asyncincrement
 }