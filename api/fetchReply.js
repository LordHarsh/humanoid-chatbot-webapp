const { Configuration, OpenAIApi } = require("openai");

export const fetchReply = async (conversations) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // const DEFAULT_PARAMS = {
  //     "model": "text-davinci-002",
  //     "temperature": 0.7,
  //     "max_tokens": 256,
  //     "top_p": 1,
  //     "frequency_penalty": 0,
  //     "presence_penalty": 0
  //   }

  // const completion = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     { role: "system", content: "You are a helpful assistant." },
  //     { role: "user", content: "Hello world" },
  //   ],
  // });
  // const model_message = completion.data.choices[0].message["content"].strip();
  const model_message = "Reply from model";
  return model_message;
};
