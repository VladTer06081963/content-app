<template>
    <div>
      <a href="/">Home</a>
      <h1>{{ title }}</h1>
      
      <p class="text-yellow-400">{{ text }}</p>
      <!-- <p v-html="pageContent.body"></p> -->
    </div>
  </template>

  <script setup>
  const title = "primer"
  const text = "Это пример страницы с использованием Nuxt.Content!!!"
</script>
