import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

const configuration = new Configuration({
    organization: "org-RywNIAScaBXgSJpFWk36F9u1",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
openai.listModels().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

const client = axios.create({
    headers: { 'Authorization': 'Bearer ' + configuration.apiKey }
});

const params = {
    "prompt": "Once upon a time",
    "max_tokens": 10
}

client.post('https://api.openai.com/v1/engines/davinci/completions', params)
    .then(result => {
        console.log(params.prompt + result.data.choices[0].text);
    }).catch(err => {
    console.log(err);
});