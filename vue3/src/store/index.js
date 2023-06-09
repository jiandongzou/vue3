// vue3中创建store实例对象的方法createStore()按需引入
import { createStore } from 'vuex'
import user  from "./modules/user"

export default createStore({
  state: {
    userName:'vuexxxxxxx'
  },
  mutations: {
    updateName (state, payload) {
        state.userName = payload
    }
  },
  actions: {
     // 定义actions，用于修改状态(异步)
    // 2秒后更新状态
    updateName(context, payload) {
        setTimeout(() => {
          context.commit('updateName', payload)
        }, 2000)
      }
  },
  getters: {
    formatInfo (state) {
        return state.userName + 'Tom1'
      }
  },
  modules: {
    user
  }
})
