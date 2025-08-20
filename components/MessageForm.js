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
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <input
        className="w-full border p-2 rounded"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Your scream..."
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Processing...' : 'Pay $1 and scream'}
      </button>
    </form>
  )
}