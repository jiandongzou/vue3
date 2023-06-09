<script setup>
  import { storeToRefs } from 'pinia'
  import useStore from '../pinia/index'
    const { counter, user} = useStore()

// 使用storeToRefs可以保证解构出来的数据也是响应式的
  const { count, double } = storeToRefs(counter);
  const { name, age } = storeToRefs(user);
  
    </script>
    
    <template>
      <h1>根组件---{{ count }}</h1>
      <h3>{{ double }}</h3>
      <h3>{{ name }}{{ age }}</h3>
      <button @click="counter.increment">加1</button>
      <button @click="counter.incrementAsync">异步加1</button>
    </template>