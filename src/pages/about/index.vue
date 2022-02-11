<template>
  <div class="flex justify-center">
    <h2 class="text-xl">This is about page</h2>
  </div>
  <div class="flex justify-center p-4">
    <button class="w-16 border" @click="increment">Click</button>
    <h2>This is Pinia Store Counter {{ count }}</h2>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const countStore = useStore()

    const { count, increment } = toRefs(countStore)
    return {
      count,
      increment
    }
  }
})
</script>
