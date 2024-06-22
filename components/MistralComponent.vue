<!-- components/MistralComponent.vue -->

<template>
  <div>
    <h1>Запрос к Mistral</h1>
    <form @submit.prevent="sendMessage">
      <input v-model="userMessage" placeholder="Введите ваше сообщение" />
      <button type="submit">Отправить</button>
    </form>
    <div v-if="loading">Загрузка...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userMessage = ref('');
const loading = ref(false);
const error = ref(null);
const message = ref(null);

const sendMessage = async () => {
  loading.value = true;
  error.value = null;
  message.value = null;

  try {
    const response = await fetch('/api/mistral', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage.value }),
    });
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
};
</script>
