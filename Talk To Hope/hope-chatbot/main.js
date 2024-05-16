import { GoogleGenerativeAI } from "@google/generative-ai";
import md from "markdown-it";

//Initialize the model
const genAI = new GoogleGenerativeAI(`${import.meta.env.VITE_API_KEY}`);

const model = genAI.getGenerativeModel({model: 'gemini-pro'});

let history = [];

async function getResponse(prompt) {
    const chat = await model.startChat({history: history});
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    console.log(text);
    return text;
}


//User chat div
export const userDiv = (data) => {
    return `
        <div class="flex items-center gap-2 justify-start">
            <img src="chatbot.jpg" alt="" class="w-10 h-10 rounded-full">
            <p class="bg-[#31a354] text-white p-1 rounded-md shadow-md whitespace-pre-wrap max-w-[80%] text-wrap">${data}</p>
        </div>
    `
}


//AI chat div
export const aiDiv = (data) => {
    return `
        <div class="flex gap-2 justify-end">
            <pre class="bg-[#a1d99b] text-[#31a354] p-1 rounded-md shadow-md max-w-[80%] text-wrap">${data}</pre>
            <img src="chatbot.jpg" alt="" class="w-10 h-10 rounded-full">
        </div>
    `
}

async function handleSubmit() {
    // event.preventDefault();
    console.log("hi");
    let userMessage = document.getElementById("prompt");
    const chatArea = document.getElementById("chat-container");

    var prompt = userMessage.value.trim();

    if(prompt === "") {
        return;
    }

    chatArea.innerHTML += userDiv(prompt);
    userMessage.value = "";
    const aiResponse = await getResponse(prompt);
    let md_text = md().render(aiResponse);
    chatArea.innerHTML += aiDiv(aiResponse);

    let newUserRole = {
        role: "user",
        // parts: [prompt],
        parts: [{text:prompt}]
    };

    let newAiRole = {
        role: "model",
        // parts: [aiResponse],
        parts: [{text: aiResponse}]
    };

    history.push(newUserRole);
    history.push(newAiRole);

    console.log(history);
}

const chatForm = document.getElementById("chat-form");
chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit();
});

chatForm.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        handleSubmit(event);
    }
})
