<script setup>
  import { ref, onMounted ,onUpdated,onBeforeUpdate} from 'vue'
  import { useStore } from 'vuex'
  
  // 响应式状态
  const count = ref(0)
  const store = useStore()
  console.log(store)
  // 更改状态、触发更新的函数
  function increment() {
    //count.value++
    store.dispatch('updateName', 'Yee')
    store.dispatch('user/updateSex', '女')
  }
  // 生命周期钩子
  onMounted(() => {
    console.log(`计数器初始值为 ${count.value}。`)
  })
  onUpdated((()=>{
    console.log(`计数器初始值为 ${count.value}。`)
  }))
  onBeforeUpdate((()=>{
    console.log(`计数器初始值为 ${count.value}。`)
  }))
  </script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">点击了：{{ count }} 次</button>
    <div>获取Store中的state、getters: {{$store.getters.formatInfo}}</div> 
    <div>获取Store中的state、getters: {{$store.getters['user/formatSex']}}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
