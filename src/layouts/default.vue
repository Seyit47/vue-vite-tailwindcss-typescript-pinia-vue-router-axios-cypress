<template>
  <div class="justify-center w-full">
    <div class="flex justify-center items-center p-6 text-2xl">
      <RouterLink
        class="mr-2 hover:text-green-600 transition ease-in cursor-pointer"
        :to="{ path: '/' }"
      >
        Home
      </RouterLink>
      |
      <RouterLink
        class="ml-2 hover:text-green-600 transition ease-in cursor-pointer"
        :to="{ path: '/about' }"
      >
        About
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>
