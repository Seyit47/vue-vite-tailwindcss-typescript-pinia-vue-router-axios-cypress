import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

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
