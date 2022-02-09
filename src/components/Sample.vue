<template>
  <div>
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
defineProps({
  msg: {
    type: String as PropType<string>,
    required: true
  },
  color: {
    type: String as PropType<string>,
    default: ''
  }
})
</script>
