import { useState } from 'react'

export default function MessageForm({ onSubmitted }) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, text })
    })
    const data = await res.json()
    window.location.href = `https://checkout.stripe.com/pay/${data.id}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Your name (optional)"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
        placeholder="Write something encouraging that someone might need to hear today..."
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Share your message for $1'}
      </button>
    </form>
  )
}