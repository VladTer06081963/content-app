
import { defineEventHandler, readBody } from 'h3';
import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new MistralClient(apiKey);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log('Received body:', body); // Логируем полученное тело запроса
    const userMessages = body.messages; // Получаем все сообщения

    const chatResponse = await client.chat({
      model: 'mistral-large-latest',
      response_format: { type: 'json_object' },
      messages: userMessages,
    });

    console.log('API response:', chatResponse.choices[0].message.content);
    return { message: chatResponse.choices[0].message.content };
  } catch (error) {
    console.error('Ошибка API:', error);
    return { error: error.message };
  }
});
