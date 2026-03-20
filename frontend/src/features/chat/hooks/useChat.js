import { useDispatch } from 'react-redux'
import {
  setChats, addChat, setActiveChat,
  setMessages, addMessage, setLoading, setError,
  clearMessages, removeChat, setFileText, setFileUrl, clearFile
} from '../chat.slice'
import { getAllChats, getAllMessage, sendMessage, deleteChat, uploadFileApi } from '../services/chat.api'
import { initializeSocket } from '../services/chat.socket'

export const useChat = () => {
  const dispatch = useDispatch()
  const socket = initializeSocket()

  async function handleGetAllChats() {
    try {
      dispatch(setLoading(true))
      const data = await getAllChats()
      dispatch(setChats(data.chats))
    } catch (err) {
      dispatch(setError(err.response?.data?.message || 'Failed to fetch chats'))
    } finally {
      dispatch(setLoading(false))
    }
  }

  async function handleGetChatMessages(chatId) {
    try {
      dispatch(setLoading(true))
      dispatch(setActiveChat(chatId))
      const data = await getAllMessage(chatId)
      dispatch(setMessages(data.messages))
    } catch (err) {
      dispatch(setError(err.response?.data?.message || 'Failed to fetch messages'))
    } finally {
      dispatch(setLoading(false))
    }
  }

  async function handleSendMessage({ message, chatId, fileText }) {
    try {
      dispatch(addMessage({ role: 'user', content: message }))
      dispatch(setLoading(true))

      const data = await sendMessage({ message, chatId, fileText })

      if (data.chat) {
        dispatch(addChat(data.chat))
        dispatch(setActiveChat(data.chat._id))
        await handleGetAllChats()
      }

      dispatch(addMessage({
        role: 'ai',
        content: data.aiMessages.content
      }))

       dispatch(clearFile())
    } catch (err) {
      dispatch(setError(err.response?.data?.message || 'Failed to send message'))
    } finally {
      dispatch(setLoading(false))
    }
  }

  async function handleNewChat() {
    dispatch(clearMessages())
    dispatch(clearFile())
  }

  async function handleDeleteChat(chatId) {
    try {
      await deleteChat(chatId)
      dispatch(removeChat(chatId))
      dispatch(clearMessages())
    } catch (err) {
      dispatch(setError('Failed to delete chat'))
    }
  }

  async function handleUploadFile(file) {
    try {
      dispatch(setLoading(true))
      const data = await uploadFileApi(file)
      dispatch(setFileText(data.text))
      dispatch(setFileUrl(data.url))
      return data
    } catch (err) {
      dispatch(setError('Failed to upload file'))
    } finally {
      dispatch(setLoading(false))
    }
  }

  return {
    handleGetAllChats,
    handleGetChatMessages,
    handleSendMessage,
    handleNewChat,
    handleDeleteChat,
    handleUploadFile,
    socket
  }
}