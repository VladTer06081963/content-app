<!-- components/MistralComponent.vue -->

<template>
  <h1 class="h-7 text-center text-2xl">Запрос к Mistral</h1>
  <div class="bg-gray-700 text-center m-4 p-3">
    <form @submit.prevent="sendMessage">
      <input v-model="userMessage" placeholder="Введите ваш вопрос" />
      <button type="submit" class="text-white m-3">Отправить</button>
    </form>
    <!-- Кнопка для начала нового диалога -->
    <button @click="startNewDialog" class="text-white m-3">Начать новый диалог</button>
  </div>
  <!-- Лоадер -->
  <div v-if="loader" class="loader"></div>
  <div v-if="error">{{ error }}</div>
  <div v-for="msg in messages" :key="msg.question">
    <p><strong>Вопрос:</strong> {{ msg.question }}</p>
    <p><strong>Ответ:</strong> {{ msg.answer }}</p>
  </div>
  <div>
    <h2>История диалогов</h2>
    <div v-for="(dialog, index) in history" :key="index">
      <h3>Диалог {{ index + 1 }}</h3>
      <div v-for="msg in dialog" :key="msg.question">
        <p><strong>Вопрос:</strong> {{ msg.question }}</p>
        <p><strong>Ответ:</strong> {{ msg.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userMessage = ref('');
const loader = ref(false);
const error = ref(null);
const messages = ref([]); // Текущий диалог
const history = ref([]); // История диалогов

const sendMessage = async () => {
  loader.value = true;
  error.value = null;

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
        messages.value.push({ question: userMessage.value, answer: data.message }); // Добавить вопрос и ответ в текущий диалог
        userMessage.value = ''; // Очистить поле ввода после отправки сообщения
      } else {
        error.value = 'Не удалось получить сообщение от API.';
      }
    } else {
      error.value = data.error || 'Ошибка при получении данных от API.';
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    loader.value = false;
  }
};

// Функция для начала нового диалога
const startNewDialog = () => {
  console.log("Starting new dialog"); // Для отладки
  if (messages.value.length > 0) {
    history.value.push([...messages.value]); // Сохранить текущий диалог в историю
  }
  messages.value = []; // Обнуление массива текущего диалога
  error.value = null;
  userMessage.value = '';
};
</script>

<style>
p {
  width: 600px;
  margin: 50px auto;
  line-height: 170%;
  text-align: center;
  color: #b5b5bc;
}

#message {
  width: 700px;
  margin: 0 auto;
  max-height: 600px;
  overflow-y: auto;
  margin-bottom: 220px;
}

#message::-webkit-scrollbar {
  width: 5px;
}

#message::-webkit-scrollbar-track {
  background: #575a6c;
}

#message::-webkit-scrollbar-thumb {
  background: #17181e;
}

#message::-webkit-scrollbar-thumb:hover {
  background: #d26565;
}

.mess-user {
  background: #434654;
  padding: 20px 25px;
}

.mess-chat {
  background: #2b2d37;
  padding: 20px 25px;
}

form {
  position: fixed;
  bottom: 100px;
  width: 100%;
  text-align: center;
}

form input {
  background: #40414f;
  border-radius: 5px;
  padding: 15px 20px;
  font-family: "Inter", sans-serif;
  border: 1px solid transparent;
  color: #ececf1;
  outline: none;
  width: 500px;
}

form input:focus {
  border-color: #d26565;
}

form input::-webkit-input-placeholder {
  color: #6c6e83;
}

/* loader */
.loader {
  display: inline-block; /* Показать лоадер */
  border: 4px solid #f3f3f3; /* Цвет фона */
  border-top: 4px solid #ff0000; /* Цвет анимации */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

button {
  background-color: #40414f;
  border-radius: 5px;
  padding: 10px 15px;
  font-family: "Inter", sans-serif;
  border: 1px solid transparent;
  color: #ececf1;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #d26565;
}
</style>