import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
  const count = useLocalStorage('count', '0')
  function increment() {
    count.value = `${Number(count.value) + 1}`
  }
  return {
    count,
    increment
  }
})
