<template>
  <div class="w-full justify-center">
    <div class="p-6 justify-center flex items-center text-2xl">
      <RouterLink
        class="cursor-pointer hover:text-green mr-2"
        :to="{ path: '/' }"
      >
        Home
      </RouterLink>
      |
      <RouterLink
        class="cursor-pointer hover:text-green ml-2"
        :to="{ path: '/about' }"
      >
        About
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>
