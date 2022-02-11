<template>
  <div class="flex justify-center items-center w-full text-xl">
    <h2>Welcome to \</h2>
    <Sample class="text-blue-400" msg="Tailwind +" />
    <Sample class="text-green-400" msg="Vue +" />
    <Sample class="text-orange-300" msg="Vite +" />
    <Sample class="text-blue-500" msg="TypeScript +" />
    <Sample class="text-blue-900" msg="Cypress +" />
    <Sample class="text-green-500" msg="Vue Router +" />
    <Sample class="text-orange-500" msg="Pinia" />
    <h2>\ starter template</h2>
  </div>
</template>

<script lang="ts">
import Sample from '@/components/Sample.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Sample
  }
})
</script>
