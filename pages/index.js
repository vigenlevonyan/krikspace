import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MessageWall from '../components/MessageWall'
import MessageForm from '../components/MessageForm'

export default function Home() {
  const [messages, setMessages] = useState([])
  const router = useRouter()

  const fetchMessages = async () => {
    const res = await fetch('/api/stripe/get-paid-messages')
    const data = await res.json()
    setMessages(data)
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Krik.Space</h1>
      <MessageForm onSubmitted={() => router.push('/success')} />
      <MessageWall messages={messages} />
    </main>
  )
}