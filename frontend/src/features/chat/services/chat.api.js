import axios from 'axios'
const api = axios.create({
    baseURL:"https://querynest-fullstack-ai-project-1.onrender.com/",
    withCredentials:true
})

export async function getAllChats(){
    const response = await api.get("/api/chats")
    return response.data
}

export async function getAllMessage(chatId){
    const response  = await api.get(`/api/chats/${chatId}/messages`)
    return response.data
}
export async function sendMessage({ message, chatId }){
    const response = await api.post("/api/chats/message",{
        message,
        chat:chatId
    })
    return response.data

}

export async function deleteChat(chatId) {
  const response = await api.delete(`/api/chats/${chatId}`)
  return response.data
}

