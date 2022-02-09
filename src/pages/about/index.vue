<template>
  <div class="flex justify-center">
    <h2 class="text-xl">This is about page</h2>
  </div>
  <div class="justify-center flex p-4">
    <button class="border w-16" @click="increment">Click</button>
    <h2>This is Pinia Store Counter {{ count }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { toRefs } from 'vue'

const countStore = useStore()

const { count, increment } = toRefs(countStore)
</script>
