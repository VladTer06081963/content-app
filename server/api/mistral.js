import { defineEventHandler } from 'h3';
import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY ;

const client = new MistralClient(apiKey);

export default defineEventHandler(async (event) => {
  try {
    const chatResponse = await client.chat({
      model: 'mistral-large-latest',
      messages: [{ role: 'user', content: '4 цитаты великих людей' }],
    });
    console.log('Chat:', chatResponse.choices[0].message.content);
    const chats = chatResponse.choices[0].message.content;
    return { message: chatResponse.choices[0].message.content };
  } catch (error) {
    console.error('Ошибка API:', error);// added
    return { error: error.message };
  }
});
