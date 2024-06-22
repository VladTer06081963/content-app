<!-- components/MistralComponent.vue -->

<template>
  <div>
    <h1>Ответ от Mistral</h1>
    <div v-if="loading">Загрузка...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);
const error = ref(null);
const message = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/api/mistral');
    const data = await response.json();
    
    if (response.ok) {
      if (data.message) {
        message.value = data.message;
      } else {
        error.value = 'Не удалось получить сообщение от API.';
      }
    } else {
      error.value = data.error || 'Ошибка при получении данных от API.';
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>
