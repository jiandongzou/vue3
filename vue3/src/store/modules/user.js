// user.js模块
// 导出
export default {
    namespaced: true, // 为每个模块添加一个前缀名，保证模块命明不冲突 
    state: () => {
        return{
            sex:"男"
        }
      
    },
    mutations: {
       updateSex(state,payload){
        state.sex=payload
       }
    },
    actions: {
        updateSex(context,payload){
         setTimeout(()=>{
            context.commit('updateSex', payload)
         },1000)
        }
    },
    getters: {
        formatSex (state) {
            return state.sex +  new Date()
          }
      },
  }
  
  