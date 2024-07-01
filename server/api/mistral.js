// import { defineEventHandler, readBody } from 'h3';
// import MistralClient from '@mistralai/mistralai';

// const apiKey = process.env.MISTRAL_API_KEY;

// const client = new MistralClient(apiKey);

// export default defineEventHandler(async (event) => {
//   try {
//     const body = await readBody(event);
//     const userMessage = body.message;

//     const chatResponse = await client.chat({
//       model: 'mistral-large-latest',
//       response_format: { 'type': 'json_object' },
//       messages: [{ role: 'user', content: userMessage }],
//     });

//     console.log(chatResponse.choices[0].message.content);
//     return { message: chatResponse.choices[0].message.content };
//   } catch (error) {
//     console.error('Ошибка API:', error);
//     return { error: error.message };
//   }
// });

import { defineEventHandler, readBody } from 'h3';
import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new MistralClient(apiKey);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const userMessage = body.message;

    const chatResponse = await client.chat({
      model: 'mistral-large-latest',
      response_format: { 'type': 'json_object' },
      messages: [{ role: 'user', content: userMessage }],
    });

    console.log(chatResponse.choices[0].message.content);
    return { message: chatResponse.choices[0].message.content };
  } catch (error) {
    console.error('Ошибка API:', error);
    return { error: error.message };
  }
});