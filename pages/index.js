import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MessageBoard from '../components/MessageBoard'
import MessageForm from '../components/MessageForm'

export default function Home() {
  const [messages, setMessages] = useState([])
  const [randomMessage, setRandomMessage] = useState(null)
  const router = useRouter()

  const fetchMessages = async () => {
    const res = await fetch('/api/stripe/get-paid-messages')
    const data = await res.json()
    setMessages(data)
    
    // Get a random message to display
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length)
      setRandomMessage(data[randomIndex])
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Krik.Space
        </h1>
        <p className="text-xl text-gray-600 mb-2">$1 — A random phrase that someone wants you to hear</p>
        <p className="text-gray-500">A closed chain of support and encouragement</p>
      </div>

      {/* Random Message Display */}
      {randomMessage && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">A message for you today:</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-lg text-gray-700 mb-2">"{randomMessage.text}"</p>
            <p className="text-sm text-gray-500">— {randomMessage.name}</p>
          </div>
        </div>
      )}

      {/* Leave Your Message */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Leave your message of support</h2>
        <p className="text-center text-gray-600 mb-6">
          Share something encouraging that someone else might need to hear today
        </p>
        <MessageForm onSubmitted={() => router.push('/success')} />
      </div>

      {/* All Messages */}
      <MessageBoard messages={messages} />
    </main>
  )
}